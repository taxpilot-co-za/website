function App() {
  return (
    <main className="min-h-screen px-6 py-16 text-ink sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur sm:p-12">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold tracking-wide text-accent">
              Vite + React + TypeScript + Tailwind CSS
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              Project scaffolded and ready to build on.
            </h1>
            <p className="text-lg leading-8 text-black/70">
              Tailwind is wired through the Vite plugin, TypeScript is enabled,
              and this starter screen is already using utility classes.
            </p>
          </div>

          <div className="rounded-3xl bg-sand p-5 text-sm text-black/70">
            <p className="font-medium text-ink">Next command</p>
            <code className="mt-2 block rounded-2xl bg-black px-4 py-3 font-mono text-sm text-white">
              npm run dev
            </code>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-black/10 bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Styling
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Tailwind v4 setup
            </h2>
            <p className="mt-3 text-black/70">
              Global styles start in <code>src/index.css</code> with a single
              Tailwind import and a small theme block.
            </p>
          </article>

          <article className="rounded-3xl border border-black/10 bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              App
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              React + TypeScript
            </h2>
            <p className="mt-3 text-black/70">
              The default template was simplified so you can start from a clean
              component instead of the full demo page.
            </p>
          </article>

          <article className="rounded-3xl border border-black/10 bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Workflow
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Ready for iteration
            </h2>
            <p className="mt-3 text-black/70">
              Edit <code>src/App.tsx</code>, save, and Vite will hot reload the
              page during development.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
