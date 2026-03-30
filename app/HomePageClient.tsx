"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import type { HomeCopy } from "@/lib/content";

function splitHeadlineIntoLines(headline: string): string[] {
  const words = headline.trim().split(/\s+/);
  if (words.length <= 3) return [headline];

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

export default function HomePageClient({ homeCopy }: { homeCopy: HomeCopy }) {
  const slides = homeCopy.slides;
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefersReducedMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  /* ── Hero slide rotator ── */
  const [slideIdx, setSlideIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [progressResetKey, setProgressResetKey] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 30 });
  const touchStartX = useRef<number | null>(null);
  useEffect(() => {
    if (prefersReducedMotion || slides.length === 0) return;
    const id = setInterval(() => {
      setDirection(1);
      setSlideIdx((i) => (i + 1) % slides.length);
      setProgressResetKey((v) => v + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [prefersReducedMotion, slides.length]);
  const slide = slides[slideIdx] ?? {
    headline: "Education for Sustainable Development",
    image: "/grad-procession.jpg",
    sub: "Equipping students with digital skills, data fluency, and innovative thinking to lead South Sudan's knowledge economy.",
  };
  const headlineLines = splitHeadlineIntoLines(slide.headline);
  let wordDelayIndex = 0;

  const moveSlide = (dir: 1 | -1) => {
    if (slides.length === 0) return;
    setDirection(dir);
    setSlideIdx((prev) => (prev + dir + slides.length) % slides.length);
    setProgressResetKey((v) => v + 1);
  };

  /* ── Animated stat counters ── */
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ graduates: 0, colleges: 0, women: 0, year: 0 });
  const statsAnimated = useRef(false);
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          const targets = { graduates: 636, colleges: 5, women: 200, year: 2015 };
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
            setCounts({
              graduates: Math.round(ease * targets.graduates),
              colleges:  Math.round(ease * targets.colleges),
              women:     Math.round(ease * targets.women),
              year:      Math.round(2000 + ease * (targets.year - 2000)),
            });
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] selection:bg-[var(--brand-red)] selection:text-white overflow-x-hidden" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* 1. Stanford Gateway Bar */}
      <div className="w-full bg-[#1b1c1d] text-white py-2 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-[12px] font-medium tracking-wide gap-2">
        <div className="flex gap-5 opacity-70">
          <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          <Link href="/academic-calendar" className="hover:opacity-100 transition-opacity">Academic Calendar</Link>
          <Link href="/news" className="hover:opacity-100 transition-opacity">News</Link>
        </div>
        <div className="flex gap-5 uppercase tracking-wider text-[10px] font-bold">
          <span className="opacity-40 hidden md:block">Info For:</span>
          <a href="#" className="hover:text-[var(--brand-red)] transition-colors">Students</a>
          <a href="#" className="hover:text-[var(--brand-red)] transition-colors">Faculty &amp; Staff</a>
          <a href="#" className="hover:text-[var(--brand-red)] transition-colors">Alumni</a>
          <a href="#" className="hover:text-[var(--brand-red)] transition-colors">Partners</a>
        </div>
      </div>

      <NavBar />

      {/* 3. Hero — image carousel */}
      <header
        className="relative w-full h-[92vh] min-h-[640px] flex items-end justify-center overflow-hidden"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveSlide(-1);
          if (event.key === "ArrowRight") moveSlide(1);
        }}
        onMouseMove={(event) => {
          if (prefersReducedMotion) return;
          const { currentTarget } = event;
          const rect = currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          setSpotlight({ x, y });
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
          if (Math.abs(delta) > 40) moveSlide(delta > 0 ? -1 : 1);
          touchStartX.current = null;
        }}
      >

        {/* Background images — cross-fade */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 z-0 transition-all duration-1000"
            style={{ opacity: i === slideIdx ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.headline}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ${
                i === slideIdx ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
          </div>
        ))}

        {/* Persistent animated overlay pulse */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(164,16,52,0.18),transparent_60%)] animate-pulse pointer-events-none" />
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-[background] duration-200"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.18), rgba(255,255,255,0) 38%)`,
          }}
        />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-20 text-center">

          {/* ── Accreditation badge — pinned on every slide ── */}
          <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-8 animate-fade-in-up">
            {homeCopy.hero.badge}
          </span>

          <div aria-live="polite" aria-atomic="true">
            {/* Rotating headline */}
            <h1
              key={`headline-${slideIdx}-${progressResetKey}`}
              className="mb-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              <span className="flex flex-col gap-1 md:gap-2">
                {headlineLines.map((line, lineIndex) => (
                  <span key={`${slideIdx}-${line}`} className="block overflow-hidden">
                    <span className="block">
                      {line.split(" ").map((word, wordIndex, words) => {
                        const delay = wordDelayIndex * 150;
                        wordDelayIndex += 1;

                        return (
                          <span
                            key={`${slideIdx}-${lineIndex}-${word}-${wordIndex}`}
                            className="inline-block overflow-hidden align-top"
                          >
                            <span
                              className={prefersReducedMotion ? "inline-block" : "hero-domino-word inline-block"}
                              style={prefersReducedMotion ? undefined : { animationDelay: `${delay}ms` }}
                            >
                              {word}
                            </span>
                            {wordIndex < words.length - 1 ? <span className="inline-block w-[0.28em]" aria-hidden="true" /> : null}
                          </span>
                        );
                      })}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Rotating sub-text */}
            <p
              key={`sub-${slideIdx}-${progressResetKey}`}
              className={`text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10 ${
                prefersReducedMotion ? "" : "hero-sub-reveal"
              }`}
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {slide.sub}
            </p>
          </div>

          <div className={`w-full max-w-xs mx-auto mb-8 ${prefersReducedMotion ? "hidden" : ""}`}>
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                key={`${progressResetKey}-${slideIdx}`}
                className="h-full bg-white/90 slide-progress"
              />
            </div>
          </div>

          {/* Slide indicator dots */}
          <div className="flex justify-center items-center gap-2 mb-10">
            <button
              onClick={() => moveSlide(-1)}
              aria-label="Previous slide"
              className="mr-2 h-9 w-9 rounded-full border border-white/35 text-white hover:bg-white/15 transition-colors"
            >
              ←
            </button>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > slideIdx ? 1 : -1);
                  setSlideIdx(i);
                  setProgressResetKey((v) => v + 1);
                }}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === slideIdx ? "bg-white w-8" : "bg-white/40 w-4 hover:bg-white/70"
                }`}
              />
            ))}
            <button
              onClick={() => moveSlide(1)}
              aria-label="Next slide"
              className="ml-2 h-9 w-9 rounded-full border border-white/35 text-white hover:bg-white/15 transition-colors"
            >
              →
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions" className="px-9 py-4 bg-white text-[#1b1c1d] font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all shadow-xl text-center hover:scale-105 transform duration-200">
              {homeCopy.hero.primaryCtaLabel}
            </Link>
            <Link href="/about" className="px-9 py-4 border border-white text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#1b1c1d] transition-all text-center hover:scale-105 transform duration-200">
              {homeCopy.hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* 4. Stats Strip — animated counters */}
      <section className="w-full bg-[#1b1c1d] py-0" ref={statsRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {[
            { value: counts.graduates,  suffix: "",  label: "Graduates (April 2025)" },
            { value: counts.colleges,   suffix: "",  label: "Academic Colleges" },
            { value: counts.women,      suffix: "+", label: "Women Graduates" },
            { value: counts.year,       suffix: "",  label: "Year Founded" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-12 px-8 group hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[var(--brand-blue)] transition-colors tracking-tight tabular-nums">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Admissions + Accreditation CTA Banner */}
      <section className="w-full bg-[var(--brand-blue)] py-10 px-6 lg:px-12 reveal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
              Ministerial Order No. 23/2025 · Officially Accredited October 2025
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              <span className="text-[var(--brand-yellow)]">January 2026 Intake</span> — Applications Now Open.
            </h2>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/student-application" className="px-8 py-3 bg-[var(--brand-yellow)] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#e0b93f] transition-all hover:scale-105 transform duration-200 shadow-md text-center">
              Apply Now
            </Link>
            <Link href="/admissions" className="px-8 py-3 border border-[var(--brand-yellow)]/70 text-white font-bold text-sm uppercase tracking-widest hover:border-white hover:bg-white hover:text-[#1b1c1d] transition-all text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Message from the Chairman */}
      <section className="w-full bg-white py-24 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="reveal reveal-x-left">
            <span className="text-[var(--brand-red)] font-bold text-[10px] tracking-widest uppercase mb-4 block">Message from the Chairman</span>
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
                In October 2025, Starford earned full university accreditation — a milestone achieved through the dedication of our faculty, staff, students, and partners. This is not an end, but a beginning. We are building master&apos;s-level programs, expanding our campus, and deepening our research impact across the region.
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
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">FOUNDER &amp; CHAIRMAN BOARD OF DIRECTORS</p>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <Link href="/about" className="text-[var(--brand-red)] font-bold text-xs uppercase tracking-widest hover:underline">
                The Starford Story →
              </Link>
            </div>
          </div>

          <div className="relative reveal reveal-x-right">
            <div className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto lg:ml-auto lg:mr-0 shadow-2xl hover-shimmer group">
              <Image
                src="/chairman.jpg"
                alt="Hon. Dium Cyer Cyer Deng — Founder & Chairman, Starford International University"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1c1d] via-[#1b1c1d]/80 to-transparent pt-16 pb-6 px-6">
                <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Hon. Dium Cyer Cyer Deng
                </p>
                <p className="text-[var(--brand-red)] font-bold text-xs uppercase tracking-widest mt-1">
                  FOUNDER &amp; CHAIRMAN BOARD OF DIRECTORS
                </p>
                <p className="text-gray-400 text-xs mt-1">Starford International University</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-[var(--brand-red)] opacity-30 hidden lg:block" />
          </div>

        </div>
      </section>

      {/* 8. In Focus — News Articles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 reveal">
        <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>In Focus</h2>
          <Link href="/news" className="font-bold text-[var(--brand-red)] text-xs tracking-widest uppercase hover:underline">All News →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main Feature */}
          <article className="md:col-span-7 group cursor-pointer">
            <Link href="/news">
              <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-200 hover-shimmer" style={{ transform: prefersReducedMotion ? "none" : `translateY(${Math.max(-14, Math.min(14, (scrollY - 1200) * 0.03))}px)` }}>
                <Image
                  src="/chancellor.jpg"
                  alt="Dr. Matur Ater Majing"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <span className="text-[var(--brand-red)] font-bold text-[10px] tracking-widest uppercase mb-3 block">Academic Achievement</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1b1c1d] mb-4 group-hover:text-[var(--brand-red)] transition-colors leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Celebrating the Academic Achievement of Dr. Matur Ater Majing
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                A proud moment for Starford International University as one of our own reaches new heights of academic distinction — a testament to SIU&apos;s commitment to nurturing excellence.
              </p>
            </Link>
          </article>

          {/* Secondary Features */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <article className="group cursor-pointer">
              <Link href="/news">
                <div className="relative overflow-hidden mb-4 aspect-video bg-gray-200 hover-shimmer" style={{ transform: prefersReducedMotion ? "none" : `translateY(${Math.max(-10, Math.min(10, (scrollY - 1400) * -0.02))}px)` }}>
                  <Image
                    src="/disability.jpg"
                    alt="Disability is not Inability"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <span className="text-[var(--brand-red)] font-bold text-[10px] tracking-widest uppercase mb-2 block">Community &amp; Inclusion</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[var(--brand-red)] transition-colors leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Demonstrating That Disability is Not Inability
                </h3>
              </Link>
            </article>

            <article className="group cursor-pointer pt-8 border-t border-gray-200">
              <Link href="/admissions">
                <span className="text-[var(--brand-red)] font-bold text-[10px] tracking-widest uppercase mb-2 block">Admissions</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[var(--brand-red)] transition-colors leading-snug mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Call for Admission — January 2026 Intake
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Starford International University invites applications for the January 2026 academic intake. Join a growing community of scholars in Juba, South Sudan.
                </p>
              </Link>
            </article>

            <article className="group cursor-pointer pt-8 border-t border-gray-200">
              <Link href="/news">
                <span className="text-[var(--brand-red)] font-bold text-[10px] tracking-widest uppercase mb-2 block">Success Story</span>
                <h3 className="text-xl font-bold text-[#1b1c1d] group-hover:text-[var(--brand-red)] transition-colors leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  SIU Moot Court Team Wins 5th South Sudan IHL Competition
                </h3>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 9. Five Colleges — staggered entrance */}
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
                label: "Law",
                desc: "National IHL Moot Court champions. Training South Sudan's next generation of legal professionals.",
              },
              {
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
                label: "Management Sciences",
                desc: "Business strategy, finance, marketing, and organizational management for complex markets.",
              },
            ].map((card, i) => (
              <Link
                key={i}
                href="/academics"
                className={`relative group overflow-hidden h-80 bg-gray-900 cursor-pointer ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">College of {card.label}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-[var(--brand-yellow)] transition-all duration-500 mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="relative group overflow-hidden h-80 bg-[var(--brand-blue)] cursor-pointer flex items-center justify-center text-center p-8 hover:bg-[#0048c8] transition-colors duration-300">
              <div className="relative z-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[var(--brand-yellow)] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Visit Our Campus</h3>
                <p className="text-white/75 text-sm max-w-xs mb-6 leading-relaxed">
                  Located in Juba, South Sudan. Experience our modern facilities and vibrant student life.
                </p>
                <Link href="/contact" className="px-6 py-2 border-2 border-[var(--brand-yellow)] text-[var(--brand-yellow)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-blue)] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Alumni Quote */}
      <section className="w-full bg-[#fcfcfc] border-y border-gray-200 py-24 px-6 lg:px-12 text-center reveal">
        <div className="max-w-4xl mx-auto">
          <svg className="w-10 h-10 text-[var(--brand-red)] mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.62-4.165 2.644-4.165 5.348h4.17V21h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.62-4.17 2.644-4.17 5.348h4.17V21H0z"/>
          </svg>
          <blockquote className="text-2xl md:text-4xl font-bold text-[#1b1c1d] leading-tight mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            &ldquo;Looking back at how Starford International University has been able to shape me with leadership skills is just incredible.&rdquo;
          </blockquote>
          <p className="text-[var(--brand-red)] font-bold text-sm uppercase tracking-widest">— Starford Alumni · Pal Jock Jack</p>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="w-full bg-[#111] pt-20 pb-10 border-t-4 border-[var(--brand-red)]">
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
                <span className="text-[var(--brand-red)] font-bold text-[9px] uppercase tracking-[0.15em] leading-tight mt-1">
                  Education for Sustainable Development
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Accredited by the South Sudan Ministry of Higher Education, Science &amp; Technology.
            </p>
            <p className="text-gray-500 text-xs italic mb-6">Ministerial Order No. 23/2025</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Starford-International-University-61551652921726/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <Link href="/" aria-label="Website" className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 1 .284-2.253" /></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Colleges</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-light">
              <li><Link href="/academics" className="hover:text-white transition-colors">Computer Science &amp; IT</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Economics &amp; Social Studies</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Humanities &amp; Social Science</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">College of Law</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Management Sciences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">The Starford Story</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership &amp; Management</Link></li>
              <li><Link href="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/student-application" className="hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get In Touch</h4>
            <address className="not-italic text-gray-400 text-sm font-light leading-relaxed mb-6 flex flex-col gap-3">
              <p className="text-gray-200 font-medium">Starford International University<br/>Juba, Republic of South Sudan</p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Admissions</span>
                <a href="tel:+211922281650" className="hover:text-white transition-colors">Mr. Uwkah Abraham</a><br/>
                <a href="tel:+211922281650" className="hover:text-white transition-colors text-xs">+211 922 281 650</a>
              </p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Finance</span>
                <a href="tel:+211980333824" className="hover:text-white transition-colors">Mr. Atem Arop Majok</a><br/>
                <a href="tel:+211980333824" className="hover:text-white transition-colors text-xs">+211 980 333 824</a>
              </p>
              <p>
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Research and innovation</span>
                <a href="tel:+211926061870" className="hover:text-white transition-colors">Dr. Ayor</a><br/>
                <a href="tel:+211926061870" className="hover:text-white transition-colors text-xs">+211 926 061 870</a>
              </p>
            </address>
            <Link href="/contact" className="inline-block px-6 py-2.5 bg-[var(--brand-red)] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors">
              Donate
            </Link>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Starford International University. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs uppercase tracking-widest">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
