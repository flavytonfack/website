import type { Metadata } from "next";
import { CaseStudyNav, caseStudyNav } from "@/components/case-study-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { requireCaseStudyAccess } from "@/lib/case-study-access";

export const metadata: Metadata = {
  title: "Financial Professionals Portal",
  description:
    "Bridging strategic design and vendor engineering to deliver a responsive, brand-aligned portal for financial professionals.",
};

const asset = (name: string) => `/work/financial-professionals/${name}`;

const challenges = [
  {
    number: "01",
    title: "Disconnected Engineering-Led Development",
    body: "FAST built the portal without dedicated UX support or close stakeholder collaboration, resulting in an experience driven by back-end structure rather than user needs.",
  },
  {
    number: "02",
    title: "Disconnected Brand & Functional Experience",
    body: "The portal used generic vendor UI with no Global Atlantic branding, while key user needs and priorities from EY’s visioning work were left out of development entirely.",
  },
  {
    number: "03",
    title: "Complex Navigation & Limited Mobile Access",
    body: "Complex tables, nested menus, and unclear navigation slowed agents down, while the lack of mobile and tablet support limited access during in-person client meetings in the field.",
  },
  {
    number: "04",
    title: "Cross-Team Alignment",
    body: "Designing the portal required continuous alignment across multiple independent teams: reconciling vendor technical constraints (FAST) with design system foundations (Capco) and business goals (GA).",
  },
] as const;

const responsibilities = [
  "Created the sitemap for the Financial Professionals Portal.",
  "Designed 40+ key screens for the dashboards, policies, policy details, accounts, document uploads, and case details.",
  "Partnered directly with engineers to create  reusable components such as tables, hierarchy view, search bars, notifications, and status tags.",
  "Reviewed what engineers built in test environments, flagged bugs, and helped them match the designs.",
] as const;

const principles = [
  {
    icon: "icons/widgets.svg",
    title: "Design for reusable components",
    body: "I focused on high-impact UI patterns that FAST could realistically build and reuse.",
  },
  {
    icon: "icons/account-tree.svg",
    title: "Organize around user tasks",
    body: "I restructured navigation around advisor priorities instead of backend data structures.",
  },
  {
    icon: "icons/balance.svg",
    title: "Balance usability with feasibility",
    body: "When technical limits blocked the ideal solution, I designed practical alternatives that preserved clarity and usability.",
  },
] as const;

const pillars = [
  "Dashboard (action items & alerts)",
  "Book of Business (policies & clients)",
  "My GA Relationship (commissions, compliance, and hierarchy)",
  "Tools & Resources",
  "Support - transforming a disparate database structure into an intuitive, task-first mental model.",
] as const;

const componentImages = [
  { src: "hierarchy-navigation.png", width: 3008, height: 2052, alt: "Hierarchy navigation tree components" },
  { src: "mobile-hierarchy.png", width: 2356, height: 1132, alt: "Mobile hierarchy navigation tree" },
  { src: "notification-cards.png", width: 3200, height: 2144, alt: "Notification card components" },
  { src: "hierarchy-table-1.png", width: 4096, height: 3097, alt: "Hierarchy table" },
  { src: "hierarchy-table-2.png", width: 4088, height: 3168, alt: "Hierarchy table details" },
] as const;

const accountImages = [
  { src: "my-account-desktop.png", width: 4096, height: 3240, alt: "My Account on desktop" },
  { src: "my-account-tablet.png", width: 2636, height: 4096, alt: "My Account on tablet" },
  { src: "my-account-mobile.png", width: 2716, height: 4096, alt: "My Account on mobile" },
] as const;

const uploadImages = [
  { src: "document-upload-1.png", width: 4096, height: 2837, alt: "Document upload guidelines" },
  { src: "document-upload-2.png", width: 4096, height: 2837, alt: "Document upload staging" },
  { src: "document-upload-3.png", width: 4096, height: 2837, alt: "Document upload confirmation" },
] as const;

