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
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer";
  const variants = {
    solid:
      "bg-olive text-cream-light hover:bg-forest hover:scale-[1.02] hover:shadow-lg",
    ghost:
      "border border-tan text-forest hover:border-olive hover:scale-[1.02] hover:shadow-sm",
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
