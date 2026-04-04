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
  slug?: string;
  body?: string;
};

export type HomeCopy = {
  hero: {
    badge: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  slides: Array<{
    headline: string;
    image: string;
    sub: string;
  }>;
};

export type AboutCopy = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  storyKicker: string;
  storyTitle: string;
  mission: { title: string; body: string };
  vision: { title: string; body: string };
};

export type AdmissionsCopy = {
  hero: { badge: string; title: string; subtitle: string };
  keyDates: Array<{ label: string; value: string }>;
};

const newsDir = path.join(process.cwd(), "content", "news");
const siteDir = path.join(process.cwd(), "content", "site");

const sanityProjectId = process.env.SANITY_PROJECT_ID;
const sanityDataset = process.env.SANITY_DATASET;
const sanityApiVersion = process.env.SANITY_API_VERSION ?? "2025-01-01";
const sanityUseCdn = (process.env.SANITY_USE_CDN ?? "true") === "true";

const hasSanityConfig = Boolean(sanityProjectId && sanityDataset);

function buildSanityUrl(query: string): string {
  return `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}?query=${encodeURIComponent(query)}${sanityUseCdn ? "&perspective=published" : ""}`;
}

async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!hasSanityConfig) return null;

  try {
    const res = await fetch(buildSanityUrl(query), {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const payload = (await res.json()) as { result?: T };
    return payload.result ?? null;
  } catch {
    return null;
  }
}

function sortArticles(articles: NewsArticle[]): NewsArticle[] {
  return articles.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

async function readJsonFile<T>(fullPath: string): Promise<T> {
  const raw = await fs.readFile(fullPath, "utf8");
  return JSON.parse(raw) as T;
}

async function getFallbackNews(): Promise<NewsArticle[]> {
  const files = await fs.readdir(newsDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));

  const articles = await Promise.all(
    jsonFiles.map(async (file) => {
      const article = await readJsonFile<NewsArticle>(path.join(newsDir, file));
      if (!article.slug) article.slug = file.replace('.json', '');
      return article;
    })
  );

  return sortArticles(articles);
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const sanityArticles = await fetchSanity<NewsArticle[]>(
    `*[_type == "newsPost"] | order(featured desc, date desc) {
      title,
      excerpt,
      category,
      "href": coalesce(href, "/news"),
      "slug": slug.current,
      featured,
      "image": coalesce(image.asset->url, image),
      date,
      body
    }`
  );

  if (sanityArticles && sanityArticles.length > 0) {
    return sortArticles(sanityArticles);
  }

  return getFallbackNews();
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const allArticles = await getNewsArticles();
  return allArticles.find(a => a.slug === slug) || null;
}

async function getFallbackHomeCopy(): Promise<HomeCopy> {
  return readJsonFile<HomeCopy>(path.join(siteDir, "home.json"));
}

export async function getHomeCopy(): Promise<HomeCopy> {
  const sanityHome = await fetchSanity<HomeCopy>(
    `*[_type == "homePage"][0] {
      hero,
      "slides": slides[]{
        headline,
        sub,
        "image": coalesce(image.asset->url, image)
      }
    }`
  );

  if (sanityHome?.hero && sanityHome?.slides?.length) {
    return sanityHome;
  }

  return getFallbackHomeCopy();
}

async function getFallbackAboutCopy(): Promise<AboutCopy> {
  return readJsonFile<AboutCopy>(path.join(siteDir, "about.json"));
}

export async function getAboutCopy(): Promise<AboutCopy> {
  const sanityAbout = await fetchSanity<AboutCopy>(
    `*[_type == "aboutPage"][0] {
      heroBadge,
      heroTitle,
      heroSubtitle,
      storyKicker,
      storyTitle,
      mission,
      vision
    }`
  );

  if (sanityAbout?.heroTitle) {
    return sanityAbout;
  }

  return getFallbackAboutCopy();
}

async function getFallbackAdmissionsCopy(): Promise<AdmissionsCopy> {
  return readJsonFile<AdmissionsCopy>(path.join(siteDir, "admissions.json"));
}

export async function getAdmissionsCopy(): Promise<AdmissionsCopy> {
  const sanityAdmissions = await fetchSanity<AdmissionsCopy>(
    `*[_type == "admissionsPage"][0] {
      hero,
      keyDates
    }`
  );

  if (sanityAdmissions?.hero?.title && sanityAdmissions?.keyDates?.length) {
    return sanityAdmissions;
  }

  return getFallbackAdmissionsCopy();
}
