"use client";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";

const websites = [
  {
    name: "IDUN DREAM FOUNDATION",
    href: "https://idundream.org/",
  },
  {
    name: "TWENTY FIRST CONSULTING GROUP",
    href: "https://www.twentyfirst-consulting.com/",
  },
  {
    name: "EYA TOOLS",
    href: "https://www.eyatools.com/",
  },
] as const;

let scrambleReady = false;

function ensureScramble() {
  if (scrambleReady) return;
  gsap.registerPlugin(ScrambleTextPlugin);
  scrambleReady = true;
}

function WebsiteLink({ name, href }: { name: string; href: string }) {
  const nameRef = useRef<HTMLSpanElement>(null);

  function scramble() {
    const nameNode = nameRef.current;
    if (!nameNode) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ensureScramble();
    gsap.killTweensOf(nameNode);
    gsap.to(nameNode, {
      duration: 0.8,
      scrambleText: {
        text: name,
        chars: "upperCase",
        speed: 0.4,
      },
    });
  }

  function restore() {
    const nameNode = nameRef.current;
    if (!nameNode) return;
    gsap.killTweensOf(nameNode);
    nameNode.textContent = name;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      onMouseEnter={scramble}
      onMouseLeave={restore}
      onFocus={scramble}
      onBlur={restore}
      className="group flex items-center justify-between text-[16px] font-medium leading-6 text-ink hover:text-accent focus:text-accent md:text-[18px] md:leading-[27px]"
    >
      <span ref={nameRef}>{name}</span>
      <svg
        viewBox="0 0 20 20"
        width="20"
        height="20"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:scale-125 motion-safe:group-focus:scale-125"
      >
        <path
          d="M5.33333 15L4.16667 13.8333L12.1667 5.83333H5V4.16667H15V14.1667H13.3333V7L5.33333 15Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

export function ClientWork() {
  return (
    <section className="flex justify-center px-4 py-8 md:px-8 md:py-16 lg:p-20">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[18px] font-semibold leading-[27px] text-ink md:text-[24px] md:leading-[29px] md:tracking-[0.096px]">
            Selected websites I&apos;ve built
          </h2>
          <img
            src="/icons/section-line.svg"
            alt=""
            width={1278}
            height={1.5}
            className="block h-[1.5px] w-full"
          />
        </div>
        <ul className="flex flex-col gap-4 md:gap-6">
          {websites.map((site) => (
            <li key={site.name}>
              <WebsiteLink name={site.name} href={site.href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
