import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.8rem] font-medium tracking-[0.04em] uppercase transition-[transform,box-shadow,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer active:scale-[0.985] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55";
  const variants = {
    solid:
      "bg-olive text-cream-light hover:bg-forest hover:shadow-lg hover:-translate-y-px",
    ghost:
      "border border-olive/30 text-forest hover:border-olive hover:bg-olive/5 hover:-translate-y-px",
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
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
