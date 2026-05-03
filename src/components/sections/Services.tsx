"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const SERVICES = [
  {
    title: "Bathroom Remodels",
    description:
      "From outdated to elevated. Complete bathroom renovations designed for comfort, function, and lasting style — tailored to how you actually live.",
    image: "/images/bathroom-remodel.jpg",
  },
  {
    title: "Kitchen Remodels",
    description:
      "The heart of your home, rebuilt right. Custom layouts, premium finishes, and smart storage — kitchens designed for real life, not just showrooms.",
    image: "/images/kitchen-remodel.jpg",
  },
  {
    title: "General Construction & ADUs",
    description:
      "Whole-home remodeling, accessory dwelling units, and new construction. Full design, architecture, engineering, and permitting services under one roof.",
    image: "/images/service-adu.jpg",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-olive/30" />
          <SectionLabel>Services</SectionLabel>
          <div className="h-px w-12 bg-olive/30" />
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          What We Do
        </h2>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-3 lg:gap-12 lg:mt-24">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group overflow-hidden rounded-lg border border-tan/40 bg-cream transition-all duration-300 hover:shadow-lg hover:border-olive/40 border-t-[3px] border-t-olive/30 hover:border-t-olive"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-xl tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-forest/60">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-olive transition-colors hover:text-forest"
              >
                Learn more
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
