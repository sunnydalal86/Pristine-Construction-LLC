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
  sage: "bg-stone/60 text-forest",
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
      className={`py-24 md:py-32 lg:py-40 ${bgClasses[bg]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}
