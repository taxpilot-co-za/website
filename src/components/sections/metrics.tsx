const items = [
  { value: "630+", label: "Taxpayers screened" },
  { value: "R844k+", label: "Refunds identified" },
  { value: "87%", label: "Eligible for refunds" },
];

export function Metrics() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <div className="grid divide-y divide-black/10 rounded-xl border border-black/10 bg-white/40 md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center px-6 py-5 text-center md:py-6"
          >
            <div className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {item.value}
            </div>
            <div className="mt-1 text-[13px] font-medium text-neutral-700">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
