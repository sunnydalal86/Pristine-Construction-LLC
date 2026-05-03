"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="relative bg-forest py-32 md:py-40 lg:py-52">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-sage to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-sage to-transparent" />

      <motion.div
        className="mx-auto max-w-4xl px-6 text-center md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-tan/30" />
          <svg
            className="h-8 w-8 text-sage"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <div className="h-px w-20 bg-tan/30" />
        </div>
        <blockquote className="font-serif text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.4] tracking-[-0.01em] text-cream/90 italic">
          &ldquo;From the first consultation to the final walkthrough, Pristine
          Construction exceeded every expectation. The attention to detail was
          incredible — our bathroom looks like it belongs in a magazine. We
          wouldn&rsquo;t trust anyone else with our home.&rdquo;
        </blockquote>
        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-6 bg-sage/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-sage" />
          <div className="h-px w-6 bg-sage/40" />
        </div>
        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-sage">
            The Vasavada Family
          </p>
          <p className="mt-1 text-sm text-tan/50">
            Master Bathroom Remodel — San Jose, CA
          </p>
        </div>
      </motion.div>
    </section>
  );
}
