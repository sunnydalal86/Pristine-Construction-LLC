interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-px w-8 ${dark ? "bg-sage/50" : "bg-olive/40"}`} />
      <span
        className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
          dark ? "text-sage/80" : "text-olive/70"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
