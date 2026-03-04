import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <NavBar />

      {/* Page Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4">Founded 2015 · Accredited 2025</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          The Starford Story
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Born from a bold vision to transform higher education in South Sudan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        {/* Story + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 reveal reveal-x-left">
            <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b1c1d] mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Born from a Vision to Transform South Sudan
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              <p>
                Starford International University College (SIUC) was founded in <strong className="text-[#1b1c1d]">2015</strong> by South Sudanese entrepreneur <strong className="text-[#1b1c1d]">Dium (Gium) Cyer Cyer Deng</strong>, with a bold vision: to build a university that not only educates, but empowers a generation of leaders to contribute to peace, development, and national self-reliance.
              </p>
              <p>
                The general welfare of the people is the pivotal concern of the University — addressing issues of poverty, illiteracy, and social ills, maintaining peace and tranquility, and creating harmonious relations amongst the people of various nationalities in the region.
              </p>
              <p>
                In <strong className="text-[#1b1c1d]">October 2025</strong>, SIUC officially earned full university accreditation as Starford International University, following Ministerial Order No. 23/2025 from the South Sudanese Minister of Higher Education. In our 5th Convocation (April 2025), SIU celebrated <strong className="text-[#1b1c1d]">636 graduates</strong> — including over <strong className="text-[#1b1c1d]">200 women</strong> — drawn from various disciplines.
              </p>
              <p>
                Our SIU Moot Court team recently made national history, winning the <strong className="text-[#1b1c1d]">5th South Sudan International Humanitarian Law (IHL) Moot Court Competition</strong> and representing the country at the All-Africa IHL Moot.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white border border-gray-200 p-8 shadow-sm reveal reveal-x-right">
              <div className="w-10 h-1 bg-[#a41034] mb-5" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a41034] mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                To deliver high-quality education and training that responds to local realities and global aspirations, equipping students with the knowledge, skills, and character to innovate, lead, and serve.
              </p>
            </div>
            <div className="bg-[#1b1c1d] p-8 shadow-sm reveal reveal-x-right">
              <div className="w-10 h-1 bg-[#a41034] mb-5" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a41034] mb-3">Our Vision</h4>
              <p className="text-gray-300 leading-relaxed text-sm" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                To be recognized across South Sudan and beyond as a leading institution of academic excellence, social impact, and sustainable development — pioneering ICT-enabled education for the region.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values + What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          <div className="reveal">
            <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-6 block">Our Core Values</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div key={i} className={`bg-white border border-gray-200 p-6 hover:border-[#a41034] hover:shadow-md transition-all group reveal stagger-${(i % 4) + 1}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#a41034] mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                  <h5 className="font-bold text-[#1b1c1d] text-sm mb-2 group-hover:text-[#a41034] transition-colors">{value.label}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="reveal">
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-6 block">What We Offer</span>
              <ul className="space-y-4">
                {offerings.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a41034] mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#1b1c1d] text-sm">{item.title}: </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accreditation Callout */}
            <div className="bg-[#a41034] p-8 text-white reveal">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 flex-shrink-0 mt-1 opacity-80">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    Officially Accredited
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Recognized by the <strong className="text-white">South Sudan Ministry of Higher Education, Science and Technology</strong> via Ministerial Order No. 23/2025 (October 2025).
                  </p>
                  <Link href="/about" className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/40 pb-0.5 hover:border-white transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</Link>
      </div>

    </div>
  );
}
