"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

const FORM_NAME = "project-inquiry";

const SERVICE_OPTIONS = [
  "Bathroom Remodel",
  "Kitchen Remodel",
  "ADU / New Construction",
  "Whole-Home Remodel",
  "General Remodeling",
  "Other / Not Sure Yet",
];

function formDataToUrlEncoded(form: HTMLFormElement): string {
  const params = new URLSearchParams();
  const data = new FormData(form);
  data.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });
  return params.toString();
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: formDataToUrlEncoded(form),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data?.ok) {
        throw new Error("Form submission failed");
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us or call (408) 421-8997.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" bg="sage">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
            08 / Contact
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-8 bg-olive/40" />
          </div>
          <h2 className="mt-5 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Start Your Project
            <br />
            Consultation
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-forest/60">
            Tell us about your vision, timeline, and goals. We&rsquo;ll help you
            understand next steps, scope, and project direction — no pressure,
            no sales pitch.
          </p>

          <motion.div
            className="mt-10 rounded-lg border border-olive/15 bg-cream-light/40 p-5"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-[0.85rem] italic leading-relaxed text-forest/55">
              &ldquo;We respond within 24 hours. Most consultations begin
              with a brief phone call to understand your project, followed
              by a site visit if it&rsquo;s a good fit.&rdquo;
            </p>
          </motion.div>

          <div className="mt-10 space-y-5 border-l border-olive/20 pl-6">
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-olive/70">
                Email
              </h3>
              <a
                href="mailto:office@pristineconstructionllc.com"
                className="mt-1 block text-[0.95rem] transition-colors hover:text-olive"
              >
                office@pristineconstructionllc.com
              </a>
            </div>
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-olive/70">
                Phone
              </h3>
              <a
                href="tel:+14084218997"
                className="mt-1 block text-[0.95rem] transition-colors hover:text-olive"
              >
                (408) 421-8997
              </a>
            </div>
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-olive/70">
                Location
              </h3>
              <p className="mt-1 text-[0.95rem]">San Jose, CA</p>
            </div>
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-olive/70">
                Hours
              </h3>
              <div className="mt-1 space-y-0.5 text-[0.95rem]">
                <p>Mon – Fri: 7am – 6pm</p>
                <p>Saturday: 8am – 2pm</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://www.instagram.com/pristineconstruction408"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-olive/50 transition-colors hover:text-forest"
            >
              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Pristine-Builders-577460896270063/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-olive/50 transition-colors hover:text-forest"
            >
              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCcQ00tgMg9r12T3xAdVGoMg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-olive/50 transition-colors hover:text-forest"
            >
              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          {submitted ? (
            <motion.div
              className="flex h-full items-center justify-center rounded-xl border border-olive/15 bg-cream-light/60 p-12 text-center"
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10">
                  <svg
                    className="h-5 w-5 text-olive"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl">Message Received</h3>
                <p className="mt-2 text-[0.9rem] text-forest/55">
                  We&rsquo;ll review your project details and respond within 24 hours.
                </p>
              </div>
            </motion.div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="relative space-y-5 rounded-xl border border-tan/20 bg-cream-light p-7 shadow-sm md:p-9"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="sr-only">
                <label htmlFor="bot-field">Leave blank</label>
                <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
              </p>
              <div className="mb-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-olive/60">
                  Project Inquiry
                </span>
              </div>
              <div>
                <label htmlFor="name" className="block text-[0.8rem] font-medium text-forest/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-tan/40 bg-white px-4 py-3 text-[0.9rem] outline-none transition-all duration-300 focus:border-olive/50 focus:shadow-sm focus:ring-1 focus:ring-olive/10"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-[0.8rem] font-medium text-forest/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-tan/40 bg-white px-4 py-3 text-[0.9rem] outline-none transition-all duration-300 focus:border-olive/50 focus:shadow-sm focus:ring-1 focus:ring-olive/10"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[0.8rem] font-medium text-forest/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1.5 w-full rounded-lg border border-tan/40 bg-white px-4 py-3 text-[0.9rem] outline-none transition-all duration-300 focus:border-olive/50 focus:shadow-sm focus:ring-1 focus:ring-olive/10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-[0.8rem] font-medium text-forest/70">
                  Project Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-1.5 w-full appearance-none rounded-lg border border-tan/40 bg-white px-4 py-3 text-[0.9rem] outline-none transition-all duration-300 focus:border-olive/50 focus:shadow-sm focus:ring-1 focus:ring-olive/10"
                >
                  <option value="">Select a project type...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[0.8rem] font-medium text-forest/70">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share your vision, timeline, budget range, or any questions..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-tan/40 bg-white px-4 py-3 text-[0.9rem] outline-none transition-all duration-300 placeholder:text-forest/25 focus:border-olive/50 focus:shadow-sm focus:ring-1 focus:ring-olive/10"
                />
              </div>
              {submitError ? (
                <p className="text-[0.8rem] text-red-800/90" role="alert">
                  {submitError}
                </p>
              ) : null}
              <Button
                type="submit"
                variant="solid"
                className="w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Start Consultation"}
              </Button>
              <p className="text-[0.75rem] text-forest/35">
                Free consultation · No obligation · Response within 24 hours
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-lg lg:mt-20">
        <iframe
          title="Pristine Construction Location"
          src="https://maps.google.com/maps?q=2152+Caracas+Ct,+San+Jose,+CA+95122&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SectionWrapper>
  );
}
