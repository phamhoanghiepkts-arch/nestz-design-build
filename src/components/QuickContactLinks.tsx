import { siteContent } from "@/data/siteContent";

type QuickContactLinksProps = {
  tone?: "dark" | "light";
};

export function QuickContactLinks({ tone = "dark" }: QuickContactLinksProps) {
  const { contact } = siteContent;
  const linkClass =
    tone === "light"
      ? "border-paper/20 text-paper hover:border-clay hover:bg-clay"
      : "border-stone-300 text-charcoal hover:border-clay hover:bg-clay hover:text-paper";

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={contact.phoneHref}
        className={`border px-4 py-2.5 text-sm font-semibold transition ${linkClass}`}
      >
        Gọi {contact.phone}
      </a>
      <a
        href={contact.emailHref}
        className={`break-all border px-4 py-2.5 text-sm font-semibold transition ${linkClass}`}
      >
        {contact.email}
      </a>
      <a
        href={contact.facebookHref}
        target="_blank"
        rel="noreferrer"
        className={`border px-4 py-2.5 text-sm font-semibold transition ${linkClass}`}
      >
        {contact.facebook}
      </a>
    </div>
  );
}
