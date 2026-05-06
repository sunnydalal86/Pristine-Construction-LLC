"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const SERVICES = [
  {
    title: "Bathroom Remodels",
    tagline: "Precision meets daily ritual.",
    description:
      "Complete tear-out and rebuild — custom tile, plumbing relocation, ventilation, waterproofing, and finish carpentry. Designed for how you actually use the space.",
    image: "/images/bathroom-remodel.jpg",
  },
  {
    title: "Kitchen Remodels",
    tagline: "Where function meets craftsmanship.",
    description:
      "Custom cabinetry, countertop fabrication, electrical upgrades, plumbing rough-in, and integrated lighting. Built for real cooking, real living.",
    image: "/images/kitchen-remodel.jpg",
  },
  {
    title: "ADUs & Full Remodels",
    tagline: "From permit to punch list.",
    description:
      "Design, architecture, engineering, permitting, and construction — managed under one roof. We handle complexity so you don't have to.",
    image: "/images/service-adu.jpg",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center">
        <div className="mx-auto mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-olive/25" />
          <SectionLabel>Services</SectionLabel>
          <div className="h-px w-12 bg-olive/25" />
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          What We Build
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-forest/50">
          Every project is managed end-to-end by our in-house team.
          No subcontracting. No surprises.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 lg:mt-20 lg:gap-10">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group overflow-hidden rounded-lg border border-tan/30 bg-cream-light transition-all duration-500 hover:shadow-lg hover:border-olive/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="font-serif text-xl tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-olive/70">
                {service.tagline}
              </p>
              <p className="mt-4 text-[0.9rem] leading-[1.7] text-forest/55">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-olive transition-all duration-300 hover:text-forest hover:gap-2.5"
              >
                Discuss your project
                <span className="text-xs">&rarr;</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
