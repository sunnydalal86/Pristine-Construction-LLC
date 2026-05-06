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
    <div className="mt-10 md:mt-14">
      <div className="columns-1 gap-6 md:columns-2 md:gap-7 lg:columns-3 lg:gap-8">
        {project.images.map((src, i) => {
          const alt = `${project.title} — photograph ${i + 1} of ${n}`;
          const stagger = i % 5 === 1 ? "md:mt-10" : i % 5 === 3 ? "md:-mt-2 lg:mt-6" : "";

          return (
            <div key={src} className={`mb-6 break-inside-avoid md:mb-7 ${stagger}`}>
              <button
                type="button"
                onClick={() => onImageClick(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-charcoal/10 text-left ring-1 ring-charcoal/10 transition duration-500 hover:ring-olive/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={2000}
                  height={1334}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={i < 4 ? "eager" : "lazy"}
                  className="h-auto w-full transition duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
