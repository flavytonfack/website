import { expertise } from "@/lib/content";

const INK = "#08090A";

const iconPaths = {
  Design: [
    "M8 28C7 28 6.01111 27.7556 5.03333 27.2667C4.05556 26.7778 3.26667 26.1334 2.66667 25.3334C3.24444 25.3334 3.83333 25.1056 4.43333 24.65C5.03333 24.1945 5.33333 23.5334 5.33333 22.6667C5.33333 21.5556 5.72222 20.6111 6.5 19.8334C7.27778 19.0556 8.22222 18.6667 9.33333 18.6667C10.4444 18.6667 11.3889 19.0556 12.1667 19.8334C12.9444 20.6111 13.3333 21.5556 13.3333 22.6667C13.3333 24.1334 12.8111 25.3889 11.7667 26.4334C10.7222 27.4778 9.46667 28 8 28ZM8 25.3334C8.73333 25.3334 9.36111 25.0723 9.88333 24.55C10.4056 24.0278 10.6667 23.4 10.6667 22.6667C10.6667 22.2889 10.5389 21.9723 10.2833 21.7167C10.0278 21.4611 9.71111 21.3334 9.33333 21.3334C8.95556 21.3334 8.63889 21.4611 8.38333 21.7167C8.12778 21.9723 8 22.2889 8 22.6667C8 23.1778 7.93889 23.6445 7.81667 24.0667C7.69444 24.4889 7.53333 24.8889 7.33333 25.2667C7.44444 25.3111 7.55556 25.3334 7.66667 25.3334H8ZM15.6667 20L12 16.3334L23.9333 4.40003C24.1778 4.15559 24.4833 4.02781 24.85 4.0167C25.2167 4.00559 25.5333 4.13337 25.8 4.40003L27.6 6.20003C27.8667 6.4667 28 6.77781 28 7.13337C28 7.48892 27.8667 7.80003 27.6 8.0667L15.6667 20Z",
  ],
  Prototyping: [
    "M2.66667 16V13.3333H6.66667V16H2.66667ZM7.2 23.4L5.33333 21.4667L8.13333 18.6667L10.0667 20.5333L7.2 23.4ZM8.13333 10.6667L5.33333 7.86667L7.2 5.93333L10.0667 8.8L8.13333 10.6667ZM24 26.6667L17.6667 20.3333L16 25.3333L12 12L25.3333 16L20.4 17.7333L26.6667 24L24 26.6667ZM13.3333 8V4H16V8H13.3333ZM21.2 10.6667L19.2667 8.8L22.1333 5.93333L24 7.8L21.2 10.6667Z",
  ],
  Development: [
    "M8 22.6667L1.33333 16L8 9.33333L9.86667 11.2L5.1 16L9.86667 20.8L8 22.6667Z",
    "M13.9333 27.0667L11.4 26.2667L18.0667 4.93333L20.6 5.73333L13.9333 27.0667Z",
    "M24 22.6667L22.1333 20.8L26.9 16L22.1333 11.2L24 9.33333L30.6667 16L24 22.6667Z",
  ],
} as const;

function ExpertiseIcon({ title }: { title: keyof typeof iconPaths }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={32}
      height={32}
      fill="none"
      aria-hidden="true"
      className="size-8 overflow-visible"
    >
      {iconPaths[title].map((d) => (
        <path key={d} d={d} fill={INK} />
      ))}
    </svg>
  );
}

export function Expertise() {
  return (
    <section className="flex flex-col gap-10 border-y-[0.3px] border-muted px-6 py-8 md:px-10 md:py-16 lg:px-[120px] lg:py-20">
      <h2 className="text-[32px] font-bold leading-[38px] tracking-[0.16px] text-heading">
        Areas of Expertise
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {expertise.map((item) => (
          <article
            key={item.title}
            className="flex min-h-[210px] flex-col gap-4 rounded-lg bg-surface p-4"
          >
            <div className="flex flex-col gap-4">
              <ExpertiseIcon title={item.title} />
              <h3 className="text-[24px] font-semibold leading-[29px] tracking-[-0.0012px] text-ink">
                {item.title}
              </h3>
            </div>
            <p className="text-[18px] font-normal leading-[27px] text-ink">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
