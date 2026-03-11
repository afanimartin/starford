"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import type { HomeCopy } from "@/lib/content";

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
    const handler = () => setScrollY(window.scrollY);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Hero slide rotator ── */
  const [slideIdx, setSlideIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [progressResetKey, setProgressResetKey] = useState(0);
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
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCounts({
              graduates: Math.round(ease * targets.graduates),
              colleges: Math.round(ease * targets.colleges),
              women: Math.round(ease * targets.women),
              year: Math.round(2000 + ease * (targets.year - 2000)),
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
    <div className="min-h-screen overflow-x-hidden font-sans" style={{ background: "var(--background)" }}>

      <NavBar />

      {/* ── HERO ── */}
      <header
        className="relative w-full h-screen min-h-[700px] flex items-end overflow-hidden"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") moveSlide(-1);
          if (e.key === "ArrowRight") moveSlide(1);
        }}
        onTouchStart={(e) => { touchStartX.current = e.changedTouches[0]?.clientX ?? null; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
          if (Math.abs(delta) > 40) moveSlide(delta > 0 ? -1 : 1);
          touchStartX.current = null;
        }}
      >
        {/* Slides */}
        {slides.map((s, i) => (
          <div key={i} className="absolute inset-0 z-0 transition-opacity duration-1000" style={{ opacity: i === slideIdx ? 1 : 0 }}>
            <Image
              src={s.image}
              alt={s.headline}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${i === slideIdx ? "scale-110" : "scale-100"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          </div>
        ))}

        {/* Decorative side label */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-white/20" />
          <span className="text-white/30 text-[9px] font-sans font-semibold uppercase tracking-[0.3em] rotate-180" style={{ writingMode: "vertical-rl" }}>
            Juba, South Sudan
          </span>
          <div className="w-px h-16 bg-white/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-16 pb-20 lg:pb-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-px bg-[var(--brand-gold)]" />
              <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">
                {homeCopy.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <div aria-live="polite" aria-atomic="true">
              <h1
                key={`headline-${slideIdx}`}
                className={`font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.05] mb-6 tracking-tight ${
                  prefersReducedMotion ? "" : direction === 1 ? "slide-in-right" : "slide-in-left"
                }`}
              >
                {slide.headline}
              </h1>
              <p
                key={`sub-${slideIdx}`}
                className={`text-white/65 text-base md:text-lg font-sans font-light max-w-xl leading-relaxed mb-10 ${
                  prefersReducedMotion ? "" : direction === 1 ? "slide-in-right" : "slide-in-left"
                }`}
              >
                {slide.sub}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--brand-crimson)] text-white text-[12px] font-sans font-semibold uppercase tracking-widest hover:bg-[#7d0c28] transition-all group"
              >
                {homeCopy.hero.primaryCtaLabel}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white text-[12px] font-sans font-semibold uppercase tracking-widest hover:bg-white/10 hover:border-white/60 transition-all"
              >
                {homeCopy.hero.secondaryCtaLabel}
              </Link>
            </div>

            {/* Slide controls */}
            <div className="flex items-center gap-4">
              <button onClick={() => moveSlide(-1)} aria-label="Previous" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all text-xs">
                ←
              </button>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > slideIdx ? 1 : -1); setSlideIdx(i); setProgressResetKey((v) => v + 1); }}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-px transition-all duration-500 ${i === slideIdx ? "bg-[var(--brand-gold)] w-10" : "bg-white/30 w-5 hover:bg-white/60"}`}
                />
              ))}
              <button onClick={() => moveSlide(1)} aria-label="Next" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all text-xs">
                →
              </button>

              {/* Progress bar */}
              {!prefersReducedMotion && (
                <div className="flex-1 max-w-xs h-px bg-white/10 overflow-hidden ml-2">
                  <div key={`${progressResetKey}-${slideIdx}`} className="h-full bg-[var(--brand-gold)]/60 slide-progress" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
          <span className="text-white/30 text-[9px] font-sans uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 animate-bounce" />
          </div>
        </div>
      </header>

      {/* ── STATS STRIP ── */}
      <section className="w-full bg-[#0f0e0d]" ref={statsRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
          {[
            { value: counts.graduates, suffix: "", label: "Graduates · April 2025" },
            { value: counts.colleges, suffix: "", label: "Academic Colleges" },
            { value: counts.women, suffix: "+", label: "Women Graduates" },
            { value: counts.year, suffix: "", label: "Year Founded" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-14 px-8 group hover:bg-white/3 transition-colors">
              <span className="font-serif text-5xl md:text-6xl font-light text-white mb-2 tabular-nums group-hover:text-[var(--brand-gold)] transition-colors">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-[10px] font-sans font-semibold text-white/35 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ADMISSIONS BANNER ── */}
      <section className="w-full bg-[var(--brand-crimson)] py-10 px-6 lg:px-16 reveal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/60 text-[10px] font-sans font-semibold uppercase tracking-widest mb-1">
              Ministerial Order No. 23/2025 · Officially Accredited October 2025
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-white tracking-tight">
              <span className="text-[var(--brand-gold)]">January 2026 Intake</span> — Applications Now Open
            </h2>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/student-application" className="px-7 py-3 bg-white text-[var(--brand-crimson)] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[var(--brand-gold)] hover:text-white transition-all">
              Apply Now
            </Link>
            <Link href="/admissions" className="px-7 py-3 border border-white/40 text-white text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN MESSAGE ── */}
      <section className="w-full bg-[var(--surface)] py-28 px-6 lg:px-16 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="reveal reveal-x-left order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Message from the Chairman</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-10">
              Building the Intellectual Foundation for a Prosperous South Sudan
            </h2>

            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-serif text-[17px]">
              <p>
                When I founded Starford International University in 2015, I had a bold vision: to build an institution that not only educates, but empowers a generation of leaders who will contribute to peace, development, and national self-reliance.
              </p>
              <p>
                The general welfare of our people has always been the pivotal concern of this University. We are committed to addressing the issues of poverty, illiteracy, and social challenges — creating harmonious relations and inculcating a sense of ethics and values.
              </p>
              <p>
                In October 2025, Starford earned full university accreditation — a milestone achieved through the dedication of our faculty, staff, students, and partners. This is not an end, but a beginning.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border)] flex items-center gap-6">
              <div>
                <p className="font-serif font-semibold text-[var(--foreground)] text-base">
                  Hon. Dium (Gium) Cyer Cyer Deng
                </p>
                <p className="text-[var(--muted)] text-[11px] font-sans uppercase tracking-widest mt-1">Founder & Chairman of the Board</p>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <Link href="/about" className="text-[var(--brand-crimson)] font-sans font-semibold text-[11px] uppercase tracking-widest hover:underline flex items-center gap-1">
                The Starford Story
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </Link>
            </div>
          </div>

          <div className="relative reveal reveal-x-right order-1 lg:order-2">
            <div className="relative overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:ml-auto lg:mr-0 group">
              <Image
                src="/chairman.jpeg"
                alt="Hon. Dium Cyer Cyer Deng — Founder & Chairman, Starford International University"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/60 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="font-serif font-semibold text-white text-xl mb-1">
                  Hon. Dium Cyer Cyer Deng
                </p>
                <p className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-widest">
                  Founder & Chairman
                </p>
              </div>
            </div>
            {/* Gold corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[var(--brand-gold)] opacity-40 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[var(--brand-crimson)] opacity-20 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── NEWS / IN FOCUS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-28 reveal">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Latest</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--foreground)]">In Focus</h2>
          </div>
          <Link href="/news" className="font-sans font-semibold text-[var(--brand-crimson)] text-[11px] tracking-widest uppercase hover:underline flex items-center gap-1">
            All News
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Main Feature */}
          <article className="md:col-span-7 group cursor-pointer">
            <Link href="/news">
              <div
                className="relative overflow-hidden mb-5 bg-[var(--border)]"
                style={{
                  aspectRatio: "4/3",
                  transform: prefersReducedMotion ? "none" : `translateY(${Math.max(-12, Math.min(12, (scrollY - 1200) * 0.025))}px)`,
                }}
              >
                <Image
                  src="/chancellor.jpg"
                  alt="Dr. Matur Ater Majing"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-widest mb-2 block">Academic Achievement</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[var(--foreground)] mb-3 group-hover:text-[var(--brand-crimson)] transition-colors leading-tight">
                Celebrating the Academic Achievement of Dr. Matur Ater Majing
              </h3>
              <p className="text-[var(--muted)] font-serif text-base leading-relaxed line-clamp-3">
                A proud moment for Starford International University as one of our own reaches new heights of academic distinction — a testament to SIU&apos;s commitment to nurturing excellence.
              </p>
            </Link>
          </article>

          {/* Secondary */}
          <div className="md:col-span-5 flex flex-col gap-0 border-l border-[var(--border)] md:pl-10">
            <article className="group cursor-pointer pb-8 border-b border-[var(--border)]">
              <Link href="/news">
                <div className="relative overflow-hidden mb-4 bg-[var(--border)]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src="/disability.jpg"
                    alt="Disability is not Inability"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-widest mb-2 block">Community & Inclusion</span>
                <h3 className="font-serif text-lg font-light text-[var(--foreground)] group-hover:text-[var(--brand-crimson)] transition-colors leading-snug">
                  Demonstrating That Disability is Not Inability
                </h3>
              </Link>
            </article>

            <article className="group cursor-pointer py-8 border-b border-[var(--border)]">
              <Link href="/admissions">
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-widest mb-2 block">Admissions</span>
                <h3 className="font-serif text-lg font-light text-[var(--foreground)] group-hover:text-[var(--brand-crimson)] transition-colors leading-snug mb-3">
                  Call for Admission — January 2026 Intake
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed font-sans">
                  Starford International University invites applications for the January 2026 academic intake. Join a growing community of scholars in Juba, South Sudan.
                </p>
              </Link>
            </article>

            <article className="group cursor-pointer pt-8">
              <Link href="/news">
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-widest mb-2 block">Success Story</span>
                <h3 className="font-serif text-lg font-light text-[var(--foreground)] group-hover:text-[var(--brand-crimson)] transition-colors leading-snug">
                  SIU Moot Court Team Wins 5th South Sudan IHL Competition
                </h3>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── FIVE COLLEGES ── */}
      <section className="w-full bg-[#0f0e0d] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[var(--brand-gold)]" />
                <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Academic Divisions</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Our Five Colleges</h2>
            </div>
            <Link href="/academics" className="font-sans font-semibold text-white/50 hover:text-white text-[11px] uppercase tracking-widest transition-colors flex items-center gap-1">
              View All Programmes
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              {
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
                label: "Computer Science & IT",
                desc: "Software development, data science, cybersecurity, and emerging technologies.",
                num: "01",
              },
              {
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
                label: "Economics & Social Studies",
                desc: "Understanding forces that shape economies and societies through rigorous analysis.",
                num: "02",
              },
              {
                img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
                label: "Humanities & Social Science",
                desc: "Culture, history, communication, and human behavior through critical inquiry.",
                num: "03",
              },
              {
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
                label: "College of Law",
                desc: "National IHL Moot Court champions. Training South Sudan's legal professionals.",
                num: "04",
              },
              {
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
                label: "Management Sciences",
                desc: "Business strategy, finance, marketing, and organizational management.",
                num: "05",
              },
            ].map((card, i) => (
              <Link
                key={i}
                href="/academics"
                className="relative group overflow-hidden bg-[#0f0e0d] h-72 cursor-pointer"
              >
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-25 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-6 flex flex-col justify-between">
                  <span className="font-serif text-5xl font-light text-white/10 group-hover:text-[var(--brand-gold)]/30 transition-colors">
                    {card.num}
                  </span>
                  <div>
                    <div className="w-0 group-hover:w-8 h-px bg-[var(--brand-gold)] transition-all duration-500 mb-3" />
                    <h3 className="font-serif text-xl font-light text-white mb-2 leading-tight">College of {card.label}</h3>
                    <p className="text-white/40 text-sm font-sans leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="relative group overflow-hidden h-72 bg-[var(--brand-crimson)] cursor-pointer flex items-center justify-center text-center p-8 hover:bg-[#7d0c28] transition-colors duration-300">
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-12 h-12 border border-[var(--brand-gold)]/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-[var(--brand-gold)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-white">Visit Our Campus</h3>
                <p className="text-white/60 text-sm font-sans max-w-xs leading-relaxed">
                  Located in Juba, South Sudan. Experience our modern facilities.
                </p>
                <Link href="/contact" className="px-5 py-2 border border-[var(--brand-gold)]/50 text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-widest hover:bg-[var(--brand-gold)] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALUMNI QUOTE ── */}
      <section className="w-full bg-[var(--background)] border-y border-[var(--border)] py-28 px-6 lg:px-16 text-center reveal">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-[var(--brand-gold)]" />
          </div>
          <blockquote className="font-serif text-2xl md:text-4xl font-light text-[var(--foreground)] leading-tight mb-8">
            &ldquo;Looking back at how Starford International University has been able to shape me with leadership skills is just incredible.&rdquo;
          </blockquote>
          <div className="flex justify-center items-center gap-3">
            <div className="w-6 h-px bg-[var(--brand-crimson)]" />
            <p className="text-[var(--brand-crimson)] font-sans font-semibold text-[11px] uppercase tracking-widest">
              Pal Jock Jack — Starford Alumni
            </p>
            <div className="w-6 h-px bg-[var(--brand-crimson)]" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#0f0e0d] border-t-2 border-[var(--brand-crimson)] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white/5 p-0.5">
                <Image src="/logo.jpeg" alt="SIU Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-white font-semibold text-lg tracking-wide">STARFORD</span>
                <span className="text-[var(--brand-crimson)] text-[8px] font-sans font-semibold uppercase tracking-[0.3em] mt-0.5">
                  Education for Sustainable Development
                </span>
              </div>
            </div>
            <p className="text-white/30 text-sm font-sans leading-relaxed mb-1">
              Accredited by the South Sudan Ministry of Higher Education, Science &amp; Technology.
            </p>
            <p className="text-white/20 text-[11px] font-sans italic mb-6">Ministerial Order No. 23/2025</p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/p/Starford-International-University-61551652921726/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/explore/locations/1801633150108038/starford-international-university/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold uppercase tracking-widest text-[10px] mb-6">Colleges</h4>
            <ul className="flex flex-col gap-3 text-white/35 text-sm font-sans">
              <li><Link href="/academics" className="hover:text-white transition-colors">Computer Science &amp; IT</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Economics &amp; Social Studies</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Humanities &amp; Social Science</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">College of Law</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Management Sciences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold uppercase tracking-widest text-[10px] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/35 text-sm font-sans">
              <li><Link href="/about" className="hover:text-white transition-colors">The Starford Story</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership &amp; Management</Link></li>
              <li><Link href="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News &amp; Updates</Link></li>
              <li><Link href="/student-application" className="hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold uppercase tracking-widest text-[10px] mb-6">Get In Touch</h4>
            <address className="not-italic text-white/35 text-sm font-sans leading-relaxed mb-6 flex flex-col gap-4">
              <p className="text-white/60 font-sans">Juba, Republic of South Sudan</p>
              <p>
                <span className="text-white/20 text-[10px] uppercase tracking-wider block mb-1">Admissions</span>
                <a href="tel:+211980333824" className="hover:text-white transition-colors">Mr. Atem Arop Majok</a><br/>
                <a href="tel:+211980333824" className="hover:text-white transition-colors text-xs">+211 980 333 824</a>
              </p>
              <p>
                <span className="text-white/20 text-[10px] uppercase tracking-wider block mb-1">Administration</span>
                <a href="tel:+211922281650" className="hover:text-white transition-colors">Mr. Uwkah Abraham</a><br/>
                <a href="tel:+211922281650" className="hover:text-white transition-colors text-xs">+211 922 281 650</a>
              </p>
            </address>
            <Link href="/student-application" className="inline-block px-5 py-2.5 bg-[var(--brand-crimson)] text-white font-sans font-semibold text-[10px] uppercase tracking-widest hover:bg-[#7d0c28] transition-colors">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Starford International University. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/20 text-xs font-sans uppercase tracking-widest">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
