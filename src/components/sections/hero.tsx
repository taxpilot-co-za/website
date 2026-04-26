import { ArrowRight, ShieldCheck } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { leadFormUrl, trackCtaClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div>
          {/* <Badge
            variant="outline"
            className="bg-white/60 px-3 py-1 text-neutral-700"
          >
            Completely Free!
          </Badge> */}

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Check if SARS owes you a refund — for free
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Answer a few quick questions to see whether your tax return or
            auto-assessment may be worth reviewing. You’ll get a free indication
            of your refund potential, with no obligation to take the next step.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="gap-1.5 focus-visible:ring-brand/40"
              asChild
            >
              <a href={leadFormUrl} onClick={() => trackCtaClick("hero")}>
                Start Free Check
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-start gap-2.5 text-sm text-neutral-700">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>Completely free. No obligation.</span>
          </div>
        </div>

        <div className="lg:pl-4">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  return (
    <Card className="gap-5 border-black/10 bg-white shadow-[0_1px_2px_rgba(17,17,17,0.04),0_12px_32px_-12px_rgba(17,17,17,0.12)] ring-1 ring-black/[0.03]">
      <CardContent className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
            LM
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              Lerato M.
            </div>
            <div className="text-xs text-neutral-500">
              Salaried Employee · Cape Town
            </div>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-neutral-800">
          “I wasn’t sure if I qualified for anything, so the free check made it
          simple. In a few minutes, I could see that my tax return may be worth
          reviewing for a possible refund. No confusing tax jargon, no upfront
          cost, and no pressure.”
        </p>

        <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-brand/15 bg-brand-soft text-center">
          <div className="p-3">
            <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              Refund Identified
            </div>
            <div className="mt-1 text-sm font-semibold text-neutral-700">
              R6,100+
            </div>
          </div>
          <div className="border-l border-brand/15 p-3">
            <div className="text-[11px] font-medium uppercase tracking-wide text-brand">
              Paid Upfront
            </div>
            <div className="mt-1 text-sm font-semibold text-neutral-900">
              R0
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
