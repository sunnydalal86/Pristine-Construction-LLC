"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "./types";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  layoutClass?: string;
  onOpen: () => void;
};

export default function ProjectCard({
  project,
  index,
  layoutClass = "",
  onOpen,
}: ProjectCardProps) {
  const cover = project.images[0];
  const isHero = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: Math.min(index * 0.06, 0.4),
        duration: 0.78,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`h-full ${layoutClass}`}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${project.title} — view gallery`}
        className="group relative flex h-full min-h-[inherit] w-full cursor-pointer flex-col overflow-hidden rounded-[1px] bg-charcoal/[0.05] text-left shadow-[0_1px_0_rgba(47,49,46,0.04),0_24px_55px_-30px_rgba(26,27,25,0.32)] ring-1 ring-charcoal/[0.06] transition-[box-shadow,transform,ring-color] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-28px_rgba(26,27,25,0.38)] hover:ring-olive/18 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Image
            src={cover}
            alt=""
            fill
            className="object-cover object-center transition-[transform,filter] duration-[1.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            sizes={
              isHero
                ? "(max-width:768px) 100vw, (max-width:1024px) 100vw, 66vw"
                : "(max-width:768px) 100vw, (max-width:1024px) 50vw, 40vw"
            }
            loading={index < 2 ? "eager" : "lazy"}
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/28 to-charcoal/[0.02] transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:from-charcoal/88 group-hover:via-charcoal/48"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-[800ms] ease-out group-hover:bg-charcoal/20"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 lg:p-8">
            <div className="mb-4 h-px max-w-[72px] bg-cream-light/40 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[120px] group-hover:bg-cream-light/55" />

            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-cream-light/42 transition-colors duration-500 group-hover:text-cream-light/55">
              {project.category}
            </p>

            <div className="mt-2 space-y-1.5 text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-cream-light/72 transition-colors duration-500 group-hover:text-cream-light/88">
              <p>{project.projectType}</p>
              <p className="tracking-[0.18em] text-cream-light/58 group-hover:text-cream-light/75">
                {project.location}
              </p>
            </div>

            <p className="mt-3 max-w-[95%] text-[11px] font-normal normal-case leading-[1.55] tracking-[0.01em] text-cream-light/52 transition-colors duration-500 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] group-hover:text-cream-light/68 md:max-w-[28rem]">
              {project.scope}
            </p>

            <h3 className="mt-4 max-w-[95%] translate-y-0 font-serif text-[clamp(1.2rem,2.1vw,1.65rem)] leading-[1.12] tracking-[-0.02em] text-cream-light opacity-100 transition-all duration-500 ease-out [text-wrap:balance] lg:mt-5 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              {project.title}
            </h3>

            <div className="mt-5 flex items-baseline justify-between gap-4 lg:mt-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream-light/88 underline decoration-cream-light/35 decoration-1 underline-offset-[6px] transition-all duration-500 lg:text-cream-light/0 lg:no-underline lg:opacity-0 lg:decoration-transparent lg:group-hover:text-cream-light/92 lg:group-hover:opacity-100 lg:group-hover:underline lg:group-hover:decoration-cream-light/35">
                View Gallery
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-light/40 transition-opacity duration-500 lg:text-cream-light/35 lg:opacity-0 lg:group-hover:opacity-100">
                {String(project.images.length).padStart(2, "0")} images
              </span>
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