function Section({
  children,
  gap,
  id,
}: {
  children: React.ReactNode;
  gap: string;
  id: string;
}) {
  return (
    <section
      id={id}
      className="flex scroll-mt-[148px] justify-center px-4 py-10 md:scroll-mt-[168px] md:px-8 md:py-16 lg:px-20 lg:py-20"
    >
      <div className={`flex w-full max-w-[1280px] flex-col ${gap}`}>{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] font-medium leading-[21px] text-blue md:text-[16px] md:leading-6">
      {children}
    </p>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[16px] font-semibold leading-6 text-ink md:text-[18px] md:leading-[27px]">
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
      {children}
    </p>
  );
}

function Stack({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 md:gap-6">{children}</div>;
}

function Shot({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      className="w-full object-cover"
      style={{ aspectRatio: `${width} / ${height}` }}
    />
  );
}

function ProblemSolution({ problem, solution }: { problem: string; solution: string }) {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-[16px] font-semibold leading-6 text-slate md:text-[18px] md:leading-[27px]">
          Design problem
        </p>
        <Body>{problem}</Body>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-[16px] font-semibold leading-6 text-slate md:text-[18px] md:leading-[27px]">
          Design solution
        </p>
        <Body>{solution}</Body>
      </div>
    </>
  );
}

function DesignTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[16px] font-semibold leading-6 text-blue md:text-[18px] md:leading-[27px]">
      {children}
    </h3>
  );
}

function AccountSection() {
  return (
    <Stack>
      <DesignTitle>My Account &amp; Profile Management (Desktop, Tablet &amp; Mobile)</DesignTitle>
      <ProblemSolution
        problem="Managing personal details, multiple addresses, and delivery preferences was rigid and non-responsive, requiring support calls for basic updates without self-service editing or mobile access."
        solution="A responsive self-service profile featuring view/edit modes, multi-address management, and dynamic form inputs that reflow from multi-column desktop grids into accessible single-column mobile layouts."
      />
      <div className="flex flex-col gap-6">
        {accountImages.map((image) => (
          <Shot key={image.src} {...image} />
        ))}
      </div>
    </Stack>
  );
}

