import { ClientWork } from "@/components/client-work";
import { EyWork } from "@/components/ey-work";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ClientWork />
        <EyWork />
      </main>
      <SiteFooter />
    </div>
  );
}
