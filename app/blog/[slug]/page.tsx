import fs from "fs";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const blogDir = path.join(process.cwd(), "content", "blog");

  const posts = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".md", ""),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  const currentIndex = posts.findIndex((post) => post.slug === slug);

  const previousPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  const filePath = path.join(blogDir, `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4 text-sm text-gray-500">{data.date}</p>

        <h1 className="mb-10 text-4xl font-medium tracking-tight">
          {data.title}
        </h1>

        {data.image && (
          <img src={data.image} alt={data.title} className="mb-10 w-full" />
        )}

        <div
          className="max-w-none text-base leading-8 [&_p]:mb-8"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="mt-16 flex items-center justify-between border-t border-black pt-6">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="text-sm transition-opacity hover:opacity-60"
            >
              ← {previousPost.title}
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {nextPost.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div className="mt-16 flex gap-8">
          <a
            href="/journal"
            className="text-sm tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            BACK TO JOURNAL
          </a>

          <a
            href="/"
            className="text-sm tracking-[0.15em] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            BACK TO HOME
          </a>
        </div>
      </article>
    </main>
  );
}
