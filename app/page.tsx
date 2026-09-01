export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="World  Masato"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 md:p-10">
        <div>
          <h1 className="text-2xl font-medium tracking-[0.2em] md:text-3xl">
            MASATO
          <br/>
            WORLD
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
    </main>
  );
}
