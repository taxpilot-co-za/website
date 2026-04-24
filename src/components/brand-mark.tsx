import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-6 items-center justify-center rounded-[7px] bg-neutral-900 text-white",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[14px]"
      >
        <path d="M5 13l4 4L19 7" />
        <path d="M5 7h6" className="opacity-60" />
      </svg>
    </span>
  );
}
