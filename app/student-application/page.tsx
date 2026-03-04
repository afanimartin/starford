"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Link from "next/link";

const COLLEGES = [
  "College of Computer Science & Information Technology",
  "College of Economics & Social Studies",
  "College of Humanities & Social Science",
  "College of Law",
  "College of Management Sciences",
];

const PROGRAMMES: Record<string, string[]> = {
  "College of Computer Science & Information Technology": [
    "Bachelor of Science in Computer Science",
    "Bachelor of Science in Information Technology",
    "Diploma in Computer Science",
    "Diploma in Information Technology",
  ],
  "College of Economics & Social Studies": [
    "Bachelor of Arts in Economics",
    "Bachelor of Arts in Development Studies",
    "Diploma in Economics",
  ],
  "College of Humanities & Social Science": [
    "Bachelor of Arts in Sociology",
    "Bachelor of Arts in English & Literature",
    "Bachelor of Arts in Political Science",
    "Diploma in Sociology",
  ],
  "College of Law": [
    "Bachelor of Laws (LLB)",
    "Diploma in Law",
  ],
  "College of Management Sciences": [
    "Bachelor of Business Administration",
    "Bachelor of Commerce",
    "Diploma in Business Administration",
    "Diploma in Accounting",
  ],
};

type FormData = {
  // Personal
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  gender: string;
  nationality: string;
  maritalStatus: string;
  religion: string;
  county: string;
  // Contact
  phone: string;
  email: string;
  address: string;
  // Previous Education
  schoolName: string;
  gradYear: string;
  certificate: string;
  prevUniversity: string;
  // Programme
  college: string;
  programme: string;
  modeOfStudy: string;
  intake: string;
  // Documents
  docs: {
    certificate: boolean;
    identity: boolean;
    passport: boolean;
    photos: boolean;
    fee: boolean;
  };
  // Declaration
  declaration: boolean;
};

type UploadData = {
  idFront: File | null;
  idBack: File | null;
  certificateScan: File | null;
  passportPhoto: File | null;
  feeReceipt: File | null;
};

const INITIAL: FormData = {
  firstName: "", middleName: "", lastName: "", dob: "", gender: "",
  nationality: "", maritalStatus: "", religion: "", county: "",
  phone: "", email: "", address: "",
  schoolName: "", gradYear: "", certificate: "", prevUniversity: "",
  college: "", programme: "", modeOfStudy: "", intake: "January 2026",
  docs: { certificate: false, identity: false, passport: false, photos: false, fee: false },
  declaration: false,
};

const INITIAL_UPLOADS: UploadData = {
  idFront: null,
  idBack: null,
  certificateScan: null,
  passportPhoto: null,
  feeReceipt: null,
};

