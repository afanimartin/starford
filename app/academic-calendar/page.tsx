import NavBar from "../components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Calendar 2025 — Starford International University",
  description:
    "View the official SIU Academic Calendar 2025 — semester dates, intake windows, examinations, holidays, and key university events.",
};

const semester1 = [
  { date: "13th January", event: "January 2025 Intake — Registration Opens" },
  { date: "20th January", event: "Orientation Week for New Students" },
  { date: "27th January", event: "Semester One Lectures Begin" },
  { date: "14th February", event: "Late Registration Deadline" },
  { date: "17th–21st March", event: "Mid-Semester Examinations (Sem 1)" },
  { date: "18th–25th April", event: "Easter Break (University Closed)" },
  { date: "12th–23rd May", event: "End-of-Semester One Examinations" },
  { date: "30th May", event: "Semester One Results Release" },
  { date: "2nd–13th June", event: "Inter-Semester Break" },
];

const semester2 = [
  { date: "16th June", event: "Semester Two — Registration Opens" },
  { date: "23rd June", event: "Semester Two Lectures Begin" },
  { date: "9th July", event: "Late Registration Deadline / South Sudan Independence Day Observance" },
  { date: "11th–15th August", event: "Mid-Semester Examinations (Sem 2)" },
  { date: "6th–17th October", event: "End-of-Semester Two Examinations" },
  { date: "24th October", event: "Semester Two Results Release" },
  { date: "27th October – 7th November", event: "Supplementary Examination Period" },
];

const semester3 = [
  { date: "13th October", event: "October 2025 Intake — Registration Opens" },
  { date: "20th October", event: "Orientation for New Students" },
  { date: "27th October", event: "Semester Three Lectures Begin" },
  { date: "10th November", event: "Late Registration Deadline" },
  { date: "1st–5th December", event: "Mid-Semester Examinations (Sem 3)" },
  { date: "22nd December – 2nd January", event: "Christmas & New Year Break" },
  { date: "5th January 2026", event: "Semester Three Resumes" },
  { date: "12th–23rd January 2026", event: "End-of-Semester Three Examinations" },
];

const keyDates = [
  { label: "January 2026 Intake", value: "Now Open", highlight: true },
  { label: "Application Deadline", value: "Rolling Admissions", highlight: false },
  { label: "5th Convocation Ceremony", value: "April 2025", highlight: false },
  { label: "Accreditation Achieved", value: "October 2025", highlight: true },
  { label: "Next Graduation", value: "2026 (TBA)", highlight: false },
];

function CalendarTable({ rows }: { rows: { date: string; event: string }[] }) {
  return (
    <div className="border border-gray-200 overflow-hidden">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-[180px_1fr] gap-4 px-6 py-4 border-b last:border-b-0 ${
            i % 2 === 0 ? "bg-white" : "bg-gray-50"
          } hover:bg-red-50 transition-colors group`}
        >
          <span className="text-[#a41034] font-bold text-sm tabular-nums group-hover:text-[#a41034]">
            {row.date}
          </span>
          <span className="text-[#1b1c1d] text-sm leading-relaxed" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {row.event}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AcademicCalendarPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#1b1c1d] py-20 px-6 lg:px-12 text-center">
        <span className="inline-block py-1.5 px-5 bg-[var(--brand-red)] text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
          Academic Year 2025
        </span>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Academic Calendar
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Official SIU term dates, intake windows, examinations, and key university events for 2025.
        </p>
      </div>

      {/* Key Dates strip */}
      <div className="w-full bg-[#a41034]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-5 divide-x divide-white/20">
          {keyDates.map((k, i) => (
            <div key={i} className="py-5 px-4 text-center">
              <p className={`font-bold text-sm ${k.highlight ? "text-white" : "text-white/80"}`}>{k.value}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold mt-0.5">{k.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-20">

        {/* Semester 1 */}
        <div className="reveal reveal-x-left">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-8">
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase block mb-1">January Intake</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Semester One — Jan to May 2025
              </h2>
            </div>
            <span className="hidden sm:block text-xs text-gray-400 uppercase tracking-widest font-bold">Q1 / Q2</span>
          </div>
          <CalendarTable rows={semester1} />
        </div>

        {/* Semester 2 */}
        <div className="reveal reveal-x-right">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-8">
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase block mb-1">Mid-Year Semester</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Semester Two — June to Oct 2025
              </h2>
            </div>
            <span className="hidden sm:block text-xs text-gray-400 uppercase tracking-widest font-bold">Q3 / Q4</span>
          </div>
          <CalendarTable rows={semester2} />
        </div>

        {/* Semester 3 */}
        <div className="reveal reveal-x-left">
          <div className="flex justify-between items-end border-b-2 border-[#1b1c1d] pb-4 mb-8">
            <div>
              <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase block mb-1">October Intake</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1b1c1d]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Semester Three — Oct 2025 to Jan 2026
              </h2>
            </div>
            <span className="hidden sm:block text-xs text-gray-400 uppercase tracking-widest font-bold">Q4 / Q1&apos;26</span>
          </div>
          <CalendarTable rows={semester3} />
        </div>

        {/* Apply CTA */}
        <div className="bg-[#1b1c1d] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 reveal">
          <div>
            <span className="text-[#a41034] font-bold text-[10px] tracking-widest uppercase block mb-3">January 2026 Intake — Now Open</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Ready to join SIU?
            </h3>
            <p className="text-gray-400 mt-2 text-sm max-w-lg">
              Applications for the January 2026 intake are now open. Spaces are limited — apply early to secure your place.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/student-application" className="px-8 py-4 bg-[#a41034] text-white font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-colors text-center">
              Apply Now
            </Link>
            <Link href="/admissions" className="px-8 py-4 bg-[var(--brand-blue)] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0048c8] transition-colors text-center">
              Admissions Info
            </Link>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
