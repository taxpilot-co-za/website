export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-900">TaxPilot</span>
          <span className="hidden text-neutral-500 md:inline">
            · Personal SARS tax filing support
          </span>
        </div>
        <nav className="flex items-center gap-5">
          <a href="#" className="hover:text-neutral-900">
            Privacy
          </a>
          <a href="#" className="hover:text-neutral-900">
            Terms
          </a>
          <a href="#" className="hover:text-neutral-900">
            Contact
          </a>
        </nav>
        <div className="text-xs text-neutral-500">
          © 2026 TaxPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
