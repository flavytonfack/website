"use server";

import { caseStudySlug, grantCaseStudyAccess } from "@/lib/case-study-access";

export async function unlockCaseStudy(formData: FormData) {
  const entered = String(formData.get("password") ?? "");
  const slug = caseStudySlug(String(formData.get("study") ?? ""));
  await grantCaseStudyAccess(entered, slug);
}
