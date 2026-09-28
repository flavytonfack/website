import { Greeting } from "@/components/greeting";

export function Hero() {
  return (
    <section className="flex justify-center px-4 pb-8 pt-20 md:px-8 md:pb-16 md:pt-[120px] lg:px-20 lg:pb-20 lg:pt-40">
      <div className="flex w-full max-w-[1280px] flex-col">
        <div className="flex max-w-[1061px] flex-col gap-6 md:gap-8">
          <Greeting />
          <p className="text-[20px] font-semibold leading-6 tracking-[0.08px] text-ink md:text-[36px] md:leading-[43px] md:tracking-[0.216px] lg:text-[48px] lg:leading-[58px] lg:tracking-[0.48px]">
            I’m Flavy, a product designer working at the{" "}
            <span className="text-slate">intersection of design and development</span> to build
            polished web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
