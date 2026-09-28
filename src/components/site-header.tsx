"use client";

import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 flex w-full justify-center bg-background px-6 py-5 md:px-10 lg:px-20">
      <div className="flex w-full max-w-[1280px] items-center justify-between gap-4">
        <a
          href="/"
          className="font-logo text-[28px] leading-[34px] tracking-[0.28px] text-ink md:text-[36px] md:leading-[43px] md:tracking-[0.36px]"
        >
          flavy tonfack
        </a>
        <nav className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-[18px] font-medium leading-[27px] text-ink hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
