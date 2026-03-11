import Image from "next/image";
import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
import { getAboutCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — Starford International University",
  description:
    "Learn about the founding story, mission, vision, values, and accreditation of Starford International University — South Sudan's most ICT-enabled university.",
};

const values = [
  {
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    label: "Academic Excellence",
    desc: "Pursuing rigorous scholarship and practical learning.",
  },
  {
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    label: "Integrity",
    desc: "Embodying honesty, fairness, and accountability in all we do.",
  },
  {
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
    label: "Service",
    desc: "Nurturing responsibility, leadership, and community engagement.",
  },
  {
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    label: "Innovation",
    desc: "Encouraging creativity, research, and forward-thinking solutions.",
  },
];

const offerings = [
  {
    title: "Academic Programs",
    desc: "A wide range of diploma and bachelor's (honours) programs — Business Administration, Accounting & Finance, Computer Science, Public Administration, Law, and more.",
  },
  {
    title: "Flexible Learning",
    desc: "On-campus and distance-learning modes, with access to online classes, recorded sessions, and live lectures — designed for South Sudan's diverse student body.",
  },
  {
    title: "ICT-Enabled Campus",
    desc: "As South Sudan's most ICT-enabled university, we integrate technology across every academic program to prepare students for the digital future.",
  },
  {
    title: "World-Class Faculty",
    desc: "Experienced professionals bringing real-world insights and academic rigour directly into the classroom.",
  },
];

export default async function AboutPage() {
  const aboutCopy = await getAboutCopy();
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/about.jpeg"
          alt="About Starford International University"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--brand-gold)]" />
            <span className="text-[var(--brand-gold)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">{aboutCopy.heroBadge}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight max-w-3xl">
            {aboutCopy.heroTitle}
          </h1>
          <p className="text-white/55 font-sans mt-5 max-w-lg text-base leading-relaxed">
            {aboutCopy.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Story + Mission/Vision */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 reveal reveal-x-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">{aboutCopy.storyKicker}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--foreground)] mb-8 leading-tight">
              {aboutCopy.storyTitle}
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-serif text-[17px]">
              <p>
                Starford International University College (SIUC) was founded in <strong className="text-[var(--foreground)]">2015</strong> by South Sudanese entrepreneur <strong className="text-[var(--foreground)]">Dium (Gium) Cyer Cyer Deng</strong>, with a bold vision: to build a university that not only educates, but empowers a generation of leaders to contribute to peace, development, and national self-reliance.
              </p>
              <p>
                The general welfare of the people is the pivotal concern of the University — addressing issues of poverty, illiteracy, and social ills, maintaining peace and tranquility, and creating harmonious relations amongst the people of various nationalities in the region.
              </p>
              <p>
                In <strong className="text-[var(--foreground)]">October 2025</strong>, SIUC officially earned full university accreditation as Starford International University, following Ministerial Order No. 23/2025. In our 5th Convocation (April 2025), SIU celebrated <strong className="text-[var(--foreground)]">636 graduates</strong> — including over <strong className="text-[var(--foreground)]">200 women</strong>.
              </p>
              <p>
                Our SIU Moot Court team recently made national history, winning the <strong className="text-[var(--foreground)]">5th South Sudan International Humanitarian Law (IHL) Moot Court Competition</strong> and representing the country at the All-Africa IHL Moot.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[var(--surface)] border border-[var(--border)] p-8 reveal reveal-x-right">
              <div className="w-8 h-px bg-[var(--brand-crimson)] mb-5" />
              <h4 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[var(--brand-crimson)] mb-3">{aboutCopy.mission.title}</h4>
              <p className="text-[var(--muted)] leading-relaxed font-serif text-[15px]">
                {aboutCopy.mission.body}
              </p>
            </div>
            <div className="bg-[#0f0e0d] p-8 reveal reveal-x-right">
              <div className="w-8 h-px bg-[var(--brand-crimson)] mb-5" />
              <h4 className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[var(--brand-crimson)] mb-3">{aboutCopy.vision.title}</h4>
              <p className="text-white/55 leading-relaxed font-serif text-[15px]">
                {aboutCopy.vision.body}
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] mb-24 reveal">
          {[
            { value: "636", label: "Graduates (April 2025)" },
            { value: "5", label: "Academic Colleges" },
            { value: "200+", label: "Women Graduates" },
            { value: "2015", label: "Year Founded" },
          ].map((s, i) => (
            <div key={i} className="bg-[var(--surface)] py-10 px-8 text-center">
              <p className="font-serif text-4xl font-light text-[var(--foreground)] mb-2">{s.value}</p>
              <p className="text-[var(--muted)] text-[10px] font-sans font-semibold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values + What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[var(--brand-crimson)]" />
              <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">Our Core Values</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)]">
              {values.map((value, i) => (
                <div key={i} className={`bg-[var(--surface)] p-6 hover:bg-white transition-colors group reveal stagger-${(i % 4) + 1}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 text-[var(--brand-crimson)] mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                  <h5 className="font-serif font-semibold text-[var(--foreground)] text-base mb-2 group-hover:text-[var(--brand-crimson)] transition-colors">{value.label}</h5>
                  <p className="text-[var(--muted)] text-sm font-sans leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[var(--brand-crimson)]" />
                <span className="text-[var(--brand-crimson)] text-[10px] font-sans font-semibold uppercase tracking-[0.3em]">What We Offer</span>
              </div>
              <ul className="space-y-5">
                {offerings.map((item, i) => (
                  <li key={i} className="flex gap-4 pb-5 border-b border-[var(--border)] last:border-b-0">
                    <span className="font-serif text-[var(--brand-crimson)] text-lg font-light mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-sans font-semibold text-[var(--foreground)] text-sm">{item.title}: </span>
                      <span className="text-[var(--muted)] text-sm font-sans leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accreditation Callout */}
            <div className="bg-[var(--brand-crimson)] p-8 text-white reveal">
              <div className="w-8 h-px bg-[var(--brand-gold)] mb-5" />
              <h4 className="font-serif font-light text-2xl mb-3">
                Officially Accredited
              </h4>
              <p className="text-white/70 font-sans text-sm leading-relaxed mb-5">
                Recognized by the <strong className="text-white">South Sudan Ministry of Higher Education, Science and Technology</strong> via Ministerial Order No. 23/2025 (October 2025).
              </p>
              <Link href="/admissions" className="inline-flex items-center gap-2 text-[var(--brand-gold)] font-sans font-semibold text-[10px] uppercase tracking-widest hover:underline">
                Learn More
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
