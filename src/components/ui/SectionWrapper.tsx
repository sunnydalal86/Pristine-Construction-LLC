"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "cream" | "dark" | "tan" | "sage" | "forest";
}

const bgClasses = {
  cream: "bg-cream-light text-forest",
  dark: "bg-forest text-cream-light",
  tan: "bg-mist text-forest",
  sage: "bg-stone/70 text-forest",
  forest: "bg-forest text-cream-light",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  bg = "cream",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-32 md:py-40 lg:py-52 ${bgClasses[bg]} ${className}`}
    >
      <motion.div
        className="mx-auto max-w-6xl px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
