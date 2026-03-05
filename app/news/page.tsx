import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getNewsArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News — Starford International University",
  description:
    "Latest news, achievements, and events from Starford International University — South Sudan's most ICT-enabled university.",
};

const categoryColors: Record<string, string> = {
  Admissions: "bg-[#a41034] text-white",
  Achievement: "bg-green-800 text-white",
  Leadership: "bg-[#1b1c1d] text-white",
  Community: "bg-purple-900 text-white",
  Event: "bg-amber-800 text-white",
};

export default async function NewsPage() {
  const articles = await getNewsArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  if (!featured) {
    return (
      <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <NavBar />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            News &amp; Updates
          </h1>
          <p className="text-gray-500 mt-4">No articles published yet.</p>
        </div>
      </div>
    );
  }
  const rest = articles.filter((a) => a !== featured);

  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
          Latest from SIU
        </span>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          News &amp; Updates
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Stories of achievement, innovation, and community from Starford International University.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        {/* Section header */}
        <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            In Focus
          </h2>
          <span className="font-bold text-[#a41034] text-xs tracking-widest uppercase">
            All Stories
          </span>
        </div>

        {/* Featured article */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#1b1c1d] mb-12 hover:bg-[#111] transition-colors overflow-hidden reveal"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {"image" in featured && featured.image && (
              <div className="relative md:w-72 lg:w-96 h-64 md:h-[420px] flex-shrink-0 overflow-hidden">
                <Image
                  src={featured.image as string}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 100vw"
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            )}
            <div className="flex-1 p-10 md:p-14">
              <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-5 ${categoryColors[featured.category] ?? "bg-[#1b1c1d] text-white"}`}>
                {featured.category}
              </span>
              <h2
                className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5 group-hover:text-[#a41034] transition-colors"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-base max-w-3xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-[#a41034] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Rest of articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {rest.map((article, i) => (
            <a
              key={i}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border-b border-r border-gray-200 hover:bg-gray-50 transition-colors flex flex-col reveal stagger-${(i % 6) + 1}`}
            >
              {"image" in article && article.image && (
                <div className="relative overflow-hidden aspect-video bg-gray-200">
                  <Image
                    src={article.image as string}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <span className={`inline-block self-start px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-4 ${categoryColors[article.category] ?? "bg-[#1b1c1d] text-white"}`}>
                  {article.category}
                </span>
                <h3
                  className="font-bold text-[#1b1c1d] text-lg leading-snug mb-3 group-hover:text-[#a41034] transition-colors flex-grow"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[#a41034] font-bold text-xs uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>


      </div>

      {/* Footer */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
