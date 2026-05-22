type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
