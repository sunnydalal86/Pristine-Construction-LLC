interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-px w-8 ${dark ? "bg-sage/60" : "bg-olive"}`} />
      <span
        className={`text-xs font-medium uppercase tracking-[0.12em] ${
          dark ? "text-sage" : "text-olive"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
