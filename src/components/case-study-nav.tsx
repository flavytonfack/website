"use client";

import { useEffect, useState } from "react";

export const caseStudyNav = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "design", label: "Design" },
  { id: "outcomes", label: "Outcomes" },
] as const;

export const airQualityNav = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "wireframing", label: "Wireframing" },
  { id: "design", label: "Design" },
  { id: "outcomes", label: "Outcomes" },
] as const;

export function CaseStudyNav({
  items,
}: {
  items: readonly { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const crowded = items.length > 4;

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const update = () => {
      const bar = document.querySelector("[data-case-study-nav]");
      const marker = bar?.getBoundingClientRect().bottom ?? 0;
      let current = items[0]?.id ?? "";
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= marker + 1) current = node.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav
      data-case-study-nav
      aria-label="Case study sections"
      className={`sticky top-[74px] z-10 bg-background py-6 md:top-[83px] md:px-20 ${crowded ? "px-2" : "px-4"}`}
    >
      <ul className={`mx-auto flex w-max items-center md:gap-8 ${crowded ? "gap-1.5" : "gap-4"}`}>
        {items.map((item) => {
          const current = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                onClick={(event) => {
                  const target = document.getElementById(item.id);
                  if (!target) return;
                  event.preventDefault();
                  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
                  setActive(item.id);
                }}
                className={
                  current
                    ? `inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-accent-soft py-1 text-[12px] font-semibold uppercase leading-[18px] text-ink md:px-9 md:py-2 md:text-[14px] md:leading-[21px] ${crowded ? "px-2" : "px-[18px]"}`
                    : "inline-flex items-center justify-center whitespace-nowrap text-[12px] font-semibold uppercase leading-[18px] text-ink md:text-[14px] md:leading-[21px]"
                }
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
