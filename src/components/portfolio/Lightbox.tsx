"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useIsClient } from "@/hooks/useIsClient";

type LightboxProps = {
  open: boolean;
  images: string[];
  index: number;
  projectTitle: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  open,
  images,
  index,
  projectTitle,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!isClient) return null;

  const src = images[index];
  const total = images.length;
  const alt = `${projectTitle} — photograph ${index + 1} of ${total}`;

  return createPortal(
    <AnimatePresence>
      {open && src ? (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={projectTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/92 backdrop-blur-[2px]"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="absolute inset-0 cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[61] mx-auto flex max-h-[min(92vh,920px)] w-full max-w-[min(96vw,1200px)] flex-col px-4 md:px-6"
          >
            <div className="mb-4 flex shrink-0 items-center justify-between gap-4 text-cream-light/90">
              <p className="max-w-[70%] truncate font-serif text-sm tracking-[-0.02em] md:text-base">
                {projectTitle}
              </p>
              <div className="flex items-center gap-3">
                <span className="tabular-nums text-[11px] font-medium uppercase tracking-[0.16em] text-sage-light/90">
                  {index + 1} <span className="text-sage/70">/</span> {total}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="relative flex h-9 w-9 items-center justify-center rounded-full border border-cream-light/25 text-cream-light transition hover:border-cream-light/50 hover:bg-cream-light/10"
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
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-0 z-[62] flex h-11 w-11 items-center justify-center rounded-full border border-cream-light/20 bg-charcoal/50 text-cream-light transition hover:border-cream-light/40 hover:bg-charcoal/80 md:-left-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="relative flex max-h-[min(78vh,800px)] w-full items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${src}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="relative flex h-full max-h-[min(78vh,800px)] w-full items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={2400}
                      height={1600}
                      className="max-h-[min(78vh,800px)] w-auto max-w-full object-contain"
                      sizes="96vw"
                      priority={open}
                      loading={open ? "eager" : "lazy"}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-0 z-[62] flex h-11 w-11 items-center justify-center rounded-full border border-cream-light/20 bg-charcoal/50 text-cream-light transition hover:border-cream-light/40 hover:bg-charcoal/80 md:-right-2"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
