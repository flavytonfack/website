export const hero = {
  desktopKicker: "Bonjour!",
  greeting: "Hello 👋🏾~ Bonjour 👋🏾~ 안녕하십니까 👋🏾",
  intro:
    "I’m Flavy. A Design Engineer working at the intersection of design and development to build polished web experiences.",
  location: "Based in Silicon Valley ~ open to opportunities worldwide.",
} as const;

export const expertise = [
  {
    title: "Design",
    body: "Crafting intuitive, visually compelling, and user-centered digital experiences.",
    icon: "/icons/brush.svg",
  },
  {
    title: "Prototyping",
    body: "Transforming ideas into interactive prototypes to explore, test, and refine experiences.",
    icon: "/icons/web-traffic.svg",
  },
  {
    title: "Development",
    body: "Bringing designs to life through front-end development and AI-assisted workflows.",
    icon: "/icons/code-xml.svg",
  },
] as const;

export const clients = [
  "Idun Dream Foundation",
  "Twenty First Consulting Group",
  "Eye Tools",
] as const;

export const projects = [
  {
    title: "Financial Professionals Portal",
    href: "/work/financial-professionals-portal",
    image: "/work/financial-professionals/hero.png",
  },
  {
    title: "Employee Portal",
  },
  {
    title: "Air Purifier Experience",
  },
] as const;

export const socialLinks = [
  { label: "flavytonfack@gmail.com", href: "mailto:flavytonfack@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/flavytonfack/" },
  { label: "Github", href: "https://github.com/flavytonfack" },
  { label: "X", href: "https://x.com/flavytonfack" },
] as const;
