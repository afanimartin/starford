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
  Admissions: "bg-[var(--brand-crimson)] text-white",
  Achievement: "bg-emerald-900 text-white",
  Leadership: "bg-[#0f0e0d] text-white",
  Community: "bg-purple-900 text-white",
  Event: "bg-amber-900 text-white",
};

export default async function NewsPage() {
  const articles = await getNewsArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  if (!featured) {
    return (
      <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
        <NavBar />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-3xl font-light text-[var(--foreground)]">News &amp; Updates</h1>
          <p className="text-[var(--muted)] mt-4 font-sans">No articles published yet.</p>
        </div>
      </div>
    );
  }
  const rest = articles.filter((a) => a !== featured);

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#0f0e0d] py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--brand-gold)]" />
            <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Latest from SIU</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-5">
            News &amp; Updates
          </h1>
          <p className="text-white/40 font-sans max-w-lg text-base leading-relaxed">
            Stories of achievement, innovation, and community from Starford International University.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        {/* Section header */}
        <div className="flex justify-between items-end border-b border-[var(--border)] pb-5 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Featured</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">In Focus</h2>
          </div>
          <span className="font-sans font-semibold text-[var(--muted)] text-[11px] tracking-widest uppercase">
            All Stories
          </span>
        </div>

        {/* Featured article */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#0f0e0d] mb-16 hover:bg-[#000] transition-colors overflow-hidden reveal"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {"image" in featured && featured.image && (
              <div className="relative md:w-80 lg:w-[480px] h-72 md:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={featured.image as string}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 320px, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            <div className="flex-1 p-10 md:p-14">
              <span className={`inline-block px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest mb-6 ${categoryColors[featured.category] ?? "bg-[#0f0e0d] text-white"}`}>
                {featured.category}
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-light text-white leading-tight mb-5 group-hover:text-[var(--brand-gold)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-white/40 font-sans leading-relaxed text-sm max-w-2xl mb-8">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[var(--brand-gold)] font-sans font-semibold text-[11px] uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Full Story
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Rest of articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {rest.map((article, i) => (
            <a
              key={i}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-[var(--surface)] hover:bg-white transition-colors flex flex-col reveal stagger-${(i % 6) + 1}`}
            >
              {"image" in article && article.image && (
                <div className="relative overflow-hidden bg-[var(--border)]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={article.image as string}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-grow">
                <span className={`inline-block self-start px-2 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-widest mb-4 ${categoryColors[article.category] ?? "bg-[#0f0e0d] text-white"}`}>
                  {article.category}
                </span>
                <h3 className="font-serif font-light text-[var(--foreground)] text-lg leading-snug mb-3 group-hover:text-[var(--brand-crimson)] transition-colors flex-grow">
                  {article.title}
                </h3>
                <p className="text-[var(--muted)] text-sm font-sans leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[var(--brand-crimson)] font-sans font-semibold text-[11px] uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
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
      <div className="w-full bg-[#0f0e0d] border-t-2 border-[var(--brand-crimson)] py-8 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-xs font-sans">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[var(--brand-crimson)] font-sans font-semibold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1">
          <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
