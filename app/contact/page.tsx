import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Starford International University",
  description:
    "Get in touch with Starford International University. Visit us at Eden, Hai Referendum, Juba, South Sudan, or call our team directly.",
};

const contacts = [
  {
    name: "Mr. Uwkah Abraham",
    role: "Admissions",
    phone: "+211 922 281 650",
    tel: "+211922281650",
    initial: "U",
  },
  {
    name: "Mr. Atem Arop Majok",
    role: "Finance",
    phone: "+211 980 333 824",
    tel: "+211980333824",
    initial: "A",
  },
  {
    name: "Dr. Ayor",
    role: "Research and innovation",
    phone: "+211 926 061 870",
    tel: "+211926061870",
    initial: "A",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] overflow-x-hidden" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="relative w-full py-20 px-6 lg:px-12 text-center overflow-hidden">
        <Image
          src="/grad-procession.jpg"
          alt="Contact Starford International University"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-zoom-in"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10">
          <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            Juba, South Sudan
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight flex flex-wrap justify-center gap-x-[0.28em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {["Contact", "Us"].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top">
                <span className="hero-domino-word inline-block" style={{ animationDelay: `${i * 150}ms` }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto text-lg">
            We would love to speak with you. Feel free to reach out using the details below or visit us on campus to learn more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left — Contact Info (Bento Style) */}
          <div className="lg:col-span-5 space-y-8 reveal reveal-x-left">
            
            {/* Call Us Card */}
            <div className="group relative bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#a41034] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 transform translate-x-4 -translate-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
              </div>

              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-8 block relative z-10 flex items-center gap-3 reveal reveal-fade stagger-1">
                <span className="w-6 h-px bg-[#a41034]" /> Directory
              </span>
              <div className="space-y-6 relative z-10">
                {contacts.map((c, i) => (
                  <div key={i} className={`flex items-start gap-5 p-4 -ml-4 rounded-xl hover:bg-gray-50 transition-colors reveal reveal-fade stagger-${Math.min(i + 2, 6)}`}>
                    <div className="w-12 h-12 rounded-full bg-gray-100 text-[#1b1c1d] flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                        {c.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1b1c1d] text-base leading-tight mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                        {c.name}
                      </p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 font-medium">{c.role}</p>
                      <a href={`tel:${c.tel}`} className="inline-flex items-center gap-2 text-[#a41034] font-bold text-sm hover:text-red-800 transition-colors group/link">
                        {c.phone}
                        <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours & Visit Us (Split Bento) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Hours */}
              <div className="group relative bg-[#1b1c1d] border border-[#2a2b2c] p-8 shadow-sm hover:shadow-2xl hover:border-[#a41034]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(164,16,52,0.15),transparent)] pointer-events-none" />
                <span className="text-white/60 font-bold text-[10px] tracking-widest uppercase mb-6 block flex items-center gap-2 relative z-10 reveal reveal-fade stagger-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  Office Hours
                </span>
                <p className="font-bold text-lg mb-1 shadow-sm relative z-10 reveal reveal-fade stagger-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Mon &mdash; Fri</p>
                <p className="text-white/70 text-sm relative z-10 reveal reveal-fade stagger-4">8:00 AM – 5:00 PM</p>
              </div>

              {/* Visit Us */}
              <div className="group relative bg-[var(--brand-yellow)] border border-[var(--brand-yellow)] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="text-[#1b1c1d]/70 font-bold text-[10px] tracking-widest uppercase mb-6 block flex items-center gap-2 relative z-10 reveal reveal-fade stagger-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  Visit Us
                </span>
                <p className="font-bold text-[#1b1c1d] text-lg mb-2 leading-tight relative z-10 reveal reveal-fade stagger-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Starford Int. University</p>
                <p className="text-[#1b1c1d]/80 text-sm relative z-10 reveal reveal-fade stagger-4">Eden, Hai Referendum<br/>Juba, South Sudan</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 items-center pl-2 flex-wrap reveal reveal-fade stagger-5">
              <span className="text-gray-400 font-bold text-[10px] tracking-widest uppercase mr-2 relative">
                Follow Us
                <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-gray-300" />
              </span>
              <a
                href="https://www.facebook.com/p/Starford-International-University-61551652921726/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#1b1c1d] flex items-center justify-center hover:bg-[#1b1c1d] hover:text-white hover:border-[#1b1c1d] transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#1b1c1d] flex items-center justify-center hover:bg-[#a41034] hover:text-white hover:border-[#a41034] transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>
              </a>
            </div>
          </div>

          {/* Right — Enquiry Form + Map */}
          <div className="lg:col-span-7 space-y-12 reveal reveal-x-right">

            {/* General Enquiry Form */}
            <div className="bg-white border border-gray-100 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(164,16,52,0.05),transparent)] pointer-events-none" />
              <div className="w-12 h-1 bg-[#a41034] mb-8" />
              <h2
                className="text-3xl font-bold text-[#1b1c1d] mb-3 reveal reveal-fade stagger-1"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-10 max-w-lg leading-relaxed reveal reveal-fade stagger-2">
                Fill out the form below and our admissions team or general staff will respond to your enquiry within two business days.
              </p>

              <div className="reveal reveal-fade stagger-3">
                <ContactForm />
              </div>
            </div>

            {/* Premium Map embed */}
            <div className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-[#1b1c1d]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 z-10 pointer-events-none" style={{ transform: 'skewX(-20deg)' }} />
              <div className="px-8 py-5 flex items-center gap-4 relative z-20 bg-gradient-to-r from-[#1b1c1d] to-[#2a2b2c]">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[var(--brand-yellow)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] block mb-0.5 opacity-70 reveal reveal-fade stagger-1">Find Us Here</span>
                  <span className="text-white font-semibold text-sm tracking-wide reveal reveal-fade stagger-2">Eden, Hai Referendum — Juba, South Sudan</span>
                </div>
              </div>
              <div className="relative h-80 w-full z-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7!2d31.5713!3d4.8517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHai+Referendum%2C+Juba!5e0!3m2!1sen!2sss!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Starford International University Location"
                  className="filter contrast-125 saturate-50 group-hover:filter-none transition-all duration-700 w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 reveal">
        <p className="text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Starford International University. All rights reserved.
        </p>
        <Link href="/" className="group flex items-center gap-2 text-[#a41034] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
          <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
