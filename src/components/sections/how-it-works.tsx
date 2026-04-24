const steps = [
  {
    title: "Complete the free tax review",
    body: "Answer a short form about your income and situation. Takes a few minutes.",
  },
  {
    title: "We analyse your information",
    body: "A registered practitioner reviews your return and refund likelihood.",
  },
  {
    title: "We share feedback",
    body: "You'll see exactly where you stand — and your filing plan if there's a refund.",
  },
  {
    title: "With your approval, we file",
    body: "Nothing is submitted to SARS until you confirm. We handle the rest.",
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
          How it works
        </h2>
        <p className="mt-3 text-base text-neutral-600">
          Simple, low-risk, done-for-you. Especially suited to salaried
          employees, first-time filers, and anyone placed on Auto Assessment.
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

      <p className="mt-10 text-sm text-neutral-600">
        <span className="font-medium text-neutral-900">
          No refund opportunity? No service fee.
        </span>{" "}
        If we can't get you a refund, you don't owe us anything — and we still
        file your return for free.
      </p>
    </section>
  );
}
