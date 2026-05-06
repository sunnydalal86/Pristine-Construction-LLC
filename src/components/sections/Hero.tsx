"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  const soft = reduceMotion
    ? { duration: 0 }
    : { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

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
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ ...soft, delay: reduceMotion ? 0 : 0.15 }}
            className="mb-8 h-px w-24 origin-left bg-sage-light/85"
          />

          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...soft, delay: reduceMotion ? 0 : 0.22 }}
            className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-sage-light/90"
          >
            Bay Area Design-Build
          </motion.span>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...soft, delay: reduceMotion ? 0 : 0.32 }}
            className="font-serif text-[clamp(2rem,4.2vw,3.85rem)] leading-[1.08] tracking-[-0.035em] text-cream-light"
          >
            <span className="block pb-2 sm:pb-2.5 md:pb-3">Bay Area Remodeling</span>
            <span className="block">
              Built Around{" "}
              <span className="text-sage-light/[0.92]">
                Precision, Communication, and Craftsmanship
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...soft, delay: reduceMotion ? 0 : 0.46 }}
            className="mt-7 max-w-2xl text-[1.04rem] font-light leading-[1.78] text-cream/71 md:text-[1.065rem]"
          >
            Kitchens, bathrooms, ADUs, and full-home remodels — delivered by an
            in-house team with dedicated project management. From structured
            planning through final punch list, you work with accountable people,
            predictable cadence, and workmanship you can scrutinize — not vague
            timelines or crews that vanish mid-project.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...soft, delay: reduceMotion ? 0 : 0.58 }}
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
              View Curated Projects
            </Button>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.85 }}
            className="mt-7 text-[11px] uppercase tracking-[0.2em] text-tan-light/48"
          >
            Licensed · Insured · San Jose, CA · Since 2014
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 md:block"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.1, duration: reduceMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={
            reduceMotion ? undefined : { repeat: Infinity, duration: 2.8, ease: [0.45, 0, 0.55, 1] }
          }
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
