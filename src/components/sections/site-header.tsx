import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f5ef]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <BrandMark />
          <span className="text-lg font-semibold tracking-tight text-neutral-900">
            TaxPilot
          </span>
        </a>
        <Button size="sm" className="gap-1.5">
          Start free review
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </header>
  );
}
