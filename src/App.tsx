import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Metrics } from "@/components/sections/metrics";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5ef] text-neutral-900">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
