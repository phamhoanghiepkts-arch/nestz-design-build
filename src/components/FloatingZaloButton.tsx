import { siteContent } from "@/data/siteContent";

export function FloatingZaloButton() {
  const { contact } = siteContent;

  return (
    <a
      href={contact.zaloHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`${contact.zaloFloatingLabel} - ${contact.phone}`}
      className="fixed bottom-20 right-4 z-[60] inline-flex min-h-12 items-center gap-2 border border-zalo bg-zalo px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(23,23,23,0.2)] transition hover:scale-[1.02] hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zalo md:bottom-7 md:right-7"
    >
      <span
        aria-hidden="true"
        className="grid size-6 place-items-center border border-white/45"
      >
        <span className="relative block h-3.5 w-4 border-2 border-white before:absolute before:-bottom-1 before:left-1 before:size-1.5 before:rotate-45 before:border-b-2 before:border-r-2 before:border-white before:bg-zalo" />
      </span>
      <span>{contact.zaloFloatingLabel}</span>
    </a>
  );
}
