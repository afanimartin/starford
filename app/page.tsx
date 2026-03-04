"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcfc] selection:bg-[#a41034] selection:text-white overflow-x-hidden" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* 1. Stanford Gateway Bar */}
      <div className="w-full bg-[#1b1c1d] text-white py-2 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-[12px] font-medium tracking-wide gap-2">
        <div className="flex gap-5 opacity-70">
          <a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a>
          <a href="/academic-calendar" className="hover:opacity-100 transition-opacity">Academic Calendar</a>
          <a href="/news" className="hover:opacity-100 transition-opacity">News</a>
        </div>
        <div className="flex gap-5 uppercase tracking-wider text-[10px] font-bold">
          <span className="opacity-40 hidden md:block">Info For:</span>
          <a href="#" className="hover:text-[#a41034] transition-colors">Students</a>
          <a href="#" className="hover:text-[#a41034] transition-colors">Faculty & Staff</a>
          <a href="#" className="hover:text-[#a41034] transition-colors">Alumni</a>
          <a href="#" className="hover:text-[#a41034] transition-colors">Partners</a>
        </div>
      </div>

      {/* 2. Main Navigation with Mobile Menu */}
      <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image src="/logo.jpeg" alt="SIU Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#1b1c1d] font-bold text-2xl md:text-3xl tracking-tight leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              STARFORD
            </span>
            <span className="text-[#a41034] font-semibold text-[10px] uppercase tracking-[0.25em] leading-tight mt-0.5">
              International University
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[#222] text-[14px] font-semibold tracking-wide">
          <a href="/about" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">About</a>
          <a href="/admissions" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">Admissions</a>
          <a href="/academics" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">Academics</a>
          <a href="/leadership" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">Leadership</a>
          <a href="/news" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">News</a>
          <a href="/academic-calendar" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">Academic Calendar</a>
          <a href="/contact" className="hover:text-[#a41034] transition-colors border-b-2 border-transparent hover:border-[#a41034] pb-1">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/admissions"
            className="hidden sm:block px-5 py-2 bg-[#a41034] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors"
          >
            Apply Now
          </a>
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 text-gray-700 hover:text-[#a41034] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-gray-200 shadow-lg z-40 flex flex-col">
          {[
            { label: "About", href: "/about" },
            { label: "Admissions", href: "/admissions" },
            { label: "Academics", href: "/academics" },
            { label: "Leadership", href: "/leadership" },
            { label: "News", href: "/news" },
            { label: "Academic Calendar", href: "/academic-calendar" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="px-6 py-4 text-[#1b1c1d] font-semibold text-sm uppercase tracking-widest border-b border-gray-100 hover:bg-gray-50 hover:text-[#a41034] transition-colors">
              {item.label}
            </a>
          ))}
          <a href="/admissions" className="mx-6 my-4 px-5 py-3 bg-[#a41034] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-red-900 transition-colors">
            Apply Now
          </a>
        </div>
      )}

      {/* 3. Hero — Harvard Authoritative Typography + Real Tagline */}
      <header className="relative w-full h-[90vh] min-h-[620px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
          <img
            src="/grad-procession.jpg"
            alt="Starford Campus, Juba"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-20 text-center animate-fade-in-up">
          <span className="inline-block py-1.5 px-4 bg-[#a41034] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-7">
            Ministerially Accredited · Est. 2015 · Juba, South Sudan
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Education for Sustainable Development
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Starford International University is pioneering a technology-first approach to higher education — equipping students with digital skills, data fluency, and innovative thinking to lead South Sudan's knowledge economy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/admissions" className="px-9 py-4 bg-white text-[#1b1c1d] font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors shadow-xl text-center">
              Apply for 2026
            </a>
            <a href="/about" className="px-9 py-4 border border-white text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#1b1c1d] transition-colors text-center">
              Our Story
            </a>
          </div>
        </div>
      </header>

      {/* 4. Stats Strip — Real Numbers */}
      <section className="w-full bg-[#1b1c1d] py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {[
            { value: "636",    label: "Graduates (April 2025)" },
            { value: "5",      label: "Academic Colleges" },
            { value: "200+",   label: "Women Graduates" },
            { value: "2015",   label: "Year Founded" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-12 px-8 group hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#a41034] transition-colors tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Admissions + Accreditation CTA Banner */}
      <section className="w-full bg-[#a41034] py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
              Ministerial Order No. 23/2025 · Officially Accredited October 2025
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              January 2026 Intake — Applications Now Open.
            </h2>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="/admissions" className="px-8 py-3 bg-white text-[#a41034] font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-md text-center">
              Apply Now
            </a>
            <a href="/admissions" className="px-8 py-3 border border-white/50 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 6. Message from the Chairman */}
      <section className="w-full bg-white py-24 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Message Side — LEFT */}
          <div>
            <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4 block">Message from the Chairman</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d] leading-tight mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Building the Intellectual Foundation for a Prosperous South Sudan
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              <p className="text-lg">
                When I founded Starford International University in 2015, I had a bold vision: to build an institution that not only educates, but empowers a generation of leaders who will contribute to peace, development, and national self-reliance.
              </p>
              <p>
                The general welfare of our people has always been the pivotal concern of this University. We are committed to addressing the issues of poverty, illiteracy, and social challenges — creating harmonious relations and inculcating a sense of ethics and values through substantial improvement in education, skills, and infrastructure.
              </p>
              <p>
                In October 2025, Starford earned full university accreditation — a milestone achieved through the dedication of our faculty, staff, students, and partners. This is not an end, but a beginning. We are building master's-level programs, expanding our campus, and deepening our research impact across the region.
              </p>
              <p className="font-semibold text-[#1b1c1d]">
                I invite you to be part of this extraordinary journey.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 flex items-center gap-6">
              <div>
                <p className="text-[#1b1c1d] font-bold text-sm" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Hon. Dium (Gium) Cyer Cyer Deng
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Founder & Chairman of the Board</p>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <a href="/about" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">
                The Starford Story →
              </a>
            </div>
          </div>

          {/* Image Side — RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto lg:ml-auto lg:mr-0 shadow-2xl">
              <img
                src="/chairman.jpeg"
                alt="Hon. Dium Cyer Cyer Deng — Founder & Chairman, Starford International University"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1c1d] via-[#1b1c1d]/80 to-transparent pt-16 pb-6 px-6">
                <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Hon. Dium Cyer Cyer Deng
                </p>
                <p className="text-[#a41034] font-bold text-xs uppercase tracking-widest mt-1">
                  Founder & Chairman of the Board
                </p>
                <p className="text-gray-400 text-xs mt-1">Starford International University</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-[#a41034] opacity-30 hidden lg:block" />
          </div>

        </div>

      </section>

      {/* 7. Harvard "In Focus" — Real News Articles */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>In Focus</h2>
          <a href="/news" className="font-bold text-[#a41034] text-xs tracking-widest uppercase hover:underline">All News →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main Feature */}
          <article className="md:col-span-7 group cursor-pointer">
            <a href="/news">
              <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-200">
                <img
                  src="/chancellor.jpg"
                  alt="Dr. Matur Ater Majing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-3 block">Academic Achievement</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1b1c1d] mb-4 group-hover:text-[#a41034] transition-colors leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Celebrating the Academic Achievement of Dr. Matur Ater Majing
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                A proud moment for Starford International University as one of our own reaches new heights of academic distinction — a testament to SIU's commitment to nurturing excellence.
              </p>
            </a>
          </article>

          {/* Secondary Features */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <article className="group cursor-pointer">
              <a href="/news">
                <div className="overflow-hidden mb-4 aspect-video bg-gray-200">
                  <img
                    src="/disability.jpg"
                    alt="Disability is not Inability"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-2 block">Community & Inclusion</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[#a41034] transition-colors leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Demonstrating That Disability is Not Inability
                </h3>
              </a>
            </article>

            <article className="group cursor-pointer pt-8 border-t border-gray-200">
              <a href="/admissions">
                <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-2 block">Admissions</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[#a41034] transition-colors leading-snug mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Call for Admission — January 2026 Intake
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Starford International University invites applications for the January 2026 academic intake. Join a growing community of scholars in Juba, South Sudan.
                </p>
              </a>
            </article>

            <article className="group cursor-pointer pt-8 border-t border-gray-200">
              <a href="/news">
                <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-2 block">Success Story</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[#a41034] transition-colors leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  SIU Moot Court Team Wins 5th South Sudan IHL Competition
                </h3>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 7. Stanford Cards — Real 5 Colleges */}
      <section className="w-full bg-[#1b1c1d] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center tracking-tight">
            Our Five Colleges
          </h2>
          <p className="text-center text-white/50 text-sm mb-16 uppercase tracking-widest font-semibold">
            Colleges and Academic Divisions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
                label: "Computer Science & IT",
                desc: "Software development, data science, cybersecurity, and emerging technologies for the digital future.",
              },
              {
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
                label: "Economics & Social Studies",
                desc: "Understanding the forces that shape economies and societies through theory and practical analysis.",
              },
              {
                img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
                label: "Humanities & Social Science",
                desc: "Exploring culture, history, communication, and human behavior through critical inquiry.",
              },
              {
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
                label: "College of Law",
                desc: "National IHL Moot Court champions. Training South Sudan's next generation of legal professionals.",
              },
              {
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
                label: "Management Sciences",
                desc: "Business strategy, finance, marketing, and organizational management for complex markets.",
              },
            ].map((card, i) => (
              <a
                key={i}
                href="/academics"
                className={`relative group overflow-hidden h-80 bg-gray-900 cursor-pointer ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">College of {card.label}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-[#a41034] transition-all duration-500 mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                    {card.desc}
                  </p>
                </div>
              </a>
            ))}

            {/* CTA Card */}
            <div className="relative group overflow-hidden h-80 bg-[#a41034] cursor-pointer flex items-center justify-center text-center p-8">
              <div className="relative z-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Visit Our Campus</h3>
                <p className="text-white/75 text-sm max-w-xs mb-6 leading-relaxed">
                  Located in Juba, South Sudan. Experience our modern facilities and vibrant student life.
                </p>
                <a href="/contact" className="px-6 py-2 border-2 border-white text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#a41034] transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Alumni Quote — Real Testimonial */}
      <section className="w-full bg-[#fcfcfc] border-y border-gray-200 py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <svg className="w-10 h-10 text-[#a41034] mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.62-4.165 2.644-4.165 5.348h4.17V21h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.62-4.17 2.644-4.17 5.348h4.17V21H0z"/>
          </svg>
          <blockquote className="text-2xl md:text-4xl font-bold text-[#1b1c1d] leading-tight mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            "Looking back at how Starford International University has been able to shape me with leadership skills is just incredible."
          </blockquote>
          <p className="text-[#a41034] font-bold text-sm uppercase tracking-widest">— Starford Alumni · Pal Jock Jack</p>

        </div>
      </section>

      {/* 9. Footer — Real Contacts & Social Links */}
      <footer className="w-full bg-[#111] pt-20 pb-10 border-t-4 border-[#a41034]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white p-1">
                <Image src="/logo.jpeg" alt="SIU Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  STARFORD
                </span>
                <span className="text-[#a41034] font-bold text-[9px] uppercase tracking-[0.15em] leading-tight mt-1">
                  Education for Sustainable Development
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Accredited by the South Sudan Ministry of Higher Education, Science & Technology.
            </p>
            <p className="text-gray-500 text-xs italic mb-6">Ministerial Order No. 23/2025</p>
            {/* Social Links — Real URLs */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Starford-International-University-61551652921726/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href="/" aria-label="Website" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 1 .284-2.253" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Colleges</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-light">
              <li><a href="/academics" className="hover:text-white transition-colors">Computer Science &amp; IT</a></li>
              <li><a href="/academics" className="hover:text-white transition-colors">Economics &amp; Social Studies</a></li>
              <li><a href="/academics" className="hover:text-white transition-colors">Humanities &amp; Social Science</a></li>
              <li><a href="/academics" className="hover:text-white transition-colors">College of Law</a></li>
              <li><a href="/academics" className="hover:text-white transition-colors">Management Sciences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-light">
              <li><a href="/about" className="hover:text-white transition-colors">The Starford Story</a></li>
              <li><a href="/leadership" className="hover:text-white transition-colors">Leadership &amp; Management</a></li>
              <li><a href="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="/admissions" className="hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Real Contacts */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get In Touch</h4>
            <address className="not-italic text-gray-400 text-sm font-light leading-relaxed mb-6 flex flex-col gap-3">
              <p className="text-gray-200 font-medium">Starford International University<br/>Juba, Republic of South Sudan</p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Admissions</span>
                <a href="tel:+211980333824" className="hover:text-white transition-colors">Mr. Atem Arop Majok</a><br/>
                <a href="tel:+211980333824" className="hover:text-white transition-colors text-xs">+211 980 333 824</a>
              </p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Academics</span>
                <a href="tel:+211926061870" className="hover:text-white transition-colors">Mr. Moses Marial Buon</a><br/>
                <a href="tel:+211926061870" className="hover:text-white transition-colors text-xs">+211 926 061 870</a>
              </p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Administration</span>
                <a href="tel:+211922281650" className="hover:text-white transition-colors">Mr. Uwkah Abraham</a><br/>
                <a href="tel:+211922281650" className="hover:text-white transition-colors text-xs">+211 922 281 650</a>
              </p>
            </address>
            <a href="/contact" className="inline-block px-6 py-2.5 bg-[#a41034] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors">
              Donate
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Starford International University. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs uppercase tracking-widest">
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/admissions" className="hover:text-white transition-colors">Admissions</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
