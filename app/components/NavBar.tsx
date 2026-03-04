"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Leadership", href: "/leadership" },
  { label: "News", href: "/news" },
  { label: "Academic Calendar", href: "/academic-calendar" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image src="/logo.jpeg" alt="SIU Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[#1b1c1d] font-bold text-xl tracking-tight leading-none"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              STARFORD
            </span>
            <span className="text-[#a41034] font-semibold text-[9px] uppercase tracking-[0.25em] leading-tight mt-0.5">
              International University
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8 text-[#222] text-[14px] font-semibold tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors border-b-2 pb-1 ${
                  isActive
                    ? "text-[#a41034] border-[#a41034]"
                    : "border-transparent hover:text-[#a41034] hover:border-[#a41034]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden sm:inline-block px-5 py-2.5 bg-[#a41034] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors"
          >
            Apply Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-[#1b1c1d]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden w-full bg-white border-t border-gray-100 shadow-lg flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-4 text-sm font-semibold uppercase tracking-widest border-b border-gray-100 transition-colors ${
                pathname === link.href
                  ? "text-[#a41034] bg-gray-50"
                  : "text-[#1b1c1d] hover:bg-gray-50 hover:text-[#a41034]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="px-6 py-4 bg-[#a41034] text-white font-bold text-sm uppercase tracking-widest text-center hover:bg-red-900 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
