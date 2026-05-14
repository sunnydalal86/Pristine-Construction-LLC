"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const HERO_IMAGE = "/images/AdobeStock_320874769.jpeg";

/** Strong stack so type reads on bright glass/stone/concrete */
const HERO_TYPE_SHADOW =
  "[text-shadow:0_1px_0_rgba(0,0,0,0.98),0_1px_4px_rgba(0,0,0,0.92),0_4px_14px_rgba(0,0,0,0.88),0_14px_48px_rgba(0,0,0,0.78),0_32px_80px_rgba(0,0,0,0.52)]";

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  const soft = reduceMotion
    ? { duration: 0 }
    : { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="pointer-events-none object-cover object-center brightness-[0.96]"
            sizes="100vw"
            priority
          />
        </div>
        {/* Subtle: light global veil + bottom scrim + soft left edge — keeps the house bright, anchors type */}
        <div className="pointer-events-none absolute inset-0 bg-black/[0.06]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(62vh,720px)] bg-gradient-to-t from-black/46 via-black/16 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/28 via-black/5 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-8 md:px-8 md:pb-32 md:pt-10 lg:pb-36">
          <div className="max-w-3xl [text-rendering:optimizeLegibility]">
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...soft, delay: reduceMotion ? 0 : 0.12 }}
              className={`mb-4 block text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-light ${HERO_TYPE_SHADOW} [filter:drop-shadow(0_3px_18px_rgba(0,0,0,0.72))_drop-shadow(0_0_2px_rgba(0,0,0,0.85))]`}
            >
              Bay Area Design & Build
            </motion.span>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...soft, delay: reduceMotion ? 0 : 0.22 }}
              className={`font-serif text-[clamp(2rem,4.2vw,3.85rem)] leading-[1.1] tracking-[-0.035em] text-white ${HERO_TYPE_SHADOW} [filter:drop-shadow(0_8px_42px_rgba(0,0,0,0.72))_drop-shadow(0_2px_6px_rgba(0,0,0,0.88))]`}
            >
              Bay Area Remodeling
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...soft, delay: reduceMotion ? 0 : 0.38 }}
              className="mt-10 flex flex-wrap gap-4 [filter:drop-shadow(0_16px_42px_rgba(0,0,0,0.55))]"
            >
              <Button
                href="#contact"
                variant="solid"
                className="[text-shadow:0_1px_3px_rgba(0,0,0,0.55)] shadow-[0_12px_42px_-8px_rgba(0,0,0,0.58),0_4px_16px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] ring-2 ring-cream-light/55 hover:shadow-[0_16px_50px_-8px_rgba(0,0,0,0.62),0_5px_18px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.22)]"
              >
                Start Your Project
              </Button>

              <Button
                href="#portfolio"
                variant="solid"
                className="!bg-white whitespace-normal border-2 border-forest/55 px-6 text-center text-[0.72rem] font-bold leading-snug !text-forest shadow-[0_4px_0_0_rgba(0,0,0,0.32),0_14px_40px_-6px_rgba(0,0,0,0.55),0_3px_12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(45,74,62,0.12)] ring-2 ring-black/35 [text-shadow:none] hover:!border-forest/75 hover:!bg-white hover:!text-forest hover:shadow-[0_6px_0_0_rgba(0,0,0,0.25),0_20px_52px_-8px_rgba(0,0,0,0.58)] sm:px-7 sm:text-[0.8rem]"
              >
                View Curated Projects
              </Button>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.55 }}
              className={`mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-light ${HERO_TYPE_SHADOW} [filter:drop-shadow(0_3px_18px_rgba(0,0,0,0.72))_drop-shadow(0_0_2px_rgba(0,0,0,0.85))]`}
            >
              San Jose, CA · Since 2014
            </motion.p>
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-white/[0.08] bg-charcoal text-cream-light"
        aria-labelledby="hero-value-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage-light/45 to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16 xl:gap-20">
            <motion.h2
              id="hero-value-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...soft, delay: reduceMotion ? 0 : 0.05 }}
              className="max-w-xl shrink-0 font-serif text-[clamp(1.45rem,2.75vw,2.35rem)] leading-[1.16] tracking-[-0.025em] text-sage-light lg:w-[min(42%,26rem)]"
            >
              Built Around Precision, Communication, and Craftsmanship
            </motion.h2>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...soft, delay: reduceMotion ? 0 : 0.12 }}
              className="min-w-0 flex-1 border-t border-white/[0.1] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-2"
            >
              <p className="text-[1.05rem] font-light leading-[1.82] text-cream-light/90 md:text-[1.065rem]">
                Kitchens, bathrooms, ADUs, new construction, and full-home remodels — delivered by an
                in-house team with dedicated project management. From structured planning through final
                punch list, you work with accountable people, predictable cadence, and workmanship
                you can scrutinize — not vague timelines or crews that vanish mid-project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
