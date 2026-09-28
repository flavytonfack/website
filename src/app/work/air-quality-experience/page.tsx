import type { Metadata } from "next";
import { airQualityNav, CaseStudyNav } from "@/components/case-study-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { requireCaseStudyAccess } from "@/lib/case-study-access";

export const metadata: Metadata = {
  title: "Air Quality Experience",
  description:
    "Mobile companion app concept for a global consumer products brand.",
};

const asset = (name: string) => `/work/air-quality/${name}`;

const challenges = [
  {
    number: "01",
    title: "Making air quality understandable",
    body: "Translate AQI, pollutants, trends, and environmental data into information users could quickly understand and act on.",
  },
  {
    number: "02",
    title: "Simplifying device control",
    body: "Bring controls such as fan speed, scheduling, timers, modes, and device management together without overwhelming users.",
  },
  {
    number: "03",
    title: "Supporting proactive maintenance",
    body: "Help users recognize when filters, UV components, or other consumables required attention and make the next action clear.",
  },
  {
    number: "04",
    title: "Designing for different experience levels",
    body: "Create an interface that felt approachable for first-time smart-device users while still providing useful controls for more experienced users.",
  },
] as const;

const responsibilities = [
  "Conducted rapid UX research and competitive analysis.",
  "Created to user persona development and journey mapping.",
  "Created user flows to define the app’s navigation and interactions.",
  "Designed high-fidelity screens and interactive prototypes.",
  "Presented the final prototype and design recommendations to client leadership.",
] as const;

const existingInsights = [
  {
    title: "Information hierarchy",
    body: "Air quality status needed to be easier to scan and understand.",
  },
  {
    title: "Device controls",
    body: "Core controls felt fragmented and needed clearer organization.",
  },
  {
    title: "Missing functionality",
    body: "Scheduling, maintenance, insights, and connected-device features needed stronger representation.",
  },
  {
    title: "Experience quality",
    body: "The interface needed to feel more modern, approachable, and aligned with a connected-home product.",
  },
] as const;

const competitiveInsights = [
  {
    title: "Dashboard pattern",
    body: "Users benefit from seeing home status, devices, and important alerts in one place.",
  },
  {
    title: "Device management",
    body: "Controls should be accessible without navigating through multiple layers.",
  },
  {
    title: "Automation",
    body: "Schedules and routines help reduce repeated manual interactions.",
  },
  {
    title: "Data visualization",
    body: "Environmental data is more useful when translated into clear visual states and trends.",
  },
  {
    title: "Smart-home expectations",
    body: "Users expect connected devices to feel simple, responsive, and personalized.",
  },
] as const;

const journeyInsights = [
  {
    title: "Awareness",
    body: "Changes in air quality can be difficult to notice without clear monitoring.",
  },
  {
    title: "Understanding",
    body: "Users need context behind AQI values, not just raw numbers.",
  },
  {
    title: "Action",
    body: "The experience should make it obvious what users can do when conditions worsen.",
  },
  {
    title: "Automation",
    body: "Air purification can happen proactively while users are away or following daily routines.",
  },
  {
    title: "Maintenance",
    body: "Filter and device-health information should surface before performance is affected.",
  },
] as const;

const principles = [
  {
    title: "Understand at a glance",
    body: "Make air quality status and trends immediately clear.",
  },
  {
    title: "Act with confidence",
    body: "Surface relevant controls and recommendations at the right moment.",
  },
  {
    title: "Automate everyday routines",
    body: "Reduce manual device management through schedules and smart behaviors.",
  },
  {
    title: "Stay ahead of maintenance",
    body: "Clearly communicate filter life, device health, and upcoming needs.",
  },
] as const;

const refinements = [
  {
    title: "Information hierarchy",
    body: "Simplified competing AQI information and prioritized the most important data.",
  },
  {
    title: "Content clarity",
    body: "Reduced repetitive labels and clarified the relationship between indoor and outdoor air quality.",
  },
  {
    title: "Dashboard organization",
    body: "Reworked notifications, devices, rooms, and content to reduce visual density.",
  },
  {
    title: "Action visibility",
    body: "Made important actions such as adding a device, scheduling, and device management more discoverable.",
  },
  {
    title: "Interaction clarity",
    body: "Strengthened controls, states, and feedback so users could better understand the result of their actions.",
  },
  {
    title: "Scannability",
    body: "Reduced unnecessary content and reorganized sections to make the experience easier to navigate quickly.",
  },
] as const;

const outcomes = [
  {
    title: "Product Direction",
    body: "Defined a clearer vision for the connected air-quality experience",
  },
  {
    title: "Experience Strategy",
    body: "Identified priority features across AQI monitoring, device control, maintenance, and scheduling.",
  },
  {
    title: "Design Foundation",
    body: "Delivered a high-fidelity prototype that could serve as a foundation for future development.",
  },
  {
    title: "Stakeholder Alignment",
    body: "Helped translate business goals and product requirements into a tangible experience stakeholders could review and discuss.",
  },
] as const;

