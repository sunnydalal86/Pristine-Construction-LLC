"use client";

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
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#121311]/88 backdrop-blur-[3px]"
        >
          <button
            type="button"
            aria-label="Close project view"
            onClick={onClose}
            className="fixed inset-0 cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.99 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[51] mx-auto my-6 min-h-[calc(100dvh-3rem)] max-w-6xl rounded-sm border border-white/[0.07] bg-mist px-5 py-10 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] md:my-10 md:px-10 md:py-14 lg:px-12 lg:py-16"
          >
            <div className="mb-10 flex items-start justify-between gap-6 border-b border-charcoal/10 pb-8">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-olive/65">
                  Project
                </p>
                <h2
                  id={`project-${project.id}-title`}
                  className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.35rem)] tracking-[-0.025em] text-forest"
                >
                  {project.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-forest/58">
                  {project.description}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition hover:border-forest/35 hover:bg-forest/5 hover:text-forest"
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

            <dl className="grid grid-cols-1 gap-6 border-b border-charcoal/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
              <Meta label="Project type" value={project.projectType} />
              <Meta label="Location" value={project.location} />
              <Meta label="Scope" value={project.scope} />
              <Meta label="Completion" value={project.completion} />
            </dl>

            <ProjectGallery project={project} onImageClick={onImageClick} />

            <p className="mt-14 border-t border-charcoal/10 pt-8 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-forest/40">
              Pristine Construction · Bay Area design-build
            </p>
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
      <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-olive/55">
        {label}
      </dt>
      <dd className="mt-2 text-[0.875rem] leading-snug text-forest/85">{value}</dd>
    </div>
  );
}
