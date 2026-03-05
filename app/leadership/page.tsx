import Image from "next/image";
import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership & Management — Starford International University",
  description:
    "Meet the visionary leadership team and deanship board of Starford International University — guiding South Sudan's most ICT-enabled university.",
};

const leadership = [
  {
    name: "Hon. Dium Cyer Cyer Deng",
    title: "Founder & Chairman of the Board",
    initial: "D",
  },
  {
    name: "Dr. Kenneth Wyne Mutuma",
    title: "Chancellor of SIU",
    initial: "K",
  },
  {
    name: "Dr. James Osuru Mark",
    title: "Vice Chancellor of SIU",
    initial: "J",
  },
  {
    name: "Hon. Yel Luol Koor",
    title: "Deputy VC for Administration and Finance",
    initial: "Y",
  },
  {
    name: "Dr. Ayor Maluk",
    title: "DVC for Research, Innovation & Publication",
    initial: "A",
  },
  {
    name: "Matur Ater Majing",
    title: "Deputy VC for Academic Affairs",
    initial: "M",
  },
  {
    name: "Akuoc Ajang Nyanhom",
    title: "Director for Investment",
    initial: "A",
  },
  {
    name: "Uwkah Abraham",
    title: "Director of Academic Affairs",
    initial: "U",
  },
  {
    name: "Atem Arop Majok",
    title: "Director of Finance",
    initial: "A",
  },
  {
    name: "Ajith Deng Mawien",
    title: "Director for HRM",
    initial: "A",
  },
];

const deanship = [
  { name: "Mr. Chaldo Moses Sebit",     role: "Dean",        college: "College of Management Science" },
  { name: "Mr. Ayuen Kelei Alith Akuei",role: "Deputy Dean", college: "College of Management Science" },
  { name: "Mr. Marko Makou Tong",       role: "Dean",        college: "College of Economic and Social Studies" },
  { name: "Mr. Bona Macuei Akol Wieu",  role: "Deputy Dean", college: "College of Economic & Social Studies" },
  { name: "Mr. Musa Hassan Mussolini",  role: "Dean",        college: "College of Humanities & Social Science" },
  { name: "Mr. James Adut Magak",       role: "Deputy Dean", college: "College of Humanities & Social Science" },
  { name: "Mr. Moses Marial Buon",      role: "Dean",        college: "College of Computer Science and Information Technology" },
  { name: "Mr. John Asai Angelo",       role: "Deputy Dean", college: "College of Computer Science and Information Technology" },
  { name: "Mr. Adelino Iyya Paterno",   role: "Dean",        college: "Students' Affairs" },
  { name: "Mr. Lual Bol Akol",          role: "Deputy Dean", college: "Students' Affairs & Master of Games & Sports" },
  { name: "Mr. Samuel Kerlual Geuehlahm Yuok", role: "Dean", college: "College of Law" },
  { name: "Mr. Daniel Duom Kelei Ayak", role: "Deputy Dean", college: "College of Law" },
];

export default function LeadershipPage() {
  return (
    <div
      className="min-h-screen bg-[#fcfcfc]"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <NavBar />

      {/* Page Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
          Starford International University
        </span>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Leadership & Management
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          The visionary team guiding South Sudan&apos;s most ICT-enabled university.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        {/* University Leadership */}
        <div className="mb-20 reveal">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1b1c1d]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              University Leadership
            </h2>
          </div>

          {/* Founder — featured large */}
          <div className="bg-[#1b1c1d] p-10 mb-10 flex flex-col md:flex-row items-center md:items-start gap-8 reveal reveal-x-right">
            <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
              <Image
                src="/chairman1.jpeg"
                alt="Hon. Dium Cyer Cyer Deng"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase block mb-2">
                Founder & Chairman of the Board
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Hon. Dium (Gium) Cyer Cyer Deng
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                The visionary South Sudanese entrepreneur who founded Starford International University in 2015, 
                with the bold mission to build an institution that not only educates but empowers a generation of 
                leaders to contribute to peace, development, and national self-reliance. Under his leadership, SIU 
                earned full university accreditation in October 2025.
              </p>
            </div>
          </div>

          {/* Other leaders — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.slice(1).map((person, i) => (
              <div
                key={i}
                className={`bg-white border border-gray-200 p-6 hover:border-[#a41034] hover:shadow-md transition-all group flex items-start gap-4 reveal stagger-${(i % 6) + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1b1c1d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a41034] transition-colors">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {person.initial}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-bold text-[#1b1c1d] text-base leading-tight mb-1 group-hover:text-[#a41034] transition-colors"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {person.name}
                  </h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deanship Board */}
        <div className="reveal">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1b1c1d]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Deanship Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
            {deanship.map((dean, i) => (
              <div
                key={i}
                className={`border-b border-r border-gray-200 p-6 hover:bg-gray-50 transition-colors group reveal stagger-${(i % 6) + 1}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#a41034] font-bold text-2xl tabular-nums w-8 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      className="font-bold text-[#1b1c1d] text-base leading-tight mb-1 group-hover:text-[#a41034] transition-colors"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {dean.name}
                    </h4>
                    <p className="text-[#a41034] font-bold text-[10px] uppercase tracking-widest mb-0.5">
                      {dean.role}
                    </p>
                    <p className="text-gray-500 text-xs">{dean.college}</p>
                  </div>
                </div>
              </div>
            ))}
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
