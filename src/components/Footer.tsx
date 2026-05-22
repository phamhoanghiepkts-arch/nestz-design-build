import { NestzLogo } from "@/components/NestzLogo";
import { QuickContactLinks } from "@/components/QuickContactLinks";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  const { contact, footer } = siteContent;

  return (
    <footer className="bg-charcoal px-5 py-10 text-paper md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <NestzLogo tone="light" />
          <p className="mt-4 text-sm font-semibold text-paper">NESTZ Design & Build</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-stone-300">
            {footer.description}
          </p>
          <div className="mt-5">
            <QuickContactLinks tone="light" />
          </div>
        </div>
        <div className="text-sm leading-7 text-stone-300 md:text-right">
          <p>{contact.address}</p>
          <p>
            <a className="transition hover:text-paper" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </p>
          <p>
            <a className="transition hover:text-paper" href={contact.emailHref}>
              {contact.email}
            </a>
          </p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
