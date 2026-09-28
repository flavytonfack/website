import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Flavy, a product designer based in the heart of Silicon Valley.",
};

const paragraphs = [
  "I’m Flavy, a product designer based in the heart of Silicon Valley. I’m bilingual in French and English, with a Bachelor’s degree in Computer Science from San Francisco State University and a UX Design Certificate from General Assembly.",
  "I’ve worked at EY in UX design and at Zoom in technical support engineering, giving me experience across both digital product design and technical problem-solving. My work spans 0→1 products, from early concepts to polished interfaces ready for development.",
  "Outside of design, I’m a certified pastry chef from Ferrandi Paris. I love baking, experimenting, and developing recipes.",
] as const;

export default function About() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <main>
        <section className="flex justify-center px-6 py-16 md:px-10 md:py-24 lg:px-20 lg:py-40">
          <div className="flex w-full max-w-[1280px] justify-center">
            <div className="flex w-full max-w-[1064px] flex-col items-start gap-6 md:flex-row md:items-center">
              <img
                src="/about/headshot.png"
                alt="Flavy Tonfack"
                width={1164}
                height={1700}
                className="w-full max-w-[302px] object-cover md:w-[240px] md:max-w-none md:shrink-0 lg:w-[302px]"
                style={{ aspectRatio: "1164 / 1700" }}
              />
              <div className="flex min-w-0 flex-col gap-6 text-[16px] font-normal leading-6 text-ink lg:w-[625px] lg:shrink-0">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
