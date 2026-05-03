"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const PROJECTS = [
  { name: "The Vasavada Residence", image: "/images/bathroom-hdr-1.jpg", span: "md:col-span-2 md:row-span-2" },
  { name: "The Pennington Residence", image: "/images/bathroom-remodel.jpg", span: "" },
  { name: "The Gividen Residence", image: "/images/kitchen-remodel.jpg", span: "" },
  { name: "The Gellaty Residence", image: "/images/bathroom-hdr-2.jpg", span: "md:col-span-2" },
  { name: "The Haine Residence", image: "/images/hero.jpg", span: "" },
  { name: "The Stekeete Residence", image: "/images/bathroom-hdr-1.jpg", span: "" },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio" bg="tan">
      <div className="text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-olive/30" />
          <SectionLabel>Portfolio</SectionLabel>
          <div className="h-px w-12 bg-olive/30" />
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          Our Work
        </h2>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[300px] md:gap-8 lg:mt-24 lg:gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`group relative min-h-[240px] overflow-hidden rounded-lg ${project.span}`}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Desktop: overlay on hover */}
            <div className="absolute inset-0 hidden bg-black/0 transition-all duration-300 group-hover:bg-black/50 md:block" />
            <div className="absolute inset-0 hidden items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <div>
                <div className="mb-2 h-px w-8 bg-sage" />
                <span className="font-serif text-lg text-cream-light">
                  {project.name}
                </span>
              </div>
            </div>

            {/* Mobile: always visible at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-12 md:hidden">
              <div className="mb-1.5 h-px w-6 bg-sage" />
              <span className="font-serif text-base text-cream-light">
                {project.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center lg:mt-20">
        <Button href="#contact" variant="ghost">
          View All Projects
        </Button>
      </div>
    </SectionWrapper>
  );
}
