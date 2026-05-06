"use client";

import { motion } from "framer-motion";

const QUOTES = [
  {
    body: (
      <>
        From the first consultation to the final walkthrough, Pristine Construction exceeded
        every expectation. The attention to detail was incredible — our bathroom looks like
        it belongs in a magazine. We wouldn&rsquo;t trust anyone else with our home.
      </>
    ),
    name: "The Vasavada Family",
    meta: "Master Bathroom Remodel · San Jose, CA",
  },
  {
    body: (
      <>
        Communication was consistent, the site stayed organized, and there were no surprises
        on schedule. It felt like working with a disciplined build team — not a parade of
        strangers.
      </>
    ),
    name: "San Jose Homeowners",
    meta: "Full-Home Renovation · Bay Area",
  },
] as const;

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 md:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(90deg,rgb(250_249_245/0.04)_1px,transparent_1px),linear-gradient(rgb(250_249_245/0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(180deg,black_30%,transparent)]"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/28 to-transparent" />

      <div className="absolute top-8 left-8 hidden md:left-12 md:top-12 md:block">
        <div className="h-8 w-px bg-sage/15" />
        <div className="absolute left-0 top-0 h-px w-8 bg-sage/15" />
      </div>
      <div className="absolute bottom-8 right-8 hidden md:bottom-12 md:right-12 md:block">
        <div className="ml-auto h-8 w-px bg-sage/15" />
        <div className="absolute bottom-0 right-0 h-px w-8 bg-sage/15" />
      </div>

      <motion.div
        className="mx-auto max-w-6xl px-6 md:px-8"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-sage/68">
          06 / Clients
        </p>
        <div className="mt-9 flex justify-center lg:justify-start lg:max-w-none">
          <div className="h-px w-16 bg-sage/25" />
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          {QUOTES.map((q, i) => (
            <motion.blockquote
              key={q.name}
              className="relative border-t border-sage/15 pt-10 lg:pt-12"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <svg
                className="mb-8 h-6 w-6 text-sage/45"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="font-serif text-[clamp(1.18rem,2vw,1.56rem)] leading-[1.52] tracking-[-0.012em] text-cream/[0.86] italic">
                &ldquo;
                {q.body}
                &rdquo;
              </p>
              <div className="mt-10 h-px w-11 bg-sage/28" />
              <footer className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sage/[0.78]">
                  {q.name}
                </p>
                <p className="mt-1.5 text-[0.82rem] text-tan/[0.38]">{q.meta}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
