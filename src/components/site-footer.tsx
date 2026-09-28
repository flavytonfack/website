const footerLinks = [
  { label: "flavytonfack@gmail.com", href: "mailto:flavytonfack@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/flavytonfack/" },
  { label: "GitHub", href: "https://github.com/flavytonfack" },
] as const;

export function SiteFooter() {
  return (
    <footer className="flex justify-center bg-ink px-4 py-12 text-surface md:px-8 md:py-16 lg:p-20">
      <div className="flex w-full max-w-[1280px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 text-[14px] font-normal leading-[21px]">
          <p>© 2026 Flavy Tonfack</p>
          <p className="lg:whitespace-nowrap">Designed &amp; built with figma, cursor &amp; coffee</p>
          <p className="text-accent">1 Corinthians 13:13</p>
        </div>
        <ul className="flex flex-col gap-6 text-[16px] font-medium leading-6 md:gap-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`hover:text-accent ${link.href.startsWith("http") ? "underline" : ""}`}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
