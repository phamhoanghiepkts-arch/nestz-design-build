import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { MotionSection } from "@/components/MotionSection";
import { Navbar } from "@/components/Navbar";
import { NestzLogo } from "@/components/NestzLogo";
import { QuickContactLinks } from "@/components/QuickContactLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/images";
import { siteContent } from "@/data/siteContent";

const {
  brand,
  hero,
  painPoints,
  services,
  featuredProjects,
  behindBuild,
  process,
  founder,
  leadForm
} = siteContent;

export default function Home() {
  return (
    <main id="top" className="bg-paper text-charcoal">
      <Navbar />

      <section className="relative overflow-hidden bg-charcoal pt-16 text-paper">
        <div className="absolute inset-0 site-grid opacity-[0.16]" />
        <div className="relative mx-auto grid min-h-[94svh] max-w-7xl gap-10 px-5 pb-10 pt-12 md:px-8 md:pb-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="pb-2 lg:pb-10">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <NestzLogo tone="light" />
              <p className="max-w-md text-xs font-bold uppercase tracking-[0.16em] text-concrete">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-paper md:text-7xl lg:text-8xl">
              {hero.headline}
            </h1>

            <div className="mt-8 grid max-w-5xl gap-6 border-l-2 border-clay pl-5 md:grid-cols-[1fr_auto] md:items-end">
              <p className="text-base leading-7 text-stone-100 md:text-xl">
                {hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                <a
                  href={hero.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit border border-clay bg-clay px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-paper shadow-[0_16px_42px_rgba(184,88,43,0.34)] transition hover:border-paper hover:bg-paper hover:text-charcoal"
                >
                  {hero.cta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="w-fit border border-paper/50 px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-paper transition hover:border-paper hover:bg-paper hover:text-charcoal"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <p className="mt-5 text-xl font-bold text-zalo">📞 {siteContent.contact.phone}</p>

            <div className="mt-10 grid max-w-5xl gap-px overflow-hidden border border-paper/20 bg-paper/20 sm:grid-cols-3">
              {hero.proofs.map((item) => (
                <div key={item} className="bg-charcoal/46 px-4 py-4 backdrop-blur">
                  <p className="text-sm font-semibold text-paper">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Replace this editorial placeholder with images.hero / public/images/founder-site.jpg when the real KTS Hiệp / worksite image is available. */}
          <div className="relative min-h-[520px] border border-paper/20 bg-paper/8 p-4 sm:p-5">
            <div className="absolute -left-6 top-12 hidden h-32 w-12 bg-clay lg:block" />
            <div className="grid h-full min-h-[488px] gap-4 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="worksite-placeholder flex min-h-80 flex-col justify-between p-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-paper/80">
                  <span>{hero.visual.founderName}</span>
                  <span>{hero.visual.location}</span>
                </div>
                <div>
                  <p className="max-w-xs text-3xl font-semibold leading-tight">
                    {hero.visual.title}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-stone-200">
                    {hero.visual.description}
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="worksite-detail min-h-56 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay">
                    {hero.visual.detailLabel}
                  </p>
                  <p className="mt-20 text-xl font-semibold leading-tight">
                    {hero.visual.detailText}
                  </p>
                </div>
                <div className="border border-paper/20 bg-paper p-5 text-charcoal">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay">
                    {hero.visual.slotLabel}
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight">
                    {hero.visual.slotFilename}
                  </p>
                  <p className="mt-2 text-xs text-stone-500">{images.hero}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection id="pain-points" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeader
            eyebrow={painPoints.eyebrow}
            title={painPoints.title}
            intro={painPoints.intro}
          />
          <div className="grid gap-3">
            {painPoints.items.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[48px_1fr] border-t border-stone-300 py-6 last:border-b"
              >
                <span className="text-sm font-semibold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl leading-8 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="site-grid bg-concrete/35 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={services.eyebrow}
            title={services.title}
            intro={services.intro}
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-stone-300 bg-stone-300 md:grid-cols-2">
            {services.items.map((service) => (
              <article key={service.title} className="bg-paper p-7 md:p-9">
                <h3 className="text-2xl font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-700">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow={featuredProjects.eyebrow}
            title={featuredProjects.title}
            intro={featuredProjects.intro}
          />
          <div className="grid gap-4">
            {featuredProjects.items.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group overflow-hidden border border-stone-300 bg-white transition hover:border-clay"
              >
                <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-72 overflow-hidden bg-concrete">
                    <Image
                      src={images.projects.caiTaoNhaPho112.afterGallery[0]}
                      alt="Mặt tiền nhà phố 112 sau cải tạo bởi NESTZ"
                      fill
                      sizes="(min-width: 768px) 38vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/46 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                    <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">
                      Case study
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700 md:text-lg">
                      {project.desc}
                    </p>
                    </div>
                  <span className="w-fit border border-charcoal px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-charcoal transition group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                    Xem dự án
                  </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-charcoal px-5 py-20 text-paper md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              {behindBuild.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {behindBuild.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-300 md:text-lg">
              {behindBuild.intro}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Replace first real gallery images with images.worksiteGallery: public/images/worksite-01.jpg, public/images/worksite-02.jpg, and public/images/worksite-03.jpg. */}
            {behindBuild.gallery.map((item, index) => (
              <div
                key={item.title}
                className="gallery-tile flex min-h-64 flex-col justify-between p-5"
              >
                <span className="text-sm text-stone-300">0{index + 1}</span>
                <div>
                  <p className="max-w-52 text-2xl font-semibold leading-tight">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.desc}</p>
                  <p className="mt-4 text-xs text-stone-400">
                    {images.worksiteGallery[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="process" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={process.eyebrow}
            title={process.title}
          />
          <div className="mt-12 grid gap-4">
            {process.steps.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 border-t border-stone-300 py-6 md:grid-cols-[180px_1fr]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
                  {process.stepPrefix} {index + 1}
                </span>
                <p className="text-2xl leading-tight text-ink md:text-4xl">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="bg-charcoal p-5 text-paper">
            {/* Replace this founder visual block with images.founder / public/images/founder-site.jpg when final photography is ready. */}
            <div className="flex min-h-[560px] flex-col justify-between border border-paper/25 p-6">
              <div className="flex items-center justify-between gap-5">
                <NestzLogo tone="light" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-clay">
                  {brand.location}
                </span>
              </div>
              <div>
                <p className="mb-5 max-w-xs text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                  {founder.visualLabel}
                </p>
                <p className="max-w-sm text-4xl font-semibold leading-tight text-paper md:text-5xl">
                  {founder.visualQuote}
                </p>
                <p className="mt-4 text-xs text-stone-400">{images.founder}</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow={founder.eyebrow}
              title={founder.title}
              intro={founder.intro}
            />
            <div className="mt-8 grid gap-4">
              {founder.notes.map((note, index) => (
                <div key={note} className="grid grid-cols-[44px_1fr] border-t border-stone-300 pt-5">
                  <span className="text-sm font-bold text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-8 text-stone-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="lead-form" className="bg-charcoal px-5 py-20 text-paper md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              {leadForm.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {leadForm.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-300 md:text-lg">
              {leadForm.intro}
            </p>
            <div className="mt-8 border-l-2 border-clay pl-5">
              <p className="text-xl leading-8 text-paper">
                {leadForm.reassurance}
              </p>
            </div>
            <div className="mt-8">
              <QuickContactLinks tone="light" />
            </div>
          </div>
          <div className="border border-clay/60 bg-paper p-5 text-charcoal shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-8">
            <div className="mb-6 flex flex-col gap-2 border-b border-stone-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">
                  {leadForm.cardEyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{leadForm.cardTitle}</h3>
              </div>
              <p className="text-sm text-stone-600">{leadForm.cardNote}</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
