"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-charcoal">
      {/* Solid gradient backdrop (no photo — preview layout) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest to-forest-light"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        aria-hidden
      />

      {/* Architectural overlay details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Corner framing - top left */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="h-16 w-px bg-white/10" />
          <div className="absolute top-0 left-0 h-px w-16 bg-white/10" />
        </div>
        {/* Corner framing - top right */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="ml-auto h-16 w-px bg-white/10" />
          <div className="absolute top-0 right-0 h-px w-16 bg-white/10" />
        </div>
        {/* Corner framing - bottom right */}
        <div className="absolute bottom-28 right-8 md:bottom-16 md:right-12">
          <div className="ml-auto h-16 w-px bg-white/[0.07]" />
          <div className="absolute bottom-0 right-0 h-px w-16 bg-white/[0.07]" />
        </div>
        {/* Subtle grid lines */}
        <div className="absolute top-1/4 right-0 left-0 h-px bg-white/[0.03]" />
        <div className="absolute top-2/4 right-0 left-0 h-px bg-white/[0.03]" />
        <div className="absolute top-3/4 right-0 left-0 h-px bg-white/[0.03]" />
        {/* Measurement mark */}
        <div className="absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-1 md:flex md:right-12">
          <div className="h-12 w-px bg-white/[0.08]" />
          <span className="origin-center translate-y-3 rotate-90 text-[8px] font-light tracking-[0.2em] text-white/20">
            ELEV
          </span>
          <div className="h-12 w-px bg-white/[0.08]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:pb-32">
        <div className="max-w-2xl">
          <motion.div
            initial={false}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mb-8 h-px w-20 origin-left bg-sage"
          />

          <motion.span
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-sage-light/90"
          >
            Bay Area Design-Build
          </motion.span>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-cream-light"
          >
            High-End Remodeling
            <br />
            <span className="text-sage-light/90">Without the Headaches.</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="mt-6 max-w-xl text-[1.05rem] font-light leading-[1.7] text-cream/70 md:text-lg"
          >
            Kitchens, bathrooms, ADUs, and full remodels — executed end-to-end
            by our in-house team. Clear communication from planning to
            completion.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#contact" variant="solid">
              Start Your Project
            </Button>

            <Button
              href="#portfolio"
              variant="solid"
              className="whitespace-normal bg-cream-light px-6 text-center text-[0.72rem] leading-snug text-forest hover:bg-white hover:shadow-lg sm:px-7 sm:text-[0.8rem]"
            >
              Featured Transformations
            </Button>
          </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 text-[11px] uppercase tracking-[0.2em] text-tan-light/50"
          >
            San Jose, CA · Since 2014
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 md:block"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-tan/40">
            Scroll
          </span>
          <div className="h-8 w-px bg-tan/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
