
import PhotoGallery from "@/components/PhotoGallery";

const photos = [
  {
    src: "/photography/philippines/philippines-cebu-001.jpg",
    alt: "Cebu, Philippines",
  },
  {
    src: "/photography/philippines/philippines-cebu-002.jpg",
    alt: "Cebu, Philippines",
  },
  {
    src: "/photography/philippines/philippines-bohol-001.jpg",
    alt: "Bohol, Philippines",
  },
];

export default function PhilippinesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white px-5 py-10 text-black sm:px-8 md:px-12 md:py-16">
      <header className="mx-auto mb-16 w-full max-w-6xl">
        <a
          href="/"
          className="text-xs tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          BACK TO HOME
        </a>

        <p className="mt-20 text-xs tracking-[0.25em] text-gray-500">
          PHOTOGRAPHY
        </p>

        <h1 className="mt-4 text-4xl font-light tracking-[0.08em] sm:text-5xl">
          Philippines
        </h1>

        <p className="mt-4 text-xs tracking-[0.2em] text-gray-500">
          WHERE I WALKED
        </p>

        <div className="mt-8 h-px w-12 bg-black" />
      </header>

      <section className="mx-auto w-full max-w-6xl">
        <PhotoGallery photos={photos} />
      </section>

      <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-gray-200 pt-8">
        <a
          href="/"
          className="text-xs tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          BACK TO HOME
        </a>
      </footer>
    </main>
  );
}
