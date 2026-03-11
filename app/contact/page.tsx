import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Starford International University",
  description:
    "Get in touch with Starford International University. Visit us at Eden, Hai Referendum, Juba, South Sudan, or call our team directly.",
};

const contacts = [
  {
    name: "Mr. Atem Arop Majok",
    role: "Director of Finance",
    phone: "+211 980 333 824",
    tel: "+211980333824",
    initial: "A",
  },
  {
    name: "Mr. Moses Marial Buon",
    role: "Dean, College of Computer Science & IT",
    phone: "+211 926 061 870",
    tel: "+211926061870",
    initial: "M",
  },
  {
    name: "Mr. Uwkah Abraham",
    role: "Director of Academic Affairs",
    phone: "+211 922 281 650 / 925 289 771",
    tel: "+211922281650",
    initial: "U",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="w-full bg-[#0f0e0d] py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--brand-gold)]" />
            <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Juba, South Sudan</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-white/40 font-sans max-w-lg text-base leading-relaxed">
            We would love to speak with you. Reach out using the details below or send us a message.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left — Contact Info */}
          <div className="lg:col-span-1 space-y-12 reveal reveal-x-left">

            {/* Call Us */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-5 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Call Us</span>
              </div>
              <div className="space-y-6">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#0f0e0d] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-crimson)] transition-colors">
                      <span className="font-serif text-white font-semibold text-base">{c.initial}</span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[var(--foreground)] text-sm leading-tight">{c.name}</p>
                      <p className="text-[var(--muted)] text-xs font-sans mb-1">{c.role}</p>
                      <a href={`tel:${c.tel}`} className="text-[var(--brand-crimson)] font-sans font-semibold text-sm hover:underline">
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-[var(--border)]" />

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Office Hours</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--muted)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <p className="font-sans font-semibold text-[var(--foreground)] text-sm">Monday to Friday</p>
                  <p className="text-[var(--muted)] text-sm font-sans">8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Visit Us</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--muted)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className="font-sans font-semibold text-[var(--foreground)] text-sm">Starford International University</p>
                  <p className="text-[var(--muted)] text-sm font-sans">Eden, Hai Referendum</p>
                  <p className="text-[var(--muted)] text-sm font-sans">Juba, Republic of South Sudan</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Follow Us</span>
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/p/Starford-International-University-61551652921726/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#0f0e0d] text-white flex items-center justify-center hover:bg-[var(--brand-crimson)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#0f0e0d] text-white flex items-center justify-center hover:bg-[var(--brand-crimson)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form + Map */}
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-[var(--surface)] border border-[var(--border)] p-10 reveal reveal-x-right">
              <div className="w-8 h-px bg-[var(--brand-crimson)] mb-6" />
              <h2 className="font-serif text-2xl font-light text-[var(--foreground)] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[var(--muted)] font-sans text-sm mb-8 leading-relaxed">
                Fill in the form below and a member of our team will get back to you within 2 business days.
              </p>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="border border-[var(--border)] overflow-hidden reveal reveal-x-right">
              <div className="bg-[#0f0e0d] px-6 py-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--brand-crimson)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-white font-sans font-semibold text-[11px] uppercase tracking-widest">Eden, Hai Referendum — Juba, South Sudan</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7!2d31.5713!3d4.8517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHai+Referendum%2C+Juba!5e0!3m2!1sen!2sss!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Starford International University Location"
              />
            </div>
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
