"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Leadership", href: "/leadership" },
  { label: "News", href: "/news" },
  { label: "Calendar", href: "/academic-calendar" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isApplyActive = pathname === "/student-application";
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home pages, always use white/solid nav
  const solidNav = !isHome || scrolled;

  return (
    <>
      {/* Top info bar */}
      <div className="w-full bg-[#0f0e0d] text-white py-2 px-6 lg:px-16 hidden md:flex justify-between items-center text-[11px] font-sans tracking-wide">
        <div className="flex gap-6 text-white/50">
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link>
          <Link href="/news" className="hover:text-white transition-colors">News</Link>
        </div>
        <div className="flex gap-5 uppercase tracking-widest text-[10px] font-semibold">
          <span className="text-white/25">Info For:</span>
          <a href="#" className="text-white/50 hover:text-[var(--brand-gold)] transition-colors">Students</a>
          <a href="#" className="text-white/50 hover:text-[var(--brand-gold)] transition-colors">Faculty</a>
          <a href="#" className="text-white/50 hover:text-[var(--brand-gold)] transition-colors">Alumni</a>
          <a href="#" className="text-white/50 hover:text-[var(--brand-gold)] transition-colors">Partners</a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`w-full sticky top-0 z-50 transition-all duration-500 ${
          solidNav
            ? "bg-[#f8f6f1] border-b border-[#e5e0d8] shadow-sm"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-16 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden">
              <Image src="/logo.jpeg" alt="SIU Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif font-semibold text-[18px] tracking-wider transition-colors ${
                  solidNav ? "text-[#0f0e0d]" : "text-white"
                }`}
              >
                STARFORD
              </span>
              <span
                className={`text-[8px] font-sans font-semibold uppercase tracking-[0.3em] mt-0.5 transition-colors ${
                  solidNav ? "text-[var(--brand-crimson)]" : "text-[var(--brand-gold)]"
                }`}
              >
                International University
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-sans font-medium tracking-wide transition-colors relative group ${
                    isActive
                      ? solidNav ? "text-[var(--brand-crimson)]" : "text-[var(--brand-gold)]"
                      : solidNav ? "text-[#0f0e0d]/70 hover:text-[var(--brand-crimson)]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[var(--brand-crimson)]"
                        : "w-0 group-hover:w-full bg-[var(--brand-crimson)]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/student-application"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-sans font-semibold uppercase tracking-widest transition-all duration-300 ${
                isApplyActive
                  ? "bg-[#6d0c22] text-white"
                  : solidNav
                  ? "bg-[var(--brand-crimson)] text-white hover:bg-[#7d0c28]"
                  : "bg-white text-[#0f0e0d] hover:bg-[var(--brand-gold)] hover:text-white"
              }`}
            >
              Apply Now
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`lg:hidden p-2 transition-colors ${solidNav ? "text-[#0f0e0d]" : "text-white"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden w-full bg-[#f8f6f1] border-t border-[#e5e0d8] overflow-hidden transition-all duration-300 ${
            open ? "max-h-[680px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-6 py-4 border-b border-[#e5e0d8] text-[13px] font-sans font-medium uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-[var(--brand-crimson)] bg-white"
                  : "text-[#0f0e0d]/70 hover:text-[var(--brand-crimson)] hover:bg-white"
              }`}
              style={{ transitionDelay: open ? `${idx * 25}ms` : "0ms" }}
            >
              {link.label}
              <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
          <Link
            href="/student-application"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--brand-crimson)] text-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-[#7d0c28] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </>
  );
}
