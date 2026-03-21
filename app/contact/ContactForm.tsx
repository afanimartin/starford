"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        payload.append(key, value);
      }
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
      router.push("/?contact=success");
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      name="contact"
      action="/?contact=success"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-8"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      {status === "submitting" && (
        <p
          className="rounded-lg bg-amber-50 text-amber-800 px-5 py-4 text-sm font-medium flex items-center gap-3 border border-amber-200 animate-fade-in"
          aria-live="polite"
        >
          <span
            className="inline-block w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"
            aria-hidden
          />
          Sending your message securely...
        </p>
      )}
      {status === "success" && (
        <p className="rounded-lg bg-green-50 text-green-800 px-5 py-4 text-sm font-medium flex items-center gap-3 border border-green-200 animate-fade-in" aria-live="polite">
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          Thank you. Your message has been submitted successfully.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 text-red-800 px-5 py-4 text-sm font-medium flex items-center gap-3 border border-red-200 animate-fade-in" aria-live="polite">
          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          Submission failed. Please check your connection and try again.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="group relative">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">First Name *</label>
          <input
            type="text"
            name="first_name"
            required
            disabled={isSubmitting}
            className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl disabled:opacity-60"
            placeholder="e.g. Deng"
          />
        </div>
        <div className="group relative">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">Last Name *</label>
          <input
            type="text"
            name="last_name"
            required
            disabled={isSubmitting}
            className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl disabled:opacity-60"
            placeholder="e.g. Akol"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="group relative">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl disabled:opacity-60"
            placeholder="you@email.com"
          />
        </div>
        <div className="group relative">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">Phone Number</label>
          <input
            type="tel"
            name="phone"
            disabled={isSubmitting}
            className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl disabled:opacity-60"
            placeholder="+211 9XX XXX XXX"
          />
        </div>
      </div>

      <div className="group relative">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">Subject *</label>
        <div className="relative">
          <select
            name="subject"
            required
            disabled={isSubmitting}
            className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 pr-10 text-sm text-[#1b1c1d] appearance-none focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl disabled:opacity-60 cursor-pointer"
          >
            <option value="">Select a specific subject area</option>
            <option>Admissions Enquiry</option>
            <option>Programme Information</option>
            <option>Fee & Financial Aid</option>
            <option>Distance Learning</option>
            <option>Partnership & Collaboration</option>
            <option>Media & Press</option>
            <option>Other</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#a41034] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>

      <div className="group relative">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#a41034] transition-colors">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          disabled={isSubmitting}
          className="w-full bg-gray-50/50 border-b-2 border-gray-200 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:bg-white focus:border-[#a41034] focus:shadow-[0_4px_14px_rgba(164,16,52,0.08)] transition-all rounded-t-xl resize-y min-h-[120px] disabled:opacity-60"
          placeholder="How can we help you today?"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group/btn relative w-full sm:w-auto px-12 py-4 bg-[#a41034] text-white font-bold text-xs uppercase tracking-[0.2em] overflow-hidden rounded-md hover:bg-red-900 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-3"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-full transition-all duration-700 pointer-events-none" style={{ transform: 'skewX(-20deg) translateX(-100%)' }} />
          <span className="relative z-10">{isSubmitting ? "Sending securely..." : "Send Message"}</span>
          {!isSubmitting && (
            <svg className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          )}
        </button>
      </div>
    </form>
  );
}
