export default function JournalPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-medium tracking-tight">JOURNAL</h1>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-3">
          <a href="/blog/first-blog">
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/hero.jpg"
                alt="My First Blog"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-xs tracking-[0.1em] text-gray-500">
              2026.09.08
            </p>

            <h2 className="mt-2 text-base font-medium">My First Blog</h2>
          </a>

          <a href="/blog/002">
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/journal_silverweek.jpg"
                alt="シルバーウィーク、どこへ行こうか？"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-xs tracking-[0.1em] text-gray-500">
              2026.09.13
            </p>

            <h2 className="mt-2 text-base font-medium">
              シルバーウィーク、どこへ行こうか？
            </h2>
          </a>
        </div>

        <a
          href="/"
          className="mt-20 inline-block text-sm tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          BACK TO HOME
        </a>
      </section>
    </main>
  );
}
