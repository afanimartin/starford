import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Academics — Starford International University",
  description:
    "Explore all degree and diploma programmes offered across 5 colleges at Starford International University — South Sudan's most ICT-enabled university.",
};

const colleges = [
  {
    slug: "cs-it",
    name: "College of Computer Science & Information Technology",
    short: "CS & IT",
    tagline: "Equipping students with cutting-edge skills in computing, problem-solving, and digital innovation.",
    icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3",
    num: "01",
    degrees: [
      "Bachelor of Computer Science (B.Ss, CSs)",
      "Bachelor of Information Technology (BIT)",
    ],
    diplomas: [
      "Diploma of Computer Science (Dipl. CSs)",
      "Diploma of Information Technology (Dip. IT)",
    ],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "economics",
    name: "College of Economics & Social Studies",
    short: "Economics",
    tagline: "Focusing on economic growth, financial systems, and the social dynamics that shape communities.",
    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
    num: "02",
    degrees: [
      "Bachelor of Economics (BE)",
      "Bachelor of Commerce (BC)",
    ],
    diplomas: [
      "Diploma of Economics",
      "Diploma of Commerce",
    ],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "humanities",
    name: "College of Humanities & Social Science",
    short: "Humanities",
    tagline: "Preparing students for careers in communication, diplomacy, development, and public service.",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 1 .284-2.253",
    num: "03",
    degrees: [
      "Bachelor of Development Studies (BDS)",
      "Bachelor of International Relations and Diplomacy (BIRD)",
      "Bachelor of Mass Communication and Journalism (BMCMJ)",
      "Bachelor of Peace and Security Studies (BPSS)",
      "Bachelor of Public Administration and Management (BPAM)",
    ],
    diplomas: [
      "Diploma of Development Studies (DDS)",
      "Diploma of International Relations and Diplomacy (DIRD)",
      "Diploma of Mass Communication and Journalism (DMCMJ)",
      "Diploma of Peace and Security Studies (DPSS)",
      "Diploma of Public Administration and Management (DPAM)",
    ],
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "law",
    name: "College of Law",
    short: "Law",
    tagline: "National IHL Moot Court champions — training South Sudan's next generation of legal professionals.",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z",
    num: "04",
    degrees: [
      "Bachelor of Laws (LL.B)",
    ],
    diplomas: [
      "Diploma of Legal Studies",
    ],
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "management",
    name: "College of Management Sciences",
    short: "Management",
    tagline: "Knowledge and competencies to excel in business leadership, finance, HR, procurement, and entrepreneurship.",
    icon: "M2.25 21 8.954 15h4.592a4.5 4.5 0 1 0 0-9H4.5A4.5 4.5 0 0 0 0 10.5 4.5 4.5 0 0 0 4.5 15H6M17.25 21V3.75m0 17.25H21M17.25 3.75H21",
    num: "05",
    degrees: [
      "Bachelor of Business Administration (Generic)",
      "Bachelor of Business Administration in Accounting & Finance",
      "Bachelor of Business Administration in Banking & Finance",
      "Bachelor of Business Administration in Entrepreneurship",
      "Bachelor of Business Administration in Human Resource Management",
      "Bachelor of Business Administration in Procurement & Logistic Management",
    ],
    diplomas: [
      "Diploma of Business Administration (Generic)",
      "Diploma of Business Administration in Accounting & Finance",
      "Diploma of Business Administration in Banking & Finance",
      "Diploma of Business Administration in Entrepreneurship",
      "Diploma of Business Administration in Human Resource Management",
      "Diploma of Business Administration in Procurement & Logistic Management",
    ],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>

      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#0f0e0d] py-28 px-6 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-[var(--brand-gold)]" />
          <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">5 Colleges · Degree & Diploma Programmes</span>
          <div className="w-8 h-px bg-[var(--brand-gold)]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-5">
          Academic Programmes
        </h1>
        <p className="text-white/40 font-sans max-w-2xl mx-auto text-base leading-relaxed">
          Designed to blend theory with practical experience — preparing students for the demands of today&apos;s dynamic world.
        </p>
      </div>

      {/* Stats bar */}
      <div className="w-full bg-[var(--brand-crimson)]">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/20">
          {[
            { value: "5", label: "Colleges" },
            { value: "20+", label: "Degree Programmes" },
            { value: "2", label: "Study Modes" },
          ].map((s, i) => (
            <div key={i} className="py-6 text-center">
              <p className="font-serif text-3xl font-light text-white">{s.value}</p>
              <p className="text-white/50 text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-0">
        <div className="max-w-3xl reveal reveal-x-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[var(--brand-crimson)]" />
            <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Our Approach</span>
          </div>
          <p className="text-[var(--muted)] font-serif text-xl leading-relaxed">
            Starford International University offers both <strong className="text-[var(--foreground)]">Bachelor (Honours) degrees</strong> and <strong className="text-[var(--foreground)]">Diploma qualifications</strong>, with on-campus and distance-learning modes — developing skilled, ethical, and innovative professionals.
          </p>
        </div>
      </div>

      {/* College Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 space-y-px">
        {colleges.map((college, i) => (
          <div
            key={college.slug}
            className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-[var(--border)] reveal stagger-${(i % 5) + 1} ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Image panel */}
            <div className={`relative h-72 lg:h-auto min-h-[360px] overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <Image
                src={college.img}
                alt={college.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0f0e0d]/70" />
              <div className="absolute inset-8 flex flex-col justify-between">
                <span className="font-serif text-7xl font-light text-white/8 group-hover:text-[var(--brand-gold)]/20 transition-colors">
                  {college.num}
                </span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-8 h-8 text-[var(--brand-gold)]/60 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d={college.icon} />
                  </svg>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-white leading-tight">
                    {college.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className={`bg-[var(--surface)] p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <p className="text-[var(--muted)] font-serif text-lg leading-relaxed mb-10">
                {college.tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-4 h-px bg-[var(--brand-crimson)]" />
                    <h3 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[var(--brand-crimson)]">
                      Degree Programmes
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {college.degrees.map((d, j) => (
                      <li key={j} className="flex gap-2 text-sm font-sans text-[var(--foreground)] leading-snug">
                        <span className="text-[var(--brand-crimson)] font-bold mt-0.5 flex-shrink-0">›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-4 h-px bg-[var(--border)]" />
                    <h3 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[var(--muted)]">
                      Diploma Programmes
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {college.diplomas.map((d, j) => (
                      <li key={j} className="flex gap-2 text-sm font-sans text-[var(--muted)] leading-snug">
                        <span className="text-[var(--border)] font-bold mt-0.5 flex-shrink-0">›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/admissions"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-crimson)] text-white font-sans font-semibold text-[10px] uppercase tracking-widest hover:bg-[#7d0c28] transition-colors self-start group/btn"
              >
                Apply to This College
                <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="w-full bg-[#0f0e0d] border-t-2 border-[var(--brand-crimson)] py-8 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 mt-20">
        <p className="text-white/25 text-xs font-sans">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[var(--brand-crimson)] font-sans font-semibold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1">
          <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
