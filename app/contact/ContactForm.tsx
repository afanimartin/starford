"use client";

import { FormEvent, useState } from "react";

type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const firstName = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value ?? "";
    const lastName = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value ?? "";
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value ?? "";
    const subject = (form.querySelector('[name="subject"]') as HTMLSelectElement)?.value ?? "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value ?? "";
    const botField = (form.querySelector('[name="bot-field"]') as HTMLInputElement)?.value ?? "";

    const payload = new URLSearchParams();
    payload.set("form-name", "contact");
    payload.set("first_name", firstName);
    payload.set("last_name", lastName);
    payload.set("email", email);
    payload.set("phone", phone);
    payload.set("subject", subject);
    payload.set("message", message);
    if (botField) payload.set("bot-field", botField);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      name="contact"
      action="/__forms.html"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-6"
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
          className="rounded-md bg-amber-50 text-amber-800 px-4 py-3 text-sm font-medium flex items-center gap-2"
          aria-live="polite"
        >
          <span
            className="inline-block w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"
            aria-hidden
          />
          Sending your message...
        </p>
      )}
      {status === "success" && (
        <p className="rounded-md bg-green-50 text-green-800 px-4 py-3 text-sm font-medium" aria-live="polite">
          Thank you. Your message has been submitted successfully.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md bg-red-50 text-red-800 px-4 py-3 text-sm font-medium" aria-live="polite">
          Submission failed. Please try again.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name *</label>
          <input
            type="text"
            name="first_name"
            required
            disabled={isSubmitting}
            className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors disabled:opacity-60"
            placeholder="e.g. Deng"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name *</label>
          <input
            type="text"
            name="last_name"
            required
            disabled={isSubmitting}
            className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors disabled:opacity-60"
            placeholder="e.g. Akol"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors disabled:opacity-60"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            disabled={isSubmitting}
            className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors disabled:opacity-60"
            placeholder="+211 9XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject *</label>
        <select
          name="subject"
          required
          disabled={isSubmitting}
          className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors bg-white disabled:opacity-60"
        >
          <option value="">Select a subject</option>
          <option>Admissions Enquiry</option>
          <option>Programme Information</option>
          <option>Fee & Financial Aid</option>
          <option>Distance Learning</option>
          <option>Partnership & Collaboration</option>
          <option>Media & Press</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          disabled={isSubmitting}
          className="w-full border border-gray-300 px-4 py-3 text-sm text-[#1b1c1d] focus:outline-none focus:border-[#a41034] transition-colors resize-none disabled:opacity-60"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-12 py-4 bg-[#a41034] text-white font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
