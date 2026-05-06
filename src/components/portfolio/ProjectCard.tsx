"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "./types";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  onOpen: () => void;
};

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cover = project.images[0];
  const isFeature = index === 0;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: Math.min(index * 0.055, 0.45), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={isFeature ? "sm:col-span-2" : ""}
    >
      <button
        type="button"
        onClick={onOpen}
        className={`group relative block w-full cursor-pointer overflow-hidden rounded-lg bg-stone/50 text-left shadow-[0_1px_0_rgba(47,49,46,0.05),0_12px_40px_-24px_rgba(26,27,25,0.35)] ring-1 ring-charcoal/[0.06] transition duration-500 hover:ring-olive/25 ${
          isFeature ? "aspect-[16/11] sm:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[3/4]"
        }`}
      >
        <Image
          src={cover}
          alt={`${project.title} — project cover`}
          fill
          className="object-cover transition duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
          sizes={
            isFeature
              ? "(max-width:640px) 100vw, (max-width:1024px) 100vw, 66vw"
              : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          }
          loading={index < 2 ? "eager" : "lazy"}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/88 via-charcoal/25 to-charcoal/5 opacity-90 transition duration-500 group-hover:from-charcoal/92 group-hover:via-charcoal/45" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 lg:p-8">
          <div className="mb-3 h-px w-10 bg-cream-light/35 transition-all duration-400 group-hover:w-16 group-hover:bg-cream-light/55" />

          <div className="flex translate-y-1 flex-col gap-1 transition duration-500 group-hover:translate-y-0">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-light/55 opacity-0 transition duration-400 group-hover:opacity-100">
              {project.category}
            </span>
            <span className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] leading-tight tracking-[-0.02em] text-cream-light">
              {project.title}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 opacity-0 transition duration-500 group-hover:opacity-100">
            <span className="max-w-[65%] text-[11px] font-medium uppercase tracking-[0.18em] text-cream-light/60">
              {project.projectType}
            </span>
            <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.22em] text-cream-light/85 underline decoration-cream-light/30 decoration-1 underline-offset-[5px]">
              View project
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
