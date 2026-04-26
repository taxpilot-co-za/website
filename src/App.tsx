import { useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Metrics } from "@/components/sections/metrics";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { trackLead } from "@/lib/analytics";

let hasTrackedLeadSuccess = false;

function App() {
  const hasLeadSuccess =
    new URLSearchParams(window.location.search).get("success") === "true";

  useEffect(() => {
    if (!hasLeadSuccess) {
      return;
    }

    if (hasTrackedLeadSuccess) {
      return;
    }

    trackLead();
    hasTrackedLeadSuccess = true;
  }, [hasLeadSuccess]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5ef] text-neutral-900">
      <SiteHeader />
      <main className="flex-1">
        {hasLeadSuccess ? <LeadSuccessMessage /> : null}
        <Hero />
        <Metrics />
        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}

function LeadSuccessMessage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-6">
      <div className="rounded-lg border border-brand/20 bg-white px-4 py-3 text-sm text-neutral-700 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
        <span className="font-medium text-neutral-900">Thank you.</span> Your
        free check has been submitted successfully.
      </div>
    </section>
  );
}

export default App;
