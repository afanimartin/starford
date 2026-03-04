import NavBar from "../components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Starford International University",
  description:
    "Latest news, achievements, and events from Starford International University — South Sudan's most ICT-enabled university.",
};

const articles = [
  {
    title: "Call for Admission — January 2026 Intake",
    excerpt:
      "Starford International University invites applications for the January 2026 intake across all five colleges. Degree and diploma programmes available. Apply now — spaces are limited.",
    category: "Admissions",
    href: "https://starford.edu.ss/call-for-admission-january-2026-intake/",
    featured: true,
  },
  {
    title: "Celebrating the Academic Achievement of Dr. Matur Ater Majing",
    excerpt:
      "Starford International University celebrates the outstanding academic achievement of Dr. Matur Ater Majing, Deputy VC for Academic Affairs, whose scholarly contributions continue to elevate the institution.",
    category: "Achievement",
    href: "https://starford.edu.ss/celebrating-the-academic-achievement-of-dr-matur-ater-majing/",
    featured: false,
  },
  {
    title: "Prof. Kenneth Wayne Mutuma appointed Chairperson of CIArb",
    excerpt:
      "SIU Chancellor Prof. Kenneth Wayne Mutuma has been appointed as the new Chairperson of the Chartered Institute of Arbitrators (CIArb), a landmark recognition for the university.",
    category: "Leadership",
    href: "https://starford.edu.ss/prof-kenneth-wayne-mutuma-appointed-as-the-new-chairperson-of-the-chartered-institute-of-arbitrators-ciarb/",
    featured: false,
  },
  {
    title: "Demonstrating that 'Disability is Not Inability'",
    excerpt:
      "Starford International University shines a spotlight on students who have overcome significant personal challenges to pursue and excel in higher education, proving that determination transcends disability.",
    category: "Community",
    href: "https://starford.edu.ss/demonstrating-that-disability-is-not-inability/",
    featured: false,
  },
  {
    title: "SIU Conference: Enabling Youth Participation in Inclusive Governance",
    excerpt:
      "SIU hosted a landmark conference on youth participation in inclusive governance, bringing together students, policymakers, and civil society leaders to chart a path for South Sudan's democratic future.",
    category: "Event",
    href: "https://starford.edu.ss/enabling-youth-participation-in-inclusive-governance/",
    featured: false,
  },
  {
    title: "Semi-Finals Set for the FIAE International Humanitarian Law Moot",
    excerpt:
      "The SIU Moot Court team advanced to the semi-finals of the FIAE International Humanitarian Law (IHL) Moot Court Competition — building on their national championship victory.",
    category: "Achievement",
    href: "https://starford.edu.ss/semi-finals-set-for-the-fiae-international-humanitarian-law-moot/",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Admissions: "bg-[#a41034] text-white",
  Achievement: "bg-green-800 text-white",
  Leadership: "bg-[#1b1c1d] text-white",
  Community: "bg-purple-900 text-white",
  Event: "bg-amber-800 text-white",
};

export default function NewsPage() {
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4">
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
          <a href="https://starford.edu.ss/news/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#a41034] text-xs tracking-widest uppercase hover:underline">
            View all on starford.edu.ss →
          </a>
        </div>

        {/* Featured article */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#1b1c1d] p-10 md:p-14 mb-12 hover:bg-[#111] transition-colors"
        >
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-5 ${categoryColors[featured.category]}`}>
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
              className="group border-b border-r border-gray-200 p-8 hover:bg-gray-50 transition-colors flex flex-col"
            >
              <span className={`inline-block self-start px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-4 ${categoryColors[article.category]}`}>
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
            </a>
          ))}
        </div>

        {/* CTA to full external news */}
        <div className="mt-16 text-center">
          <a
            href="https://starford.edu.ss/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 border-2 border-[#1b1c1d] text-[#1b1c1d] font-bold text-sm uppercase tracking-widest hover:bg-[#1b1c1d] hover:text-white transition-colors"
          >
            View All News on Starford.edu.ss
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <a href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}