const learnings = [
  {
    title: "Designing under constraints",
    body: "earned how to make focused design decisions within an aggressive 8-day timeline.",
  },
  {
    title: "Working with limited research",
    body: "Used competitive analysis, journey mapping, and stakeholder knowledge to build direction when customer research was unavailable.",
  },
  {
    title: "Iterating through feedback",
    body: "Early wireframe reviews reinforced the value of testing ideas internally before investing in high-fidelity design.",
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

function SectionLabel({
  children,
  className = "text-green",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[14px] font-medium leading-[21px] md:text-[16px] md:leading-6 ${className}`}>
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
    <h3 className="text-[16px] font-semibold leading-6 text-green md:text-[18px] md:leading-[27px]">
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

function Cards({
  items,
  columns,
  titleClassName = "text-ink",
}: {
  items: readonly { title: string; body: string }[];
  columns: "two" | "three" | "four";
  titleClassName?: string;
}) {
  const grid =
    columns === "two"
      ? "lg:grid-cols-2"
      : columns === "four"
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-4 lg:gap-6 ${grid}`}>
      {items.map((item) => (
        <article key={item.title} className="flex flex-col gap-2 rounded-xl bg-surface p-4 md:p-6 lg:p-8">
          <h4
            className={`text-[14px] font-semibold leading-[21px] md:text-[16px] md:leading-6 ${titleClassName}`}
          >
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

export default async function AirQualityExperience() {
  await requireCaseStudyAccess("air-quality-experience");

  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <CaseStudyNav items={airQualityNav} />
      <main>
        <section className="flex justify-center px-4 pb-10 pt-24 md:px-8 md:pb-16 md:pt-[120px] lg:px-20 lg:pb-20 lg:pt-40">
          <div className="flex w-full max-w-[1280px] flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-bold leading-[29px] tracking-[0.096px] text-ink md:text-[36px] md:leading-[43px] md:tracking-[0.216px] lg:text-[40px] lg:leading-[48px] lg:tracking-[0.32px]">
                Air Quality Experience
              </h1>
              <p className="text-[16px] font-normal leading-6 text-slate md:text-[18px] md:leading-[27px]">
                Mobile companion app concept for a global consumer products brand
              </p>
              <Shot
                src="hero.png"
                width={2916}
                height={3278}
                alt="Air quality companion app on a phone"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-[120px] md:gap-y-10">
              {(
                [
                  ["CLIENT", "Newell Brands"],
                  ["ROLE", "UX Designer"],
                  ["DURATION", "8 days"],
                  ["PLATFORMS", "Mobile"],
                  ["DELIVERABLES", "Interactive prototype"],
                  ["CROSS-FUNCTIONAL TEAM", "Stakeholders\nProduct\nUX Designer"],
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
            <div className="flex flex-col text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
              <p>
                I was tasked with designing a mobile companion experience for a global consumer
                products brand’s connected air purifier line.
              </p>
              <p>
                The goal was to help people better understand their indoor environment, control
                their devices, and manage air quality from one intuitive experience. Within an
                8-day design sprint, I moved from rapid research and experience definition to a
                high-fidelity interactive prototype that demonstrated the product’s potential
                value.
              </p>
            </div>
          </Stack>
          <Stack>
            <Subhead>Challenges</Subhead>
            <p className="text-[16px] font-normal leading-6 text-ink">
              Define the experience without existing customer research and deliver a compelling
              prototype within an 8-day sprint, using rapid research, competitive analysis,
              stakeholder input, and design validation to guide decisions.
            </p>
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
                <li key={item} className="flex items-start gap-2">
                  <img
                    src={asset("icons/highlighter.svg")}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
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
              <SectionLabel>RESEARCH &amp; DISCOVERY</SectionLabel>
              <Subhead>01 / Existing experience review</Subhead>
            </div>
            <p className="whitespace-pre-line text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
              {`Because the project had no existing customer research and a tight timeline, I used the client’s previous design concepts, competitive analysis, and journey mapping to quickly understand the product space, identify gaps, and define the experience priorities.

The client shared concepts previously created by another design team. While the work established a starting point, the experience did not reflect the product vision and was missing several capabilities the client wanted to explore.`}
            </p>
            <Shot
              src="existing-experience.png"
              width={2160}
              height={1080}
              alt="Previous air quality app concepts"
            />
            <div className="flex flex-col gap-4">
              <Subhead>key insights</Subhead>
              <Cards items={existingInsights} columns="two" />
            </div>
          </Stack>
          <Stack>
            <Subhead>02 / Competitive Analysis</Subhead>
            <Body>
              I reviewed leading connected-home and air-quality experiences to understand common
              interaction patterns and identify opportunities to simplify the product.
            </Body>
            <Shot
              src="competitive.png"
              width={2062}
              height={1754}
              alt="Competitive analysis of connected-home apps"
            />
            <div className="flex flex-col gap-4">
              <Subhead>key insights</Subhead>
              <Cards items={competitiveInsights} columns="three" />
            </div>
          </Stack>
          <Stack>
            <Subhead>03 / User Journey Mapping</Subhead>
            <Body>
              I mapped a representative journey to understand when users might become concerned
              about air quality, what information they need, and how the app could support them
              from awareness to action.
            </Body>
            <Shot
              src="journey.png"
              width={3044}
              height={1156}
              alt="Air quality user journey map"
            />
            <Shot
              src="userflow.png"
              width={4096}
              height={1319}
              alt="User flow for the air quality companion"
            />
            <div className="flex flex-col gap-4">
              <Subhead>key insights</Subhead>
              <Cards items={journeyInsights} columns="three" />
            </div>
          </Stack>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4">
            <Subhead>Synthesis</Subhead>
            <div className="flex flex-col text-[16px] font-normal leading-6 text-ink md:text-[18px] md:leading-[27px]">
              <p>
                The research pointed to one central opportunity: transform the app from a device
                remote into a proactive air-quality companion.
              </p>
              <p>I synthesized the findings into four experience principles:</p>
            </div>
            <Cards items={principles} columns="four" />
          </div>
        </Section>

        <Section id="wireframing" gap="gap-6 md:gap-12">
          <Stack>
            <SectionLabel>WIREFRAMING AND ITERATION</SectionLabel>
            <Body>
              I translated the research insights into early wireframes exploring the AQI experience,
              home dashboard, device controls, maintenance, and scheduling. After presenting the
              first concepts to the team, I gathered feedback and refined the experience to improve
              hierarchy, reduce complexity, and make key actions easier to find
            </Body>
            <div className="flex flex-col gap-4">
              <Shot src="wireframe-1.png" width={3840} height={3160} alt="Early wireframe explorations" />
              <Shot
                src="wireframe-2.png"
                width={2720}
                height={3910}
                alt="Second round of wireframes"
              />
              <Shot
                src="wireframe-aqi.png"
                width={3840}
                height={3550}
                alt="Wireframes for AQI and product details"
              />
              <Shot
                src="wireframe-home.png"
                width={3738}
                height={4096}
                alt="Homepage wireframe"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Subhead>Key refinements</Subhead>
              <Cards items={refinements} columns="three" titleClassName="text-slate md:text-ink" />
            </div>
          </Stack>
        </Section>

        <Section id="design" gap="gap-[60px] md:gap-24 lg:gap-[120px]">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>DESIGN</SectionLabel>
              <DesignTitle>Making air quality easy to understand</DesignTitle>
            </div>
            <ProblemSolution
              problem="AQI data can feel technical and difficult to interpret, especially when users need to understand changing conditions quickly."
              solution="I created a visual AQI experience that prioritizes the current status, uses color and scale to communicate severity, and adds historical trends and pollutant details for deeper context."
            />
            <Shot
              src="aqi-summary.png"
              width={2840}
              height={3278}
              alt="AQI summary screens"
            />
          </Stack>
          <Stack>
            <DesignTitle>Bringing the home experience together</DesignTitle>
            <ProblemSolution
              problem="Users needed a way to understand what was happening across their connected home without navigating between multiple device screens."
              solution="I designed a centralized dashboard that brings together environmental conditions, notifications, connected devices, quick actions, energy insights, and relevant educational content."
            />
            <Shot
              src="home.png"
              width={966}
              height={4096}
              alt="Home dashboard for the air purifier"
            />
          </Stack>
          <Stack>
            <DesignTitle>Simplifying device control &amp; maintenance</DesignTitle>
            <ProblemSolution
              problem="Air purifier controls and maintenance information can become fragmented, making everyday device management feel more complicated than necessary."
              solution="I consolidated core controls, operating modes, fan speed, maintenance status, and replacement actions into one device experience, allowing users to control and maintain the purifier from the same place."
            />
            <Shot
              src="device-control.png"
              width={1580}
              height={3106}
              alt="Device control and maintenance screens"
            />
          </Stack>
          <Stack>
            <DesignTitle>Turning air quality into proactive automation</DesignTitle>
            <ProblemSolution
              problem="Users may understand that their air quality needs improvement but still have to manually decide when and how long to run their purifier."
              solution="I introduced scheduling and contextual recommendations that help users automate purification around their routine while keeping them in control of the final settings."
            />
            <Shot
              src="automation.png"
              width={2240}
              height={2260}
              alt="Scheduling and automation screens"
            />
          </Stack>
        </Section>

        <Section id="outcomes" gap="gap-8 md:gap-10 lg:gap-12">
          <Stack>
            <div className="flex flex-col gap-2 md:gap-4">
              <SectionLabel>OUTCOMES</SectionLabel>
              <Subhead>Key Outcomes</Subhead>
            </div>
            <Body>
              Although the product did not move into development because of budget constraints, the
              engagement established a clear direction for how the mobile experience could evolve.
            </Body>
            <Cards items={outcomes} columns="two" />
          </Stack>
          <Stack>
            <Subhead>Learnings &amp; reflections</Subhead>
            <Cards items={learnings} columns="three" />
          </Stack>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
