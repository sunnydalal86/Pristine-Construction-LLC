"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "./types";

type ProjectGalleryProps = {
  project: PortfolioProject;
  onImageClick: (index: number) => void;
};

function galleryCellClass(index: number, total: number): string {
  if (index === 0) {
    return "col-span-12";
  }
  if (index === 1) {
    return "col-span-12 lg:col-span-7";
  }
  if (index === 2) {
    return "col-span-12 lg:col-span-5";
  }

  const cycle = (index - 3) % 4;
  switch (cycle) {
    case 0:
      return "col-span-12";
    case 1:
      return "col-span-12 lg:col-span-5";
    case 2:
      return "col-span-12 lg:col-span-7";
    default:
      return index === total - 1 ? "col-span-12" : "col-span-12 lg:col-span-6";
  }
}

export default function ProjectGallery({ project, onImageClick }: ProjectGalleryProps) {
  const n = project.images.length;

  return (
    <div className="mt-12 md:mt-14">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 lg:gap-x-10 lg:gap-y-12">
        {project.images.map((src, i) => {
          const alt = `${project.title} — photograph ${i + 1} of ${n}`;
          const col = galleryCellClass(i, n);

          return (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.72,
                delay: Math.min(i * 0.045, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${col} overflow-hidden`}
            >
              <button
                type="button"
                onClick={() => onImageClick(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[1px] bg-charcoal/[0.04] text-left ring-1 ring-charcoal/[0.06] transition-[transform,box-shadow,ring-color] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:shadow-[0_18px_46px_-26px_rgba(26,27,25,0.28)] hover:ring-olive/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, min(1100px, 75vw)"
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-auto w-full object-contain transition-[transform,filter] duration-[1.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.012]"
                />
                <span className="pointer-events-none absolute inset-0 bg-charcoal/0 transition duration-[850ms] ease-out group-hover:bg-charcoal/[0.05]" />
              </button>
            </motion.figure>
          );
        })}
      </div>
    </div>
  );
}
