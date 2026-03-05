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
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
          Juba, South Sudan
        </span>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Contact Us
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          We would love to speak with you. Feel free to reach out using the details below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left — Contact Info */}
          <div className="lg:col-span-1 space-y-10 reveal reveal-x-left">

            {/* Call Us */}
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-6 block">Call Us</span>
              <div className="space-y-5">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#1b1c1d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a41034] transition-colors">
                      <span
                        className="text-white font-bold text-base"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {c.initial}
                      </span>
                    </div>
                    <div>
                      <p
                        className="font-bold text-[#1b1c1d] text-sm leading-tight"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {c.name}
                      </p>
                      <p className="text-gray-400 text-xs mb-1">{c.role}</p>
                      <a
                        href={`tel:${c.tel}`}
                        className="text-[#a41034] font-bold text-sm hover:underline"
                      >
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200" />

            {/* Hours */}
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4 block">Office Hours</span>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <p className="text-[#1b1c1d] font-semibold text-sm">Monday to Friday</p>
                  <p className="text-gray-500 text-sm">8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4 block">Visit Us</span>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className="text-[#1b1c1d] font-semibold text-sm">Starford International University</p>
                  <p className="text-gray-500 text-sm">Eden, Hai Referendum</p>
                  <p className="text-gray-500 text-sm">Juba, Republic of South Sudan</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4 block">Follow Us</span>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Starford-International-University-61551652921726/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1b1c1d] text-white flex items-center justify-center hover:bg-[#a41034] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1b1c1d] text-white flex items-center justify-center hover:bg-[#a41034] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Enquiry Form + Map */}
          <div className="lg:col-span-2 space-y-10">

            {/* General Enquiry Form */}
            <div className="bg-white border border-gray-200 p-10 shadow-sm reveal reveal-x-right">
              <div className="w-10 h-1 bg-[#a41034] mb-6" />
              <h2
                className="text-2xl font-bold text-[#1b1c1d] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in the form below and a member of our team will get back to you within 2 business days.
              </p>

              <ContactForm />
            </div>

            {/* Map embed */}
            <div className="border border-gray-200 overflow-hidden shadow-sm reveal reveal-x-right">
              <div className="bg-[#1b1c1d] px-6 py-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#a41034]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-white font-bold text-xs uppercase tracking-widest">Eden, Hai Referendum — Juba, South Sudan</span>
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
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Starford International University. All rights reserved.
        </p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
