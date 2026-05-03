"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Pristine Construction residential remodeling project"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="mb-6 h-1 w-16 rounded-full bg-sage" />

          <h1 className="font-serif text-[clamp(2.75rem,5vw,4.75rem)] leading-[1.05] tracking-[-0.03em] text-cream-light">
            Built with Precision.
            <br />
            Designed to Last.
          </h1>

          <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-cream-light md:text-xl">
            High-end kitchen, bathroom, and ADU construction across the Bay
            Area.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="solid">
              Get a Quote
            </Button>

            <Button
              href="#portfolio"
              variant="solid"
              className="bg-cream-light text-forest hover:bg-white hover:shadow-lg"
            >
              View Our Work
            </Button>
          </div>

          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-tan-light/80">
            Free estimates · Fast response · Bay Area homeowners
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-tan/60">
            Scroll
          </span>
          <div className="h-8 w-px bg-tan/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
