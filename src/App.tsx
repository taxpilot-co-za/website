import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Metrics } from "@/components/sections/metrics";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackLead } from "@/lib/analytics";

let hasTrackedLeadSuccess = false;

function App() {
  const hasLeadSuccess =
    new URLSearchParams(window.location.search).get("success") === "true";
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState(hasLeadSuccess);

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
        <LeadSuccessDialog
          open={isSuccessDialogOpen}
          onOpenChange={setIsSuccessDialogOpen}
        />
        <Hero />
        <Metrics />
        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}

function LeadSuccessDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your refund check looks promising</DialogTitle>
          <DialogDescription>
            Your case is worth being reviewed by a tax professional. We’ll put
            you in touch with one, and you’ll be contacted within the next 2
            business days.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default App;
