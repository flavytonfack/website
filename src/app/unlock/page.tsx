import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, caseStudySlug, isCaseStudyUnlocked } from "@/lib/case-study-access";
import { unlockCaseStudy } from "./actions";

export const metadata: Metadata = {
  title: "This case study is protected",
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ study?: string; error?: string }>;
}) {
  const params = await searchParams;
  const slug = caseStudySlug(params.study);
  const incorrect = params.error === "1";

  if (slug && (await isCaseStudyUnlocked())) {
    redirect(caseStudies[slug]);
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <a
        href="/"
        className="flex items-center gap-2 px-4 py-6 text-[16px] font-semibold leading-6 text-ink hover:text-accent md:px-8 lg:px-20"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
            fill="currentColor"
          />
        </svg>
        Back to portfolio
      </a>
      <main className="flex justify-center px-4 py-24 md:px-8 md:py-[120px] lg:px-20 lg:py-40">
        <div className="flex w-full max-w-[1280px] justify-center">
          <section className="flex w-full flex-col items-center gap-10 rounded-lg bg-surface px-6 py-12 lg:w-[628px]">
            <h1 className="text-center text-[20px] font-bold leading-6 tracking-[0.08px] text-ink md:text-[24px] md:font-semibold md:leading-[29px] md:tracking-[0.096px]">
              This case study is protected 🔒
            </h1>
            <form action={unlockCaseStudy} className="flex w-full flex-col gap-4 md:w-[410px]">
              {slug ? <input type="hidden" name="study" value={slug} /> : null}
              <input
                type="password"
                name="password"
                required
                autoFocus
                autoComplete="off"
                spellCheck={false}
                placeholder="Enter password"
                aria-label="Enter password"
                aria-invalid={incorrect || undefined}
                aria-describedby={incorrect ? "password-error" : undefined}
                className="h-[55px] w-full rounded-lg bg-background px-4 text-[14px] font-medium leading-[21px] text-ink outline-none placeholder:text-slate"
              />
              {incorrect ? (
                <p id="password-error" role="alert" className="text-[14px] font-medium leading-[21px] text-red">
                  Please enter the correct password.
                </p>
              ) : null}
              <button
                type="submit"
                className="group flex h-[55px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent-soft px-4 text-[14px] font-semibold leading-[21px] text-ink transition-[scale,background-color] duration-300 ease-out hover:bg-accent motion-safe:hover:scale-[1.02]"
              >
                View case study
                <img
                  src="/icons/arrow-outward-22.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                />
              </button>
            </form>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
