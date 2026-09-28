const projects = [
  {
    title: "Financial Professionals Portal",
    image: "/work/thumbnails/financial-professionals.png",
    href: "/unlock?study=financial-professionals-portal",
  },
  {
    title: "Employee Support Portal",
    image: "/work/thumbnails/employee-portal.png",
    href: "/unlock?study=employee-support-portal",
  },
  {
    title: "Air Quality Experience",
    image: "/work/thumbnails/air-quality.png",
    href: "/unlock?study=air-quality-experience",
  },
] as const;

export function EyWork() {
  return (
    <section className="flex justify-center px-4 py-8 md:px-8 md:py-16 lg:p-20">
      <div className="flex w-full max-w-[1280px] flex-col gap-10 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[18px] font-semibold leading-[27px] text-ink md:text-[20px] md:leading-6 md:tracking-[0.08px] lg:text-[24px] lg:leading-[29px] lg:tracking-[0.096px]">
            Selected Work
          </h2>
          <img
            src="/icons/section-line.svg"
            alt=""
            width={1278}
            height={1.5}
            className="block h-[1.5px] w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-10 md:gap-[60px] lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => {
            const card = (
              <>
                <img
                  src={project.image}
                  alt=""
                  width={3200}
                  height={3026}
                  className="aspect-[3200/3026] w-full object-cover"
                />
                <div className="flex flex-col gap-2 p-2">
                  <h3 className="text-[16px] font-medium leading-6 text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-[21px] text-slate">
                    Password required 🔒
                  </p>
                </div>
              </>
            );

            const cardClass =
              "group relative flex flex-col gap-2 transition-transform duration-500 ease-out hover:z-10 hover:scale-105";

            if ("href" in project) {
              return (
                <a key={project.title} href={project.href} className={cardClass}>
                  {card}
                </a>
              );
            }

            return (
              <article key={project.title} className={cardClass}>
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
