export default function MandateHome() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-1 text-xs tracking-[3px] uppercase text-zinc-500">
            Experimental • Non-binding • Open Source
          </div>

          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tighter text-black dark:text-white leading-none">
            Mandate
          </h1>

          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-tight">
            Your values, at legislative scale.
          </p>

          <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            An open-source experiment in <span className="font-medium text-black dark:text-white">Augmented Democracy</span> — 
            building personalized AI digital twins that help citizens deeply understand real bills and express nuanced positions.
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com/iJustinCabral/mandate" 
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-black dark:bg-white px-8 py-3 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href="/CHARTER.md" 
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-sm font-medium text-black dark:text-white hover:bg-white dark:hover:bg-zinc-900 transition-colors"
            >
              Read the Charter
            </a>
          </div>

          <div className="pt-12 text-sm text-zinc-500 dark:text-zinc-500 max-w-md">
            Inspired by César Hidalgo’s 2018 TED talk “A bold idea to replace politicians.” 
            This is Phase 0–1: deliberately narrow, US legislation only, strictly for learning and research. 
            We will earn the right to grow.
          </div>
        </div>
      </div>
    </div>
  );
}
