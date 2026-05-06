"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="relative bg-forest py-28 md:py-36 lg:py-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      {/* Subtle architectural corner marks */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 hidden md:block">
        <div className="h-8 w-px bg-sage/15" />
        <div className="absolute top-0 left-0 h-px w-8 bg-sage/15" />
      </div>
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden md:block">
        <div className="h-8 w-px bg-sage/15 ml-auto" />
        <div className="absolute bottom-0 right-0 h-px w-8 bg-sage/15" />
      </div>

      <motion.div
        className="mx-auto max-w-3xl px-6 text-center md:px-8"
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          className="mx-auto mb-8 h-7 w-7 text-sage/60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote className="font-serif text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.45] tracking-[-0.01em] text-cream/85 italic">
          &ldquo;From the first consultation to the final walkthrough, Pristine
          Construction exceeded every expectation. The attention to detail was
          incredible — our bathroom looks like it belongs in a magazine. We
          wouldn&rsquo;t trust anyone else with our home.&rdquo;
        </blockquote>
        <div className="mx-auto mt-10 h-px w-12 bg-sage/30" />
        <div className="mt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-sage/80">
            The Vasavada Family
          </p>
          <p className="mt-1 text-[0.8rem] text-tan/40">
            Master Bathroom Remodel · San Jose, CA
          </p>
        </div>
      </motion.div>
    </section>
  );
}
