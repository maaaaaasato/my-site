import fs from "fs";
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

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);

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

        <img src={data.image} alt={data.title} className="mb-10 w-full" />

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
