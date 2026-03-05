import { promises as fs } from "fs";
import path from "path";

export type NewsArticle = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  featured: boolean;
  image: string;
  date?: string;
};

const newsDir = path.join(process.cwd(), "content", "news");

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const files = await fs.readdir(newsDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));

  const articles = await Promise.all(
    jsonFiles.map(async (file) => {
      const raw = await fs.readFile(path.join(newsDir, file), "utf8");
      return JSON.parse(raw) as NewsArticle;
    })
  );

  return articles.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}
