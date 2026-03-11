import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAdmissionsCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions — Starford International University",
  description:
    "Apply to Starford International University for the January 2026 intake. Learn about entry requirements, the application process, and available programmes.",
};

const steps = [
  {
    num: "01",
    title: "Choose Your Programme",
    desc: "Browse our five colleges and select the degree or diploma programme that aligns with your goals.",
  },
  {
    num: "02",
    title: "Prepare Your Documents",
    desc: "Gather transcripts, certificates, national ID or passport, and two passport-sized photographs.",
  },
  {
    num: "03",
    title: "Submit Application",
    desc: "Complete the online form or submit in person at the Admissions Office on our Juba campus.",
  },
  {
    num: "04",
    title: "Receive Your Offer",
    desc: "Successful applicants receive a formal letter within 2–4 weeks of submission.",
  },
  {
    num: "05",
    title: "Confirm & Enrol",
    desc: "Accept your offer, pay the registration fee, and complete enrollment. Welcome to Starford.",
  },
];

const requirements = [
  {
    level: "Undergraduate (Bachelor's)",
    items: [
      "South Sudan Certificate of Secondary Education (SSCSE) or equivalent",
      "Minimum of 5 passes including English and Mathematics",
      "Certified copies of academic certificates",
      "National ID or Passport (copy)",
      "Two recent passport-sized photographs",
    ],
  },
  {
    level: "Diploma",
    items: [
      "South Sudan Certificate of Secondary Education (SSCSE) or equivalent",
      "Minimum of 4 passes including English",
      "Certified copies of academic certificates",
      "National ID or Passport (copy)",
      "Two recent passport-sized photographs",
    ],
  },
];

const faqs = [
  {
    q: "When is the January 2026 intake application deadline?",
    a: "Applications are open now. We recommend applying early as spaces are limited.",
  },
  {
    q: "Is distance learning available?",
    a: "Yes. SIU supports both on-campus and distance-learning modes with online classes, recorded sessions, and live lectures.",
  },
  {
    q: "Are there scholarship opportunities?",
    a: "SIU is committed to widening access. Contact the Admissions Office about current bursary and scholarship opportunities.",
  },
  {
    q: "Can international students apply?",
    a: "Yes. International students are welcome. Contact our Admissions Office for guidance on international equivalency.",
  },
  {
    q: "What is the language of instruction?",
    a: "All programmes at Starford International University are taught in English.",
  },
];

export default async function AdmissionsPage() {
  const admissionsCopy = await getAdmissionsCopy();
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>

      <NavBar />

      {/* Hero */}
      <header className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0e0d]">
          <Image
            src="/grad-procession.jpg"
            alt="Starford students"
            fill
            sizes="100vw"
            priority
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--brand-gold)]" />
            <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">{admissionsCopy.hero.badge}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight max-w-3xl mb-5">
            {admissionsCopy.hero.title}
          </h1>
          <p className="text-white/50 font-sans max-w-lg text-base leading-relaxed">
            {admissionsCopy.hero.subtitle}
          </p>
        </div>
      </header>

      {/* Key Dates Bar */}
      <div className="w-full bg-[var(--brand-crimson)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {admissionsCopy.keyDates.map((item, i) => (
            <div key={i} className="py-5 px-8 text-center">
              <p className="font-serif font-light text-white text-xl">{item.value}</p>
              <p className="text-white/50 text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 space-y-28">

        {/* How to Apply */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b border-[var(--border)] pb-5 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Process</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">How to Apply</h2>
            </div>
            <Link href="/student-application" className="font-sans font-semibold text-[var(--brand-crimson)] text-[11px] tracking-widest uppercase hover:underline hidden sm:flex items-center gap-1">
              Start Application
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[var(--border)]">
            {steps.map((step, i) => (
              <div key={i} className={`group relative bg-[var(--surface)] p-8 flex flex-col hover:bg-[var(--brand-crimson)] transition-colors duration-300`}>
                <span className="font-serif text-4xl font-light text-[var(--brand-crimson)] group-hover:text-white/20 mb-5 transition-colors">
                  {step.num}
                </span>
                <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-3 leading-snug group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-[var(--muted)] text-sm font-sans leading-relaxed flex-grow group-hover:text-white/70 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/student-application" className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--brand-crimson)] text-white font-sans font-semibold text-[11px] uppercase tracking-widest hover:bg-[#7d0c28] transition-colors group">
              Start Your Application
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
        </div>

        {/* Entry Requirements */}
        <div className="reveal">
          <div className="border-b border-[var(--border)] pb-5 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Requirements</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">Entry Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
            {requirements.map((r, i) => (
              <div key={i} className={`p-10 ${i === 0 ? "bg-[#0f0e0d]" : "bg-[var(--surface)]"}`}>
                <div className="w-8 h-px bg-[var(--brand-crimson)] mb-6" />
                <h3 className="font-serif font-light text-xl mb-7" style={{ color: i === 0 ? "#fff" : "var(--foreground)" }}>
                  {r.level}
                </h3>
                <ul className="space-y-3">
                  {r.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm font-sans leading-relaxed" style={{ color: i === 0 ? "rgba(255,255,255,0.55)" : "var(--muted)" }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--brand-crimson)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Admissions */}
        <div className="bg-[#0f0e0d] p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[var(--brand-gold)]" />
              <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Get In Touch</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-5 leading-tight">
              Talk to Our Admissions Team
            </h2>
            <p className="text-white/45 font-sans leading-relaxed mb-8 text-sm">
              Our admissions team is here to guide you through every step — from choosing the right programme to submitting your documents.
            </p>
            <Link href="/student-application" className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--brand-crimson)] text-white font-sans font-semibold text-[11px] uppercase tracking-widest hover:bg-[#7d0c28] transition-colors group">
              Apply Online
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
          <div className="space-y-5 text-sm font-sans">
            {[
              { name: "Mr. Atem Arop Majok", role: "Director of Finance & Admissions", phone: "+211 980 333 824", tel: "+211980333824" },
              { name: "Mr. Uwkah Abraham", role: "Director of Academic Affairs", phone: "+211 922 281 650", tel: "+211922281650" },
            ].map((person, i) => (
              <div key={i} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-b-0">
                <div className="w-10 h-10 bg-[var(--brand-crimson)] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-white text-base font-semibold">{person.name[3]}</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-white text-sm">{person.name}</p>
                  <p className="text-white/40 text-xs">{person.role}</p>
                  <a href={`tel:${person.tel}`} className="text-[var(--brand-gold)] text-xs hover:underline">{person.phone}</a>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 pt-2">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-sm">Campus Location</p>
                <p className="text-white/40 text-xs">Juba, Republic of South Sudan</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="reveal">
          <div className="border-b border-[var(--border)] pb-5 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">FAQ</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)]">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[var(--border)]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-r border-[var(--border)] p-8 hover:bg-[var(--surface)] transition-colors">
                <h3 className="font-sans font-semibold text-[var(--foreground)] mb-3 text-sm leading-snug">
                  {faq.q}
                </h3>
                <p className="text-[var(--muted)] text-sm font-sans leading-relaxed">{faq.a}</p>
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
