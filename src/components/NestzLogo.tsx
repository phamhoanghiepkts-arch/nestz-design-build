type NestzLogoProps = {
  tone?: "dark" | "light";
  compact?: boolean;
};

export function NestzLogo({ tone = "dark", compact = false }: NestzLogoProps) {
  const textColor = tone === "light" ? "text-paper" : "text-charcoal";
  const mutedColor = tone === "light" ? "text-stone-300" : "text-stone-600";

  return (
    <span className={`inline-flex items-center gap-3 ${textColor}`}>
      <span className="flex flex-col leading-none">
        <span className="font-montserrat text-[24px] font-black uppercase tracking-[0.02em]">
          NESTZ
        </span>
        {!compact ? (
          <span className={`mt-1 text-[10px] font-bold uppercase tracking-[0.18em] ${mutedColor}`}>
            Design & Build
          </span>
        ) : null}
      </span>
      {!compact ? (
        <span className="h-9 w-px bg-clay" aria-hidden="true" />
      ) : null}
    </span>
  );
}
