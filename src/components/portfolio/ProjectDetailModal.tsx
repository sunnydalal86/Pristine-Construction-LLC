"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioProject } from "./types";
import ProjectGallery from "./ProjectGallery";
import { useIsClient } from "@/hooks/useIsClient";

type ProjectDetailModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
  onImageClick: (index: number) => void;
  /** When true, Escape will not close the modal (e.g. lightbox is open). */
  suppressEscapeClose?: boolean;
};

export default function ProjectDetailModal({
  project,
  onClose,
  onImageClick,
  suppressEscapeClose = false,
}: ProjectDetailModalProps) {
  const isClient = useIsClient();

  useEffect(() => {
    if (!project || suppressEscapeClose) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose, suppressEscapeClose]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          key={project.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-${project.id}-title`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#10100f]/90 backdrop-blur-[8px]"
        >
          <button
            type="button"
            aria-label="Close project view"
            onClick={onClose}
            className="fixed inset-0 cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.99 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[51] mx-auto my-4 min-h-[calc(100dvh-2rem)] max-w-6xl md:my-8"
          >
            <div className="overflow-hidden rounded-sm border border-charcoal/[0.08] bg-mist shadow-[0_32px_100px_-36px_rgba(0,0,0,0.88)]">
              <div className="relative h-[min(40vh,520px)] min-h-[200px] w-full overflow-hidden md:h-[min(44vh,560px)]">
                <Image
                  src={project.images[0]}
                  alt=""
                  fill
                  className="object-cover object-center transition duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width:768px) 100vw, min(1152px,100vw)"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mist via-mist/25 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/10 to-transparent"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-24 md:px-12 md:pb-12 lg:px-14">
                  <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-forest/40">
                    03 / Portfolio
                  </p>
                  <h2
                    id={`project-${project.id}-title`}
                    className="mt-5 max-w-3xl font-serif text-[clamp(1.65rem,3.8vw,2.75rem)] leading-[1.05] tracking-[-0.035em] text-forest"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.72] tracking-[-0.012em] text-forest/55">
                    {project.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-forest/12 bg-mist/85 text-forest/75 shadow-sm backdrop-blur-sm transition duration-300 hover:border-forest/25 hover:bg-mist hover:text-forest md:right-6 md:top-6"
                  aria-label="Close"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    aria-hidden
                  >
                    <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="border-t border-forest/[0.06] px-6 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                <div className="grid grid-cols-1 gap-8 border-b border-forest/[0.06] pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-14">
                  <Meta label="Project type" value={project.projectType} />
                  <Meta label="Location" value={project.location} />
                  <Meta label="Scope" value={project.scope} />
                  <Meta label="Completion" value={project.completion} />
                </div>

                <div className="pt-12 md:pt-14">
                  <div className="flex flex-col gap-3 border-b border-forest/[0.06] pb-8 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-olive/50">
                        Project gallery
                      </p>
                      <p className="mt-2 max-w-md font-serif text-lg tracking-[-0.02em] text-forest/80">
                        Photography from site — full aspect, editorial layout.
                      </p>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-forest/38">
                      {String(project.images.length).padStart(2, "0")} photographs
                    </p>
                  </div>

                  <ProjectGallery project={project} onImageClick={onImageClick} />
                </div>

                <p className="mt-16 border-t border-forest/[0.06] pt-10 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-forest/36">
                  Pristine Construction · Bay Area design-build
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-medium uppercase tracking-[0.26em] text-olive/48">
        {label}
      </dt>
      <dd className="mt-2.5 text-[0.875rem] font-normal leading-snug tracking-[-0.01em] text-forest/88">
        {value}
      </dd>
    </div>
  );
}
