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
    desc: "Browse our five colleges and select the degree or diploma programme that aligns with your goals. Review entry requirements for your chosen field.",
  },
  {
    num: "02",
    title: "Prepare Your Documents",
    desc: "Gather your academic transcripts, certificates, national ID or passport, and two passport-sized photographs. International applicants may need additional documentation.",
  },
  {
    num: "03",
    title: "Submit Your Application",
    desc: "Complete the online application form on our student portal. You can also submit in person at the Admissions Office on our Juba campus.",
  },
  {
    num: "04",
    title: "Receive Your Offer",
    desc: "Our admissions team reviews all applications. Successful applicants will receive a formal letter of offer via email and post within 2–4 weeks.",
  },
  {
    num: "05",
    title: "Confirm & Enrol",
    desc: "Accept your offer, pay your registration fee, and complete the enrollment process. Welcome to Starford International University.",
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
    a: "Applications are open now. We recommend applying early as spaces are limited. Contact the Admissions Office for the exact cutoff date.",
  },
  {
    q: "Is distance learning available?",
    a: "Yes. SIU supports both on-campus and distance-learning modes, giving students access to online classes, recorded sessions, and live lectures.",
  },
  {
    q: "Are there scholarship opportunities?",
    a: "SIU is committed to widening access to higher education. Contact the Admissions Office to enquire about current bursary and scholarship opportunities.",
  },
  {
    q: "Can international students apply?",
    a: "Yes. International students are welcome to apply. Please contact our Admissions Office for guidance on international equivalency of qualifications.",
  },
  {
    q: "What is the language of instruction?",
    a: "All programmes at Starford International University are taught in English.",
  },
];

export default async function AdmissionsPage() {
  const admissionsCopy = await getAdmissionsCopy();
  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <NavBar />

      {/* Hero — Harvard-style immersive */}
      <header className="relative w-full min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/grad-procession.jpg"
            alt="Starford students"
            fill
            sizes="100vw"
            priority
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">{admissionsCopy.hero.badge}</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {admissionsCopy.hero.title}
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-lg leading-relaxed">
            {admissionsCopy.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/student-application" className="px-9 py-4 bg-[var(--brand-blue)] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0048c8] transition-colors text-center shadow-xl">
              Apply Now
            </Link>
            <Link href="/academics" className="px-9 py-4 border border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b1c1d] transition-colors text-center">
              Explore Programmes
            </Link>
          </div>
        </div>
      </header>

      {/* Key Dates Bar */}
      <div className="w-full bg-[#a41034]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {admissionsCopy.keyDates.map((item, i) => (
            <div key={i} className="py-5 px-8 text-center">
              <p className="text-white font-bold text-lg">{item.value}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-28">

        {/* How to Apply — Harvard-style numbered steps */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>How to Apply</h2>
            <Link href="/admissions" className="font-bold text-[#a41034] text-xs tracking-widest uppercase hover:underline">Start Application →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {steps.map((step, i) => (
              <div key={i} className={`relative p-8 border-r border-gray-200 last:border-r-0 flex flex-col reveal stagger-${Math.min(i + 1, 6)} ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-[#a41034] font-bold text-4xl mb-5 leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {step.num}
                </span>
                <h3 className="font-bold text-[#1b1c1d] text-base mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:flex w-6 h-6 bg-[#a41034] rounded-full items-center justify-center z-10">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/student-application" className="inline-block px-12 py-4 bg-[#a41034] text-white font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-colors shadow-lg">
              Start Your Application
            </Link>
          </div>
        </div>

        {/* Entry Requirements — two column */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Entry Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((r, i) => (
              <div key={i} className={`p-10 ${i === 0 ? "bg-[#1b1c1d]" : "bg-white border border-gray-200"}`}>
                <div className="w-10 h-1 bg-[#a41034] mb-5" />
                <h3 className="font-bold text-lg mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: i === 0 ? "#fff" : "#1b1c1d" }}>
                  {r.level}
                </h3>
                <ul className="space-y-3">
                  {r.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm" style={{ color: i === 0 ? "rgba(255,255,255,0.75)" : "#4b5563" }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#a41034]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
        <div className="bg-[#0b4f8a] rounded-2xl shadow-2xl border border-blue-300/40 p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal reveal-x-left">
            <span className="text-white/60 font-bold text-[10px] tracking-widest uppercase mb-3 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Talk to Our Admissions Team
            </h2>
            <p className="text-white/75 leading-relaxed mb-6">
              Our admissions team is here to guide you through every step — from choosing the right programme to submitting your documents.
            </p>
            <Link href="/student-application" className="inline-block px-8 py-3 bg-[var(--brand-blue)] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0048c8] transition-colors">
              Apply Online
            </Link>
          </div>
          <div className="space-y-4 text-sm reveal reveal-x-right">
            <div className="flex items-start gap-4">
              <svg className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
              <div>
                <p className="text-white font-semibold">Mr. Atem Arop Majok</p>
                <p className="text-white/60">Director of Finance & Admissions</p>
                <a href="tel:+211980333824" className="text-white/80 hover:text-white transition-colors">+211 980 333 824</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
              <div>
                <p className="text-white font-semibold">Mr. Uwkah Abraham</p>
                <p className="text-white/60">Director of Academic Affairs</p>
                <a href="tel:+211922281650" className="text-white/80 hover:text-white transition-colors">+211 922 281 650</a>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-white/20">
              <svg className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div>
                <p className="text-white font-semibold">Campus Location</p>
                <p className="text-white/60">Juba, Republic of South Sudan</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t-2 border-[#1b1c1d] pt-6">
                <h3 className="font-bold text-[#1b1c1d] mb-3 text-base leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
