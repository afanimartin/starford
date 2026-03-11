import Image from "next/image";
import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership & Management — Starford International University",
  description:
    "Meet the visionary leadership team and deanship board of Starford International University — guiding South Sudan's most ICT-enabled university.",
};

const leadership = [
  { name: "Hon. Dium Cyer Cyer Deng", title: "Founder & Chairman of the Board", initial: "D" },
  { name: "Dr. Kenneth Wyne Mutuma", title: "Chancellor of SIU", initial: "K" },
  { name: "Dr. James Osuru Mark", title: "Vice Chancellor of SIU", initial: "J" },
  { name: "Hon. Yel Luol Koor", title: "Deputy VC for Administration and Finance", initial: "Y" },
  { name: "Dr. Ayor Maluk", title: "DVC for Research, Innovation & Publication", initial: "A" },
  { name: "Matur Ater Majing", title: "Deputy VC for Academic Affairs", initial: "M" },
  { name: "Akuoc Ajang Nyanhom", title: "Director for Investment", initial: "A" },
  { name: "Uwkah Abraham", title: "Director of Academic Affairs", initial: "U" },
  { name: "Atem Arop Majok", title: "Director of Finance", initial: "A" },
  { name: "Ajith Deng Mawien", title: "Director for HRM", initial: "A" },
];

const deanship = [
  { name: "Mr. Chaldo Moses Sebit",               role: "Dean",        college: "College of Management Science" },
  { name: "Mr. Ayuen Kelei Alith Akuei",           role: "Deputy Dean", college: "College of Management Science" },
  { name: "Mr. Marko Makou Tong",                  role: "Dean",        college: "College of Economic and Social Studies" },
  { name: "Mr. Bona Macuei Akol Wieu",             role: "Deputy Dean", college: "College of Economic & Social Studies" },
  { name: "Mr. Musa Hassan Mussolini",             role: "Dean",        college: "College of Humanities & Social Science" },
  { name: "Mr. James Adut Magak",                  role: "Deputy Dean", college: "College of Humanities & Social Science" },
  { name: "Mr. Moses Marial Buon",                 role: "Dean",        college: "College of Computer Science and IT" },
  { name: "Mr. John Asai Angelo",                  role: "Deputy Dean", college: "College of Computer Science and IT" },
  { name: "Mr. Adelino Iyya Paterno",              role: "Dean",        college: "Students' Affairs" },
  { name: "Mr. Lual Bol Akol",                     role: "Deputy Dean", college: "Students' Affairs & Master of Games" },
  { name: "Mr. Samuel Kerlual Geuehlahm Yuok",     role: "Dean",        college: "College of Law" },
  { name: "Mr. Daniel Duom Kelei Ayak",            role: "Deputy Dean", college: "College of Law" },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#0f0e0d] py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--brand-gold)]" />
            <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Starford International University</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight max-w-3xl mb-5">
            Leadership & Management
          </h1>
          <p className="text-white/40 font-sans max-w-lg text-base leading-relaxed">
            The visionary team guiding South Sudan&apos;s most ICT-enabled university toward academic excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        {/* University Leadership */}
        <div className="mb-24 reveal">
          <div className="border-b border-[var(--border)] pb-5 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Executive</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">
              University Leadership
            </h2>
          </div>

          {/* Founder — featured */}
          <div className="bg-[#0f0e0d] p-10 mb-6 flex flex-col md:flex-row items-center md:items-start gap-8 reveal reveal-x-right">
            <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
              <Image
                src="/chairman1.jpeg"
                alt="Hon. Dium Cyer Cyer Deng"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Founder & Chairman of the Board</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-3">
                Hon. Dium (Gium) Cyer Cyer Deng
              </h3>
              <p className="text-white/40 font-sans text-sm leading-relaxed max-w-2xl">
                The visionary South Sudanese entrepreneur who founded Starford International University in 2015,
                with the bold mission to build an institution that not only educates but empowers a generation of
                leaders. Under his leadership, SIU earned full university accreditation in October 2025.
              </p>
            </div>
          </div>

          {/* Other leaders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {leadership.slice(1).map((person, i) => (
              <div
                key={i}
                className={`bg-[var(--surface)] p-6 hover:bg-white transition-colors group flex items-start gap-4 reveal stagger-${(i % 6) + 1}`}
              >
                <div className="w-11 h-11 bg-[#0f0e0d] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-crimson)] transition-colors">
                  <span className="font-serif text-white font-semibold text-base">{person.initial}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[var(--foreground)] text-base leading-tight mb-1 group-hover:text-[var(--brand-crimson)] transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-[var(--muted)] text-[11px] font-sans uppercase tracking-wider">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deanship Board */}
        <div className="reveal">
          <div className="border-b border-[var(--border)] pb-5 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Academic</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Deanship Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
            {deanship.map((dean, i) => (
              <div
                key={i}
                className={`bg-[var(--surface)] p-7 hover:bg-white transition-colors group reveal stagger-${(i % 6) + 1}`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-serif text-[var(--brand-crimson)] text-2xl font-light tabular-nums w-8 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-[var(--foreground)] text-base leading-tight mb-1 group-hover:text-[var(--brand-crimson)] transition-colors">
                      {dean.name}
                    </h4>
                    <p className="text-[var(--brand-crimson)] font-sans font-semibold text-[10px] uppercase tracking-widest mb-0.5">
                      {dean.role}
                    </p>
                    <p className="text-[var(--muted)] font-sans text-xs">{dean.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer strip */}
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
