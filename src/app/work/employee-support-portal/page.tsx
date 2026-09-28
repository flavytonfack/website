import type { Metadata } from "next";
import { CaseStudyNav, caseStudyNav } from "@/components/case-study-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { requireCaseStudyAccess } from "@/lib/case-study-access";

export const metadata: Metadata = {
  title: "Employee Support Portal",
  description:
    "I redesigned key experiences across Kraft Heinz’s Noodle Portal to help employees find relevant help articles, connect with support teams, and submit IT tickets.",
};

const asset = (name: string) => `/work/employee-support/${name}`;

const challenges = [
  {
    number: "01",
    title: "Fragmented Support Experience",
    body: "Employees used different support paths for articles, live chat, and IT tickets, creating a disconnected experience across the platform.",
  },
  {
    number: "02",
    title: "Difficult Information Discovery",
    body: "Employees needed a faster and clearer way to search for relevant help content and find answers without contacting support.",
  },
  {
    number: "03",
    title: "Inconsistent Cross-Device Experience",
    body: "The portal needed to provide a consistent and intuitive experience across desktop and mobile while adapting to different screen sizes and interaction patterns.",
  },
  {
    number: "04",
    title: "Tight Project Transition",
    body: "I joined the project mid-stream and had to quickly understand the existing requirements and design direction, maintain consistency with completed work, and deliver the remaining interfaces within a constrained timeline.",
  },
] as const;

const responsibilities = [
  "Designed polished desktop interfaces for the Noodle Portal, translating project requirements into detailed visual designs.",
  "Designed the desktop search interface to help employees find relevant help articles and support information.",
  "Designed the desktop chat experience, enabling employees to communicate with support teams through the portal.",
  "Designed the mobile ticket submission flow, allowing employees to request IT support through a mobile-friendly experience.",
  "Developed a brand style guide to establish visual consistency across the redesigned portal and support a cohesive interface across desktop and mobile.",
] as const;

const researchInsights = [
  {
    title: "Request Help was the top priority",
    body: "Employees consistently identified support as a critical journey.",
  },
  {
    title: "Support affected multiple employee types",
    body: "The journey impacted office, plant, and other employee personas.",
  },
  {
    title: "Self-service was difficult to navigate",
    body: "Employees struggled to find relevant and reliable information.",
  },
  {
    title: "Search lacked relevance and clarity",
    body: "Outdated content and unclear results made problem-solving harder.",
  },
  {
    title: "Ticketing lacked transparency",
    body: "Employees had limited visibility into status, ownership, and resolution.",
  },
  {
    title: "The experience felt fragmented",
    body: "Search, chat, and ticketing operated as disconnected support paths.",
  },
] as const;

const strategyInsights = [
  {
    title: "Search should support fast self-service",
    body: "Help employees find relevant answers with less effort.",
  },
  {
    title: "Search results need stronger relevance",
    body: "Prioritize useful, up-to-date support content.",
  },
  {
    title: "Chat should provide a clear escalation path",
    body: "Chat should provide a clear escalation path",
  },
  {
    title: "Employees need visibility during support",
    body: "Show wait times, status, and what happens next.",
  },
  {
    title: "Support should feel connected",
    body: "Search, chat, and ticketing should work as one experience.",
  },
  {
    title: "Mobile support must stay simple",
    body: "Reduce friction when submitting IT requests on smaller screens.",
  },
] as const;

const outcomes = [
  {
    title: "Improved Self-Service",
    body: "Created clearer search and content experiences to help employees find answers with less effort.",
  },
  {
    title: "Clearer Support Pathways",
    body: "Connected search, chat, live support, and ticketing into a more understandable support journey.",
  },
  {
    title: "Better Mobile Support",
    body: "Designed a guided mobile ticketing flow that made submitting and tracking requests easier.",
  },
  {
    title: "Greater Transparency",
    body: "Introduced clearer ticket status, progress, and next steps throughout the support experience.",
  },
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

function DesignTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[16px] font-semibold leading-6 text-blue md:text-[18px] md:leading-[27px]">
      {children}
    </h3>
  );
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

