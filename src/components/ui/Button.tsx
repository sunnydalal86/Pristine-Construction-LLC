import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.8rem] font-medium tracking-[0.04em] uppercase transition-all duration-400 cursor-pointer";
  const variants = {
    solid:
      "bg-olive text-cream-light hover:bg-forest hover:shadow-lg active:scale-[0.98]",
    ghost:
      "border border-olive/30 text-forest hover:border-olive hover:bg-olive/5 active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
