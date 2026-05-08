"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useIsClient } from "@/hooks/useIsClient";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  body: string[];
};

type BlogPostModalProps = {
  post: BlogPost | null;
  onClose: () => void;
};

export default function BlogPostModal({ post, onClose }: BlogPostModalProps) {
  const isClient = useIsClient();

  useEffect(() => {
    if (!post) return;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [post, onClose]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {post ? (
        <motion.div
          key={post.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`blog-${post.id}-title`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#10100f]/88 backdrop-blur-[12px]"
        >
          <button
            type="button"
            aria-label="Close article"
            onClick={onClose}
            className="fixed inset-0 cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.986 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.992 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[51] mx-auto my-4 max-w-3xl md:my-10"
          >
            <div className="overflow-hidden rounded-sm border border-charcoal/[0.08] bg-mist shadow-[0_32px_100px_-36px_rgba(0,0,0,0.88)]">
              <div className="relative h-[min(36vh,400px)] min-h-[180px] w-full overflow-hidden md:h-[min(38vh,440px)]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:768px) 100vw, 42rem"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mist via-mist/30 to-transparent"
                  aria-hidden
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="pointer-events-auto absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-forest/12 bg-mist/85 text-forest/75 shadow-sm backdrop-blur-sm transition duration-300 hover:border-forest/25 hover:bg-mist hover:text-forest md:right-6 md:top-6"
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

              <div className="border-t border-forest/[0.06] px-6 pb-12 pt-8 md:px-12 md:pb-14 md:pt-10 lg:px-14">
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
                  07 / Field notes
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] text-olive/58">
                  <time>{post.date}</time>
                  <span className="h-0.5 w-0.5 rounded-full bg-olive/40" aria-hidden />
                  <span>{post.readTime}</span>
                </div>
                <h2
                  id={`blog-${post.id}-title`}
                  className="mt-6 font-serif text-[clamp(1.45rem,3.6vw,2.15rem)] leading-[1.12] tracking-[-0.03em] text-forest"
                >
                  {post.title}
                </h2>
                <p className="mt-4 text-[1.02rem] font-light leading-[1.75] tracking-[-0.015em] text-forest/55">
                  {post.excerpt}
                </p>

                <div className="mt-10 space-y-5 border-t border-forest/[0.06] pt-10">
                  {post.body.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-[0.95rem] leading-[1.85] tracking-[-0.01em] text-forest/78"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <p className="mt-14 border-t border-forest/[0.06] pt-10 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-forest/36">
                  Sample article · Pristine Construction · Bay Area
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
