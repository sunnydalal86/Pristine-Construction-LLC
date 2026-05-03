"use client";

import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const SERVICE_OPTIONS = [
  "Bathroom Remodel",
  "Kitchen Remodel",
  "ADU / New Construction",
  "General Remodeling",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" bg="sage">
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Request a Free Quote
          </h2>
          <p className="mt-6 max-w-md text-[1.125rem] leading-relaxed text-forest/60">
            Ready to start your project? Reach out and we&rsquo;ll get back to
            you within 24 hours.
          </p>

          <div className="mt-10 space-y-6 border-l-2 border-olive/30 pl-6">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-olive">
                Email
              </h3>
              <a
                href="mailto:office@pristineconstructionllc.com"
                className="mt-1 block text-[1.05rem] transition-colors hover:text-olive"
              >
                office@pristineconstructionllc.com
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-olive">
                Phone
              </h3>
              <a
                href="tel:+14084218997"
                className="mt-1 block text-[1.05rem] transition-colors hover:text-olive"
              >
                (408) 421-8997
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-olive">
                Location
              </h3>
              <p className="mt-1 text-[1.05rem]">
                2152 Caracas Ct
                <br />
                San Jose, CA 95122
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-olive">
                Hours
              </h3>
              <div className="mt-1 space-y-0.5 text-[1.05rem]">
                <p>Mon – Fri: 7am – 6pm</p>
                <p>Saturday: 8am – 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="https://www.instagram.com/pristineconstruction408"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-olive/60 transition-colors hover:text-forest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Pristine-Builders-577460896270063/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-olive/60 transition-colors hover:text-forest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCcQ00tgMg9r12T3xAdVGoMg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-olive/60 transition-colors hover:text-forest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-lg border border-border p-12 text-center">
              <div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-olive/15">
                  <svg
                    className="h-6 w-6 text-olive"
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
                <h3 className="font-serif text-xl">Message Sent</h3>
                <p className="mt-2 text-forest/60">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-cream-light p-8 shadow-sm ring-1 ring-tan/20 md:p-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive/20"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-2 w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive/20"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive/20"
                />
              </div>
              <Button type="submit" variant="solid" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-lg">
        <iframe
          title="Pristine Construction Location"
          src="https://maps.google.com/maps?q=2152+Caracas+Ct,+San+Jose,+CA+95122&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SectionWrapper>
  );
}
