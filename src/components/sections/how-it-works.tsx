const steps = [
  {
    title: "Complete the free check",
    body: "Answer a few quick questions about your SARS return, income, and possible deductions.",
  },
  {
    title: "We review your answers",
    body: "Your information is checked for signs that your tax return or auto-assessment may be worth a closer look.",
  },
  {
    title: "See if there’s refund potential",
    body: "You’ll get a clear indication of whether your situation may qualify for a possible SARS refund.",
  },
  {
    title: "Choose your next step",
    body: "If your case looks promising, you can decide whether you’d like help from a registered tax consultant — with no obligation to continue.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          How your free check works
        </h2>
        <p className="mt-3 text-base text-neutral-600">
          A simple 4-step process to help you understand whether your SARS
          return may be worth reviewing — before you decide what to do next.
        </p>
      </div>

      <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="flex size-7 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand ring-1 ring-brand/15">
              {i + 1}
            </div>
            <div className="mt-4 text-sm font-semibold text-neutral-900">
              {step.title}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      {/* <p className="mt-10 text-sm text-neutral-600">
        <span className="font-medium text-neutral-900">
          No refund opportunity? No service fee.
        </span>{" "}
        If the review does not identify a refund opportunity, you can stop there
        or choose paid filing support.
      </p> */}
    </section>
  );
}
