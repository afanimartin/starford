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
    <div className="min-h-screen bg-[#fcfcfc] overflow-x-hidden" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="relative w-full py-20 px-6 lg:px-12 text-center overflow-hidden">
        <Image
          src="/grad-procession.jpg"
          alt="Admissions at Starford"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-zoom-in"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10">
          <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            {admissionsCopy.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight flex flex-wrap justify-center gap-x-[0.28em]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {admissionsCopy.hero.title.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top">
                <span className="hero-domino-word inline-block" style={{ animationDelay: `${i * 150}ms` }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto text-lg">
            {admissionsCopy.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Key Dates Bar (Premium Floating) */}
      <div className="relative z-20 -mt-8 max-w-6xl mx-auto px-6">
        <div className="w-full bg-[#1b1c1d] shadow-2xl rounded-2xl overflow-hidden border border-white/10 animate-fade-in-up animate-delay-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {admissionsCopy.keyDates.map((item, i) => (
              <div key={i} className="group relative py-6 px-8 text-center bg-[#1b1c1d] hover:bg-[#a41034] transition-colors duration-500 overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-white font-bold text-xl relative z-10 transition-transform duration-500 group-hover:-translate-y-1">{item.value}</p>
                <p className="text-white/50 group-hover:text-white/80 text-xs uppercase tracking-[0.2em] font-bold mt-1.5 relative z-10 transition-all duration-500 group-hover:-translate-y-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 space-y-32">

        {/* How to Apply — Premium Bento Grid */}
        <div className="reveal">
          <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-gray-200 pb-6 mb-16 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1c1d] tracking-tight reveal reveal-fade stagger-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>How to Apply</h2>
            <Link href="/student-application" className="group flex items-center gap-2 font-bold text-[#a41034] text-xs tracking-widest uppercase hover:text-red-900 transition-colors reveal reveal-fade stagger-2">
              Start Application
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group relative p-10 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(164,16,52,0.08)] transition-all duration-500 hover:-translate-y-2 reveal stagger-${Math.min((i % 3) + 1, 6)} overflow-hidden ${i === 3 || i === 4 ? "md:col-span-1.5" : ""}`}
                style={i === 3 ? { gridColumn: "md:span 1.5" } : i === 4 ? { gridColumn: "md:span 1.5" } : {}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gray-200 group-hover:text-[#a41034]/10 font-black text-6xl md:text-7xl mb-6 leading-none transition-colors duration-500 transform -translate-x-2 -translate-y-2 tracking-tighter" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {step.num}
                  </span>
                  <h3 className="font-bold text-[#1b1c1d] text-xl mb-4 leading-snug group-hover:text-[#a41034] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Entry Requirements — Floating Glossy Cards */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1c1d] tracking-tight reveal reveal-fade stagger-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Entry Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {requirements.map((r, i) => (
              <div key={i} className={`group relative p-10 lg:p-14 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${i === 0 ? "bg-[#1b1c1d] text-white shadow-2xl hover:shadow-[0_20px_40px_rgba(27,28,29,0.3)]" : "bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"}`}>
                {i === 0 && (
                  <>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(164,16,52,0.3),transparent)] opacity-50 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                  </>
                )}
                <div className={`w-12 h-1.5 mb-8 rounded-full transition-all duration-500 group-hover:w-20 ${i === 0 ? "bg-[var(--brand-yellow)]" : "bg-[#a41034]"}`} />
                <h3 className="font-bold text-2xl lg:text-3xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {r.level}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {r.items.map((item, j) => (
                    <li key={j} className="flex gap-4 text-sm lg:text-base items-start" style={{ color: i === 0 ? "rgba(255,255,255,0.8)" : "#4b5563" }}>
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${i === 0 ? "bg-[var(--brand-yellow)]/20 text-[var(--brand-yellow)]" : "bg-red-50 text-[#a41034]"}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Admissions — Premium White Card */}
        <div className="reveal">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-[#1b1c1d] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500 bg-white"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-yellow)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none animate-pulse" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-5 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 11.996c0 2.29.983 4.39 2.621 5.92m3.679 1.705A9.722 9.722 0 0 0 12 20.25Z" /></svg>
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Talk to Our Admissions Team
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg font-light">
                Our admissions team is here to guide you through every step — from choosing the right programme to submitting your documents.
              </p>
              <Link
                href="/student-application"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#a41034] text-white font-bold text-[16px] uppercase tracking-[0.1em] rounded-none hover:bg-red-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
              >
                Apply Online
                <svg className="w-9 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="relative z-10 space-y-6">
              {[
                { name: "Mr. Uwkah Abraham", role: "Admissions", phone: "+211 922 281 650", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /> },
                { name: "Mr. Atem Arop Majok", role: "Finance", phone: "+211 980 333 824", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /> },
                { name: "Campus Location", role: "Juba, Republic of South Sudan", phone: "", icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></> }
              ].map((contact, i) => (
                <div key={i} className={`group flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 ${i === 2 ? 'mt-4 border-t border-gray-200 pt-6' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-100 transition-all duration-300 shadow-sm">
                    <svg className="w-5 h-5 text-[#a41034]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      {contact.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1b1c1d] font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{contact.name}</p>
                    <p className="text-gray-500 text-xs tracking-wider uppercase mb-1 font-medium">{contact.role}</p>
                    {contact.phone && (
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="inline-block text-[#a41034] hover:text-red-900 font-bold text-sm transition-colors mt-1">
                        {contact.phone}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs — Focus Accordions */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1c1d] tracking-tight reveal reveal-fade stagger-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl bg-white focus-within:ring-2 focus-within:ring-[#a41034]/20 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="font-bold text-[#1b1c1d] text-[15px] leading-snug pr-4 group-hover:text-[#a41034] transition-colors" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {faq.q}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-[#a41034] group-open:-rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div className="relative z-10 w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 reveal">
        <p className="text-gray-500 text-xs tracking-wide">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="group flex items-center gap-2 text-[#a41034] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
          <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
