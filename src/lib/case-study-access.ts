import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "case_study_access";

export const caseStudies = {
  "financial-professionals-portal": "/work/financial-professionals-portal",
  "employee-support-portal": "/work/employee-support-portal",
  "air-quality-experience": "/work/air-quality-experience",
} as const;

export type CaseStudySlug = keyof typeof caseStudies;

export function caseStudySlug(value: string | undefined): CaseStudySlug | null {
  if (value && value in caseStudies) return value as CaseStudySlug;
  return null;
}

function password() {
  return process.env.CASE_STUDY_PASSWORD ?? "";
}

function accessToken() {
  return createHmac("sha256", password()).update(COOKIE).digest("hex");
}

function matches(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && a.length > 0 && timingSafeEqual(a, b);
}

export async function isCaseStudyUnlocked() {
  const expected = password();
  if (!expected) return false;
  const current = (await cookies()).get(COOKIE)?.value ?? "";
  return matches(current, accessToken());
}

export async function requireCaseStudyAccess(slug: CaseStudySlug) {
  if (!(await isCaseStudyUnlocked())) {
    redirect(`/unlock?study=${slug}`);
  }
}

export async function grantCaseStudyAccess(entered: string, slug: CaseStudySlug | null) {
  if (!matches(entered, password())) {
    const study = slug ? `study=${slug}&` : "";
    redirect(`/unlock?${study}error=1`);
  }

  const jar = await cookies();
  jar.set(COOKIE, accessToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(slug ? caseStudies[slug] : "/");
}