function InsightGrid({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {items.map((item) => (
        <article key={item.title} className="flex flex-col gap-2 rounded-xl bg-surface p-4 md:p-6 lg:p-8">
          <h4 className="text-[14px] font-semibold leading-[21px] text-blue md:text-[16px] md:leading-6">
            {item.title}
          </h4>
          <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[16px] md:leading-6">
            {item.body}
          </p>
        </article>
      ))}
    </div>
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

export default async function EmployeeSupportPortal() {
  await requireCaseStudyAccess("employee-support-portal");

  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <CaseStudyNav items={caseStudyNav} />
      <main>
        <section className="flex justify-center px-4 pb-10 pt-24 md:px-8 md:pb-16 md:pt-[120px] lg:px-20 lg:pb-20 lg:pt-40">
          <div className="flex w-full max-w-[1280px] flex-col gap-6 md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[29px] tracking-[0.096px] text-ink md:text-[36px] md:leading-[43px] md:tracking-[0.216px] lg:text-[40px] lg:leading-[48px] lg:tracking-[0.32px]">
                Employee Support Portal
              </h1>
              <p className="text-[16px] font-normal leading-6 text-slate md:text-[18px] md:leading-[27px]">
                I redesigned key experiences across Kraft Heinz’s Noodle Portal to help employees
                find relevant help articles, connect with support teams, and submit IT tickets,
                while establishing a consistent visual language across desktop and mobile.
              </p>
            </div>
            <Shot
              src="hero.png"
              width={4096}
              height={3294}
              alt="Noodle Portal homepage across desktop and mobile"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-20 md:gap-y-10 lg:gap-x-[120px]">
              {(
                [
                  ["CLIENT", "Kraft Heinz"],
                  ["ROLE", "UX Designer"],
                  ["DURATION", "14 days"],
                  ["PLATFORMS", "Desktop\nMobile"],
                  ["DELIVERABLES", "20+ Production screens"],
                  ["CROSS-FUNCTIONAL TEAM", "Managers\nUX Designer\nProduct"],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="flex flex-col gap-2">
                  <p className="text-[14px] font-semibold leading-[21px] text-slate md:text-[16px] md:leading-6">
                    {label}
                  </p>
                  <p className="whitespace-pre-line text-[14px] font-normal leading-[21px] text-ink md:text-[18px] md:leading-[27px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="overview" gap="gap-8 md:gap-10 lg:gap-12">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>OVERVIEW</SectionLabel>
              <Subhead>Context</Subhead>
            </div>
            <Body>
              Kraft Heinz needed to redesign its internal employee support platform, the Noodle
              Portal, which served thousands of employees across the organization. The goal was to
              create a more intuitive and consistent experience for finding help, chatting with
              support, and submitting IT tickets.
            </Body>
          </Stack>
          <Stack>
            <Subhead>Challenges</Subhead>
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
          </Stack>
          <Stack>
            <Subhead>My role</Subhead>
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
              <Subhead>Research &amp; Discovery</Subhead>
            </div>
            <Body>
              The team mapped key employee journeys and prioritized the experiences with the
              greatest impact. “Request Help” emerged as a critical journey, leading to deeper
              exploration of how employees currently search for support and submit requests.
            </Body>
            <div className="flex flex-col gap-4">
              <Shot
                src="research-1.png"
                width={4096}
                height={2420}
                alt="Research and discovery journey map"
              />
              <Shot
                src="research-2.png"
                width={4096}
                height={2252}
                alt="Research and discovery findings"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Subhead>key insights</Subhead>
              <InsightGrid items={researchInsights} />
            </div>
          </Stack>
          <Stack>
            <Subhead>What employees needed</Subhead>
            <Body>
              Research revealed a need for clearer navigation, relevant self-service, and greater
              transparency throughout the support experience.
            </Body>
            <Shot
              src="employee-needs.png"
              width={4052}
              height={2174}
              alt="Employee needs across the support journey"
            />
          </Stack>
          <Stack>
            <Subhead>Synthesis &amp; Opportunity Definition</Subhead>
            <Body>
              Insights from the current-state journeys were synthesized into key opportunities for
              improving the support experience, including better search, clearer navigation, ticket
              visibility, live support, and more personalized employee assistance.
            </Body>
            <Shot
              src="future-state.png"
              width={3320}
              height={1844}
              alt="Future state capabilities"
            />
          </Stack>
          <Stack>
            <Subhead>Experience Strategy</Subhead>
            <Body>
              The team translated the identified opportunities into future-state support journeys,
              defining how employees could move from self-service to resolution through improved
              search and chat experiences.
            </Body>
            <Shot
              src="experience-map.png"
              width={4096}
              height={2251}
              alt="Search and chat experience map"
            />
            <div className="flex flex-col gap-4">
              <Subhead>key insights</Subhead>
              <InsightGrid items={strategyInsights} />
            </div>
          </Stack>
        </Section>

        <Section id="design" gap="gap-[60px] md:gap-24 lg:gap-[120px]">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>DESIGN</SectionLabel>
              <DesignTitle>Noodle Portal overview</DesignTitle>
            </div>
            <ProblemSolution
              problem="Employees needed a clearer way to navigate a wide range of workplace information, tools, and support services from one place."
              solution="A modular employee hub that organizes key content and provides prominent access to search, self-service, tickets, and live support."
            />
            <Shot
              src="noodle-redesign.png"
              width={1825}
              height={4096}
              alt="Noodle Portal redesign overview"
            />
          </Stack>
          <Stack>
            <DesignTitle>Search Experience</DesignTitle>
            <ProblemSolution
              problem="Employees struggled to find relevant support information quickly, with unclear results and too much content to sort through."
              solution="A guided search experience with predictive suggestions, categorized results, filters, related tools, and clear article pages to help employees reach the right answer faster."
            />
            <div className="flex flex-col gap-4">
              <Shot src="search-1.png" width={3360} height={3994} alt="Search suggestions" />
              <Shot src="search-2.png" width={2607} height={4096} alt="Search results" />
              <Shot src="search-3.png" width={3360} height={3770} alt="Search article page" />
            </div>
          </Stack>
          <Stack>
            <DesignTitle>Chat Experience</DesignTitle>
            <ProblemSolution
              problem="Employees struggled to find relevant support information quickly, with unclear results and too much content to sort through."
              solution="A guided search experience with predictive suggestions, categorized results, filters, related tools, and clear article pages to help employees reach the right answer faster."
            />
            <div className="flex flex-col gap-4">
              <Shot src="chat-1.png" width={4096} height={2553} alt="Desktop chat experience" />
              <Shot src="chat-2.png" width={4096} height={2533} alt="Desktop chat conversation" />
            </div>
          </Stack>
          <Stack>
            <DesignTitle>Mobile Ticketing Experience</DesignTitle>
            <ProblemSolution
              problem="Submitting IT support requests on mobile felt complex and gave employees limited visibility after submission."
              solution="A guided step-by-step ticket flow with clear issue selection, review, confirmation, and status tracking from submission through resolution."
            />
            <div className="flex flex-col gap-4">
              <Shot
                src="ticketing-1.png"
                width={3744}
                height={3676}
                alt="Mobile ticket submission flow"
              />
              <Shot
                src="ticketing-2.png"
                width={3744}
                height={3676}
                alt="Mobile ticket status tracking"
              />
            </div>
          </Stack>
        </Section>

        <Section id="outcomes" gap="gap-8 lg:gap-12">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>OUTCOMES</SectionLabel>
              <Subhead>User Feedback</Subhead>
            </div>
            <Body>
              Employee feedback reinforced the value of simpler navigation, mobile support, and
              clear paths from self-service to human assistance.
            </Body>
            <Shot
              src="user-feedback.png"
              width={3880}
              height={1864}
              alt="Employee feedback on the redesigned portal"
            />
          </Stack>
          <Stack>
            <Subhead>Key Outcomes</Subhead>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              {outcomes.map((outcome) => (
                <article
                  key={outcome.title}
                  className="flex flex-col gap-2 rounded-xl bg-surface p-4 md:p-6 lg:p-8"
                >
                  <h4 className="text-[14px] font-semibold leading-[21px] text-blue md:text-[16px] md:leading-6">
                    {outcome.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px] text-ink md:text-[16px] md:leading-6">
                    {outcome.body}
                  </p>
                </article>
              ))}
            </div>
          </Stack>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
