"use client";

import Image from "next/image";
import type { PortfolioProject } from "./types";

type ProjectGalleryProps = {
  project: PortfolioProject;
  onImageClick: (index: number) => void;
};

export default function ProjectGallery({ project, onImageClick }: ProjectGalleryProps) {
  const n = project.images.length;

  return (
    <div className="mt-12 md:mt-14">
      <div className="columns-1 gap-8 md:columns-2 md:gap-x-10 md:gap-y-9 lg:gap-x-12 lg:gap-y-11 xl:columns-3">
        {project.images.map((src, i) => {
          const alt = `${project.title} — photograph ${i + 1} of ${n}`;
          const offset =
            i % 7 === 1
              ? "md:mt-12 xl:mt-16"
              : i % 7 === 4
                ? "md:-mt-1 xl:mt-10"
                : i % 7 === 5
                  ? "md:mt-8 xl:mt-4"
                  : "";

          return (
            <figure
              key={src}
              className={`mb-8 break-inside-avoid md:mb-10 ${offset}`}
            >
              <button
                type="button"
                onClick={() => onImageClick(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[1px] bg-charcoal/[0.04] text-left ring-1 ring-charcoal/[0.06] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:ring-olive/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={2400}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="h-auto w-full object-contain transition duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
                />
                <span className="pointer-events-none absolute inset-0 bg-charcoal/0 transition duration-700 group-hover:bg-charcoal/[0.06]" />
              </button>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
