"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand project goals, vision, budget, and priorities.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Align materials, timelines, scope, and execution strategy.",
  },
  {
    number: "03",
    title: "Build & Project Management",
    description:
      "Maintain quality control, communication, scheduling, and oversight throughout construction.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "Refine finishing details and ensure every element meets the Pristine standard.",
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process" bg="cream" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] text-forest [background-image:linear-gradient(90deg,rgb(47_49_46/0.045)_1px,transparent_1px),linear-gradient(rgb(47_49_46/0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(180deg,black_40%,transparent_95%)]"
        aria-hidden
      />

      <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1fr),minmax(0,1.35fr)] lg:gap-20 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
            02 / Process
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-14 bg-olive/20" />
          </div>
          <h2 className="mt-8 font-serif text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] tracking-[-0.03em] text-forest">
            The Pristine Process
          </h2>
          <p className="mt-7 max-w-md text-[1.02rem] font-light leading-[1.75] text-forest/55">
            Clear communication, disciplined execution, and careful project
            management from planning to completion.
          </p>
        </motion.div>

        <div className="relative min-w-0">
          <div
            className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-olive/15 via-olive/8 to-transparent"
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: Math.min(i * 0.08, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-olive/10 py-9 last:border-b-0 md:py-11"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-10 md:gap-14">
                <span className="shrink-0 font-light tabular-nums text-[11px] tracking-[0.28em] text-olive/35 sm:pt-0.5">
                  {step.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl tracking-[-0.02em] text-forest md:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.94rem] font-light leading-[1.75] text-forest/54">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