export default function StudentApplicationPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [uploads, setUploads] = useState<UploadData>(INITIAL_UPLOADS);
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const [step, setStep] = useState(1);
  const [stepErrors, setStepErrors] = useState<string[]>([]);
  const TOTAL_STEPS = 5;

  const set = (field: keyof Omit<FormData, "docs" | "declaration">, value: string) => {
    setStepErrors([]);
    setForm((f) => ({ ...f, [field]: value }));
  };

  const setDoc = (key: keyof FormData["docs"], value: boolean) => {
    setStepErrors([]);
    setForm((f) => ({ ...f, docs: { ...f.docs, [key]: value } }));
  };

  const setUpload = (key: keyof UploadData, file: File | null) => {
    setStepErrors([]);
    setUploads((u) => ({ ...u, [key]: file }));
  };

  const isBlank = (value: string) => value.trim().length === 0;

  const validateStep = (stepNumber: number): string[] => {
    const errors: string[] = [];

    if (stepNumber === 1) {
      if (isBlank(form.firstName)) errors.push("First Name is required.");
      if (isBlank(form.lastName)) errors.push("Last Name is required.");
      if (isBlank(form.dob)) errors.push("Date of Birth is required.");
      if (isBlank(form.gender)) errors.push("Gender is required.");
      if (isBlank(form.nationality)) errors.push("Nationality is required.");
      if (isBlank(form.maritalStatus)) errors.push("Marital Status is required.");
      if (isBlank(form.county)) errors.push("Home County / State is required.");
    }

    if (stepNumber === 2) {
      if (isBlank(form.phone)) errors.push("Phone Number is required.");
      if (isBlank(form.address)) errors.push("Residential Address is required.");
    }

    if (stepNumber === 3) {
      if (isBlank(form.schoolName)) errors.push("Name of Secondary School is required.");
      if (isBlank(form.gradYear)) errors.push("Year of Graduation is required.");
      if (isBlank(form.certificate)) errors.push("Certificate Obtained is required.");
    }

    if (stepNumber === 4) {
      if (isBlank(form.intake)) errors.push("Intake is required.");
      if (isBlank(form.college)) errors.push("College / Faculty is required.");
      if (isBlank(form.programme)) errors.push("Programme / Course is required.");
      if (isBlank(form.modeOfStudy)) errors.push("Mode of Study is required.");
    }

    if (stepNumber === 5) {
      const docsComplete = Object.values(form.docs).every(Boolean);
      if (!docsComplete) errors.push("Please confirm all required documents are ready.");
      if (!uploads.idFront) errors.push("National ID / Passport (Front) upload is required.");
      if (!uploads.idBack) errors.push("National ID / Passport (Back) upload is required.");
      if (!uploads.certificateScan) errors.push("Secondary Certificate upload is required.");
      if (!uploads.passportPhoto) errors.push("Passport photo upload is required.");
      if (!uploads.feeReceipt) errors.push("Application fee receipt upload is required.");
      const totalUploadSize = Object.values(uploads).reduce((sum, file) => sum + (file?.size ?? 0), 0);
      if (totalUploadSize > 7.5 * 1024 * 1024) {
        errors.push("Total upload size must be 7.5MB or less.");
      }
      if (!form.declaration) errors.push("You must accept the declaration before submitting.");
    }

    return errors;
  };

  const goToStep = (targetStep: number) => {
    if (targetStep <= step) {
      setStep(targetStep);
      setStepErrors([]);
      return;
    }

    for (let s = 1; s < targetStep; s += 1) {
      const errors = validateStep(s);
      if (errors.length > 0) {
        setStep(s);
        setStepErrors(errors);
        return;
      }
    }

    setStep(targetStep);
    setStepErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (let s = 1; s <= TOTAL_STEPS; s += 1) {
      const errors = validateStep(s);
      if (errors.length > 0) {
        setStep(s);
        setStepErrors(errors);
        return;
      }
    }

    setStepErrors([]);
    setSubmitState("submitting");

    const payload = new FormData();
    payload.set("form-name", "student-application");
    payload.set("first_name", form.firstName);
    payload.set("middle_name", form.middleName);
    payload.set("last_name", form.lastName);
    payload.set("date_of_birth", form.dob);
    payload.set("gender", form.gender);
    payload.set("nationality", form.nationality);
    payload.set("marital_status", form.maritalStatus);
    payload.set("religion", form.religion);
    payload.set("county", form.county);
    payload.set("phone", form.phone);
    payload.set("email", form.email);
    payload.set("address", form.address);
    payload.set("school_name", form.schoolName);
    payload.set("graduation_year", form.gradYear);
    payload.set("certificate", form.certificate);
    payload.set("previous_university", form.prevUniversity);
    payload.set("intake", form.intake);
    payload.set("college", form.college);
    payload.set("programme", form.programme);
    payload.set("mode_of_study", form.modeOfStudy);
    payload.set("doc_certificate", form.docs.certificate ? "yes" : "no");
    payload.set("doc_identity", form.docs.identity ? "yes" : "no");
    payload.set("doc_passport", form.docs.passport ? "yes" : "no");
    payload.set("doc_photos", form.docs.photos ? "yes" : "no");
    payload.set("doc_fee", form.docs.fee ? "yes" : "no");
    payload.set("declaration", form.declaration ? "yes" : "no");
    if (uploads.idFront) payload.set("id_front_image", uploads.idFront);
    if (uploads.idBack) payload.set("id_back_image", uploads.idBack);
    if (uploads.certificateScan) payload.set("certificate_scan", uploads.certificateScan);
    if (uploads.passportPhoto) payload.set("passport_photo", uploads.passportPhoto);
    if (uploads.feeReceipt) payload.set("fee_receipt", uploads.feeReceipt);

    const botFieldInput = e.currentTarget.querySelector('input[name="bot-field"]') as HTMLInputElement | null;
    const botFieldValue = botFieldInput?.value?.trim() ?? "";
    if (botFieldValue) {
      payload.set("bot-field", botFieldValue);
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitState("idle");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitState("error");
    }
  };

  const inputCls =
    "w-full border border-gray-300 bg-white px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] focus:ring-1 focus:ring-[#a41034] transition-colors placeholder-gray-400";
  const labelCls = "block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5";
  const selectCls = `${inputCls} appearance-none cursor-pointer`;

  const sectionHeader = (num: number, title: string, subtitle: string) => (
    <div className="mb-8">
      <span className="inline-block text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-2">
        Section {num} of {TOTAL_STEPS}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1b1c1d] tracking-tight"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
        {title}
      </h2>
      <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#a41034] transition-all duration-500"
          style={{ width: `${(num / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <NavBar />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-500 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b1c1d] mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Application Submitted!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Thank you, <strong>{form.firstName} {form.lastName}</strong>. Your application for the{" "}
            <strong>{form.intake}</strong> intake has been received.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Our admissions team will review your application and contact you at{" "}
            <strong>{form.email || form.phone}</strong> within 5–7 working days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-3 bg-[#a41034] text-white font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors">
              Back to Home
            </Link>
            <Link href="/admissions" className="px-8 py-3 border border-gray-300 text-[#1b1c1d] font-bold text-xs uppercase tracking-widest hover:border-[#1b1c1d] transition-colors">
              Admissions Info
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <NavBar />

      {/* Hero */}
      <div className="w-full bg-[#1b1c1d] py-16 px-6 lg:px-12 text-center">
        <span className="inline-block text-[#a41034] font-bold text-[10px] tracking-widest uppercase mb-4">
          January 2026 Intake — Applications Open
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Student Application Form
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Starford International University · Eden Main Campus, Juba, South Sudan
        </p>
        <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
          Deadline: 30 / 1 / 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">

        {/* Notice banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-10 text-sm text-amber-800 reveal">
          <strong>Before you apply</strong> — ensure you have the following ready: Original Secondary Certificate,
          Proof of Age/Identity, Nationality/Passport, Two Passport-Sized Photos, and Application Fee.
        </div>

        {/* Step nav */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-1 reveal">
          {["Personal", "Contact", "Education", "Programme", "Documents"].map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToStep(i + 1)}
              className={`flex-shrink-0 px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${
                step === i + 1
                  ? "bg-[#a41034] border-[#a41034] text-white"
                  : step > i + 1
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white border-gray-300 text-gray-500"
              }`}
            >
              {i + 1}. {label}
            </button>
          ))}
        </div>

        {stepErrors.length > 0 && (
          <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-semibold mb-2">Please complete the following before continuing:</p>
            <ul className="list-disc pl-5 space-y-1">
              {stepErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form
          name="student-application"
          action="/?application=success"
          method="POST"
          encType="multipart/form-data"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-0"
        >
          <input type="hidden" name="form-name" value="student-application" />
          <p className="hidden" aria-hidden="true">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* ── STEP 1: Personal Information ── */}
          {step === 1 && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 reveal reveal-x-left">
              {sectionHeader(1, "Personal Information", "Enter your full legal name and personal details as they appear on your official documents.")}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                  <label className={labelCls}>First Name *</label>
                  <input required className={inputCls} placeholder="e.g. Akol" value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Middle Name</label>
                  <input className={inputCls} placeholder="e.g. Deng" value={form.middleName}
                    onChange={(e) => set("middleName", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Last Name *</label>
                  <input required className={inputCls} placeholder="e.g. Majok" value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Date of Birth *</label>
                  <input required type="date" className={inputCls} value={form.dob}
                    onChange={(e) => set("dob", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Gender *</label>
                  <select required className={selectCls} value={form.gender}
                    onChange={(e) => set("gender", e.target.value)}>
                    <option value="">— Select —</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Nationality *</label>
                  <input required className={inputCls} placeholder="e.g. South Sudanese" value={form.nationality}
                    onChange={(e) => set("nationality", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Marital Status *</label>
                  <select required className={selectCls} value={form.maritalStatus}
                    onChange={(e) => set("maritalStatus", e.target.value)}>
                    <option value="">— Select —</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Religion</label>
                  <input className={inputCls} placeholder="e.g. Christianity" value={form.religion}
                    onChange={(e) => set("religion", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Home County / State *</label>
                  <input required className={inputCls} placeholder="e.g. Juba, CES" value={form.county}
                    onChange={(e) => set("county", e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2: Contact Information ── */}
          {step === 2 && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 reveal reveal-x-right">
              {sectionHeader(2, "Contact Information", "Provide a working phone number and email — we'll use these to reach you about your application.")}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Phone Number *</label>
                  <input required type="tel" className={inputCls} placeholder="+211 9XX XXX XXX" value={form.phone}
                    onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input type="email" className={inputCls} placeholder="yourname@example.com" value={form.email}
                    onChange={(e) => set("email", e.target.value)} />
                </div>
              </div>

              <div>
                <label className={labelCls}>Residential Address *</label>
                <textarea required rows={3} className={inputCls} placeholder="Street, Payam, County, State" value={form.address}
                  onChange={(e) => set("address", e.target.value)} />
              </div>
            </div>
          )}

          {/* ── STEP 3: Educational Background ── */}
          {step === 3 && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 reveal reveal-x-left">
              {sectionHeader(3, "Educational Background", "Provide details of your most recent secondary education and any prior tertiary study.")}

              <div className="mb-5">
                <label className={labelCls}>Name of Secondary School *</label>
                <input required className={inputCls} placeholder="e.g. Juba Day Secondary School" value={form.schoolName}
                  onChange={(e) => set("schoolName", e.target.value)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Year of Graduation *</label>
                  <input required type="number" min="1980" max="2026" className={inputCls}
                    placeholder="e.g. 2023" value={form.gradYear}
                    onChange={(e) => set("gradYear", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Certificate Obtained *</label>
                  <select required className={selectCls} value={form.certificate}
                    onChange={(e) => set("certificate", e.target.value)}>
                    <option value="">— Select —</option>
                    <option>South Sudan Certificate of Secondary Education (SSCE)</option>
                    <option>IGCSE / GCE O-Level</option>
                    <option>East African Certificate of Education</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Previous University / College (if any)</label>
                <input className={inputCls} placeholder="Leave blank if this is your first university application"
                  value={form.prevUniversity}
                  onChange={(e) => set("prevUniversity", e.target.value)} />
              </div>
            </div>
          )}

          {/* ── STEP 4: Programme Selection ── */}
          {step === 4 && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 reveal reveal-x-right">
              {sectionHeader(4, "Programme Selection", "Choose the college, programme, and mode of study you wish to enrol in.")}

              <div className="mb-5">
                <label className={labelCls}>Intake *</label>
                <select required className={selectCls} value={form.intake}
                  onChange={(e) => set("intake", e.target.value)}>
                  <option>January 2026</option>
                  <option>July 2026</option>
                </select>
              </div>

              <div className="mb-5">
                <label className={labelCls}>College / Faculty *</label>
                <select required className={selectCls} value={form.college}
                  onChange={(e) => { set("college", e.target.value); set("programme", ""); }}>
                  <option value="">— Select College —</option>
                  {COLLEGES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              {form.college && (
                <div className="mb-5">
                  <label className={labelCls}>Programme / Course *</label>
                  <select required className={selectCls} value={form.programme}
                    onChange={(e) => set("programme", e.target.value)}>
                    <option value="">— Select Programme —</option>
                    {PROGRAMMES[form.college]?.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
              )}

              <div>
                <label className={labelCls}>Mode of Study *</label>
                <div className="flex gap-4 mt-1">
                  {["Full-Time", "Part-Time", "Evening"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer text-sm text-[#1b1c1d] font-medium">
                      <input type="radio" name="modeOfStudy" value={m} required
                        checked={form.modeOfStudy === m}
                        onChange={(e) => set("modeOfStudy", e.target.value)}
                        className="accent-[#a41034] w-4 h-4" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 5: Documents & Declaration ── */}
          {step === 5 && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 reveal reveal-x-left">
              {sectionHeader(5, "Documents & Declaration", "Confirm that you have the required documents ready to submit to the Admissions office.")}

              <p className="text-sm text-gray-600 mb-6">
                The following documents must be submitted <strong>in person</strong> at the Eden Main Campus
                Admissions Office, or sent via the contact details below.
              </p>

              <div className="space-y-4 mb-8">
                {([
                  { key: "certificate", label: "Original Secondary School Certificate" },
                  { key: "identity",    label: "Proof of Age / Identity" },
                  { key: "passport",    label: "Nationality / Passport" },
                  { key: "photos",      label: "Two Passport-Sized Photos" },
                  { key: "fee",         label: "Application Fee (paid)" },
                ] as { key: keyof FormData["docs"]; label: string }[]).map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={form.docs[key]}
                      onChange={(e) => setDoc(key, e.target.checked)}
                      className="accent-[#a41034] w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-[#1b1c1d] group-hover:text-[#a41034] transition-colors">{label}</span>
                  </label>
                ))}
              </div>

              <div className="border border-gray-200 bg-gray-50 p-5 mb-8 space-y-5">
                <h4 className="font-bold text-[#1b1c1d] text-sm uppercase tracking-widest">
                  Upload Required Documents
                </h4>
                <p className="text-xs text-gray-500">
                  Upload clear scans/photos. Total upload size should be 7.5MB or less.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>National ID / Passport (Front) *</label>
                    <input
                      type="file"
                      name="id_front_image"
                      accept="image/*,.pdf"
                      required
                      onChange={(e) => setUpload("idFront", e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#1b1c1d] file:text-white file:font-semibold hover:file:bg-black"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>National ID / Passport (Back) *</label>
                    <input
                      type="file"
                      name="id_back_image"
                      accept="image/*,.pdf"
                      required
                      onChange={(e) => setUpload("idBack", e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#1b1c1d] file:text-white file:font-semibold hover:file:bg-black"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Secondary Certificate *</label>
                    <input
                      type="file"
                      name="certificate_scan"
                      accept="image/*,.pdf"
                      required
                      onChange={(e) => setUpload("certificateScan", e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#1b1c1d] file:text-white file:font-semibold hover:file:bg-black"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Passport Photo *</label>
                    <input
                      type="file"
                      name="passport_photo"
                      accept="image/*"
                      required
                      onChange={(e) => setUpload("passportPhoto", e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#1b1c1d] file:text-white file:font-semibold hover:file:bg-black"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Application Fee Receipt *</label>
                    <input
                      type="file"
                      name="fee_receipt"
                      accept="image/*,.pdf"
                      required
                      onChange={(e) => setUpload("feeReceipt", e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#1b1c1d] file:text-white file:font-semibold hover:file:bg-black"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h4 className="font-bold text-[#1b1c1d] text-sm mb-3 uppercase tracking-widest">Admissions Contact</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Mr. Atem Arop Majok — <a href="tel:+211980333824" className="text-[#a41034] hover:underline">+211 980 333 824</a></p>
                  <p>Mr. Moses Marial Buon — <a href="tel:+211926061870" className="text-[#a41034] hover:underline">+211 926 061 870</a></p>
                  <p>Mr. Uwkah Abraham — <a href="tel:+211922281650" className="text-[#a41034] hover:underline">+211 922 281 650</a></p>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer mb-8">
                <input type="checkbox" required checked={form.declaration}
                  onChange={(e) => {
                    setStepErrors([]);
                    setForm((f) => ({ ...f, declaration: e.target.checked }));
                  }}
                  className="accent-[#a41034] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I declare that the information provided in this application is true, complete, and accurate to the best of
                  my knowledge. I understand that any false or misleading information may result in the cancellation of my application
                  or enrolment. *
                </span>
              </label>

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full py-4 bg-[#a41034] text-white font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitState === "submitting" ? "Submitting Application..." : "Submit Application →"}
              </button>
              {submitState === "error" && (
                <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                  Submission failed. Please try again.
                </p>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            {step > 1 ? (
              <button type="button" onClick={() => goToStep(step - 1)}
                className="px-8 py-3 border border-gray-300 text-[#1b1c1d] font-bold text-xs uppercase tracking-widest hover:border-[#1b1c1d] transition-colors">
                ← Previous
              </button>
            ) : <div />}

            {step < TOTAL_STEPS && (
              <button
                type="button"
                onClick={() => {
                  const errors = validateStep(step);
                  if (errors.length > 0) {
                    setStepErrors(errors);
                    return;
                  }
                  setStepErrors([]);
                  setStep(step + 1);
                }}
                className="px-8 py-3 bg-[#1b1c1d] text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors">
                Next →
              </button>
            )}
          </div>

        </form>

        <p className="text-center text-gray-400 text-xs mt-10">
          © {new Date().getFullYear()} Starford International University · Eden Main Campus, Juba
        </p>
      </div>
    </div>
  );
}
