export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* FV */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="World Masato"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 md:p-10">
          <div>
            <h1 className="text-2xl font-medium tracking-[0.2em] md:text-3xl">
              WORLD
              <br />
              VAGARE
            </h1>
          </div>

          <a
            href="https://www.instagram.com/679____so/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            INSTAGRAM
          </a>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-medium tracking-[0.2em]">JOURNAL</h2>

          <a
            href="#"
            className="text-sm tracking-[0.15em] underline underline-offset-4"
          >
            VIEW ALL
          </a>
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* CARD 1 */}
          <a href="/blog/first-blog">
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/hero.jpg"
                alt="Blog image 1"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-xs tracking-[0.1em] text-gray-500">
              2026.09.08
            </p>

            <h3 className="mt-2 text-base font-medium">My First Blog</h3>
          </a>
          {/* CARD 2 */}
          <a href="/blog/002">
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/hero.jpg"
                alt="シルバーウィーク、どこへ行こうか？"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-xs tracking-[0.1em] text-gray-500">
              2026.09.13
            </p>

            <h3 className="mt-2 text-base font-medium">
              シルバーウィーク、どこへ行こうか？
            </h3>
          </a>
        </div>
      </section>
    </main>
  );
}