export default async function FinancialProfessionalsPortal() {
  await requireCaseStudyAccess("financial-professionals-portal");

  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <CaseStudyNav items={caseStudyNav} />
      <main>
        <section className="flex justify-center px-4 pb-10 pt-24 md:px-8 md:pb-16 md:pt-[120px] lg:px-20 lg:pb-20 lg:pt-40">
          <div className="flex w-full max-w-[1280px] flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[29px] tracking-[0.096px] text-ink md:text-[36px] md:leading-[43px] md:tracking-[0.216px] lg:text-[40px] lg:leading-[48px] lg:tracking-[0.32px]">
                Financial Professionals Portal
              </h1>
              <p className="text-[16px] font-normal leading-6 text-slate md:text-[18px] md:leading-[27px]">
                Bridging strategic design and vendor engineering to deliver a responsive,
                brand-aligned portal for financial professionals.
              </p>
            </div>
            <img
              src={asset("hero.png")}
              alt="Financial Professionals Portal homepage"
              width={4096}
              height={3376}
              className="aspect-[4096/3376] w-full object-cover"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-20 md:gap-y-10 lg:gap-x-[120px]">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  CLIENT
                </p>
                <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  Global Atlantic
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  ROLE
                </p>
                <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  UX Designer
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  DURATION
                </p>
                <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  14 months
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  PLATFORMS
                </p>
                <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  Responsive Web (Desktop, Tablet, Mobile)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  DELIVERABLES
                </p>
                <p className="whitespace-pre-line text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  {`Sitemap
40+ Production screens
Design system components`}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                  CROSS-FUNCTIONAL TEAM
                </p>
                <p className="whitespace-pre-line text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                  {`Design & Strategy (EY)
Engineering
Stakeholders
External vendors`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section id="overview" gap="gap-8 md:gap-10 lg:gap-12">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>OVERVIEW</SectionLabel>
              <Subhead>Context</Subhead>
            </div>
            <div className="flex flex-col text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
              <p>
                Global Atlantic engaged EY to transform their Life &amp; Annuity application
                experience for financial professionals. While EY established the strategic vision, GA
                simultaneously contracted an external technology vendor (FAST) to implement the
                financial professionals portal.
              </p>
              <p>
                The vendor delivered an engineering-driven, non-responsive prototype that missed
                GA’s brand standards and core functional priorities.
              </p>
              <p>
                I was brought in to bridge the gap, re-anchoring the portal around financial
                professional workflows, adapting GA’s newly emerging design system, and creating an
                intuitive digital experience.
              </p>
            </div>
          </Stack>
          <Stack>
            <Subhead>Challenges</Subhead>
            <Body>
              The portal developed by FAST had these critical gaps:
            </Body>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              {challenges.map((challenge) => (
                <article
                  key={challenge.title}
                  className="flex flex-col gap-2 rounded-xl bg-surface p-4 md:p-6 lg:p-8"
                >
                  <p className="text-[14px] font-medium leading-[21px] text-slate md:text-[16px] md:leading-6">
                    {challenge.number}
                  </p>
                  <h4 className="text-[14px] font-semibold leading-[21px] text-ink md:text-[16px] md:leading-6">
                    {challenge.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[16px] md:leading-6">
                    {challenge.body}
                  </p>
                </article>
              ))}
            </div>
            <div className="relative aspect-[706/821] w-full overflow-hidden">
              <img
                src={asset("design-plan.png")}
                alt="Global Atlantic design plan"
                width={1200}
                height={1395}
                className="absolute top-[-4.99%] left-[-6.11%] h-[110.23%] w-[112.07%] max-w-none"
              />
            </div>
          </Stack>
          <Stack>
            <Subhead>My role</Subhead>
            <Body>
              I worked as the main bridge between our design team, the client, and the vendor’s
              engineers. Here is what I owned:
            </Body>
            <ul className="flex flex-col gap-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <img src={asset("icons/highlighter.svg")} alt="" width={24} height={24} />
                  <p className="text-[16px] font-medium leading-6 text-ink md:text-[18px] md:leading-[27px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </Stack>
        </Section>

        <Section id="approach" gap="gap-10 md:gap-[60px] lg:gap-16">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>APPROACH</SectionLabel>
              <Subhead>My Thinking &amp; Strategic Approach</Subhead>
            </div>
            <div className="flex flex-col text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
              <p>
                Joining an active vendor-led build meant the solution had to work within existing
                technical constraints and sprint commitments. My role was to connect user needs,
                design standards, and engineering realities.
              </p>
              <p>Three principles guided the redesign:</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="flex flex-col gap-2 rounded-xl bg-surface p-4 md:p-8 lg:min-h-[190px]"
                >
                  <img src={asset(principle.icon)} alt="" width={32} height={32} />
                  <h4 className="text-[14px] font-semibold leading-[21px] text-ink md:text-[16px] md:leading-6">
                    {principle.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[16px] md:leading-6">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </Stack>
          <Stack>
            <Subhead>Rebuilding the sitemap around financial professional priorities</Subhead>
            <Body>
              To replace FAST’s backend-driven layout, I designed the portal’s sitemap from scratch
              around core financial professional workflows. I established a clear information
              hierarchy grouped into five distinct pillars:
            </Body>
            <ul className="flex flex-col gap-4">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-center gap-1">
                  <img src={asset("icons/check.svg")} alt="" width={24} height={24} />
                  <p className="text-[16px] font-medium leading-6 text-ink md:text-[18px] md:leading-[27px]">
                    {pillar}
                  </p>
                </li>
              ))}
            </ul>
            <img
              src={asset("sitemap.png")}
              alt="Financial Professionals Portal sitemap"
              width={3270}
              height={2852}
              className="aspect-[3270/2852] w-full object-cover"
            />
          </Stack>
          <Stack>
            <Subhead>Meet Engineering at the Component Level</Subhead>
            <Body>
              I collaborated directly with FAST’s engineers to build a scalable, modular design
              system. I designed and standardized three high-impact UI primitives that integrated
              into their existing codebase:
            </Body>
            <div className="flex flex-col gap-6">
              {componentImages.map((image) => (
                <Shot key={image.src} {...image} />
              ))}
            </div>
          </Stack>
        </Section>

        <Section id="design" gap="gap-[60px] md:gap-24 lg:gap-[120px]">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>DESIGN</SectionLabel>
              <DesignTitle>Portal Homepage (Desktop, Tablet &amp; Mobile)</DesignTitle>
            </div>
            <ProblemSolution
              problem="Financial professionals lacked a centralized operational hub to prioritize urgent tasks, track pending applications, and manage policies seamlessly across desktop, tablet, and mobile devices."
              solution="A modular, responsive dashboard that surfaces prioritized NIGO alerts, compliance statuses, and actionable policy tables, adapting from multi-column desktop grids into touch-friendly tablet and mobile accordions."
            />
            <Shot
              src="portal-homepage.png"
              width={3081}
              height={4096}
              alt="Portal homepage across desktop, tablet, and mobile"
            />
          </Stack>
          <Stack>
            <DesignTitle>Notification Center &amp; Workflows (Desktop, Tablet &amp; Mobile)</DesignTitle>
            <ProblemSolution
              problem="Time-sensitive alerts were buried across disparate accounts without centralized tracking, prioritization, or mobile access, causing financial professionals to miss critical underwriting delays like NIGO requirements."
              solution="A unified notification hub featuring color-coded priority cues, multi-tier filtering, and contextual quick actions (Mark as Read, Delete), scaling seamlessly across desktop, tablet, and mobile."
            />
            <div className="flex flex-col gap-6">
              <Shot
                src="desktop-notification.png"
                width={4096}
                height={2832}
                alt="Notification center on desktop"
              />
              <Shot
                src="tablet-notification.png"
                width={3241}
                height={4096}
                alt="Notification center on tablet"
              />
              <Shot
                src="mobile-notification.png"
                width={2932}
                height={2496}
                alt="Notification center on mobile"
              />
            </div>
          </Stack>
          <Stack>
            <DesignTitle>Policies Overview &amp; Portfolio Management (Desktop, Tablet &amp; Mobile)</DesignTitle>
            <ProblemSolution
              problem="Managing large, multi-status policy portfolios on desktop resulted in overwhelming horizontal data tables, with no responsive layout for financial professionals accessing contracts on mobile devices."
              solution="A categorized policy hub pairing high-level status metrics with adaptive data views that transform dense desktop tables into expandable, touch-friendly policyholder cards across tablet and mobile."
            />
            <Shot
              src="policies-overview.png"
              width={4096}
              height={3497}
              alt="Policies overview across desktop, tablet, and mobile"
            />
          </Stack>
          <AccountSection />
          <Stack>
            <DesignTitle>Supporting Document Upload Workflow</DesignTitle>
            <ProblemSolution
              problem="Uploading policy documents lacked in-context access, pre-flight file validation, and clear feedback, causing high rejection rates and accidental data loss during submission."
              solution="An in-context modal featuring clear file guidelines, drag-and-drop staging with real-time size validation, exit protection guardrails, and persistent status confirmation banners."
            />
            <div className="flex flex-col gap-6">
              {uploadImages.map((image) => (
                <Shot key={image.src} {...image} />
              ))}
            </div>
          </Stack>
        </Section>

        <Section id="outcomes" gap="gap-8 md:gap-10 lg:gap-12">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>OUTCOMES &amp; LESSONS</SectionLabel>
              <Subhead>Launching a consistent, accessible, and brand-aligned experience</Subhead>
            </div>
            <Body>
              By creating a consistent set of components and organizing the portal around financial
              professional needs, we brought EY’s vision into FAST’s existing build across 40+
              screens. The result was a cohesive, branded Global Atlantic experience instead of a
              generic vendor portal.
            </Body>
          </Stack>
          <Stack>
            <Subhead>Key learnings</Subhead>
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              <article className="flex flex-col gap-2 rounded-xl bg-surface p-8">
                <h4 className="text-[16px] font-semibold leading-6 text-blue">
                  Design Systems Create Alignment
                </h4>
                <p className="text-[16px] font-normal leading-6 text-ink">
                  With multiple teams involved, Figma screens alone were not enough. A shared
                  component library with clear states, responsive rules, and developer guidance
                  helped keep the experience consistent.
                </p>
              </article>
              <article className="flex flex-col gap-2 rounded-xl bg-surface p-8">
                <h4 className="text-[16px] font-semibold leading-6 text-blue">
                  Practical Trade-Offs Protect Usability
                </h4>
                <p className="text-[16px] font-normal leading-6 text-ink">
                  By understanding FAST’s technical limits, I could make realistic design trade-offs
                  that preserved the core advisor experience, built developer trust, and helped
                  recommendations move into production faster.
                </p>
              </article>
            </div>
          </Stack>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
