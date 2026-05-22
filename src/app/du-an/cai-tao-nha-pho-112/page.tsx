import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NestzLogo } from "@/components/NestzLogo";
import { QuickContactLinks } from "@/components/QuickContactLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/images";
import { siteContent } from "@/data/siteContent";

const project = siteContent.caseStudies.caiTaoNhaPho112;
const projectImages = images.projects.caiTaoNhaPho112;

function FramedImage({
  src,
  alt,
  label,
  ratio = "aspect-[4/5]",
  priority = false
}: {
  src: string;
  alt: string;
  label: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <figure className="group">
      <div className={`relative overflow-hidden border border-stone-300 bg-concrete ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/76 to-transparent p-5">
          <figcaption className="text-xs font-bold uppercase tracking-[0.16em] text-paper">
            {label}
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

export default function ProjectCaseStudyPage() {
  return (
    <main className="bg-paper pb-20 text-charcoal md:pb-0">
      <Navbar />

      <section className="relative min-h-[92svh] overflow-hidden bg-charcoal px-5 pb-16 pt-28 text-paper md:px-8 md:pb-24">
        <Image
          src={projectImages.afterGallery[0]}
          alt="Mặt tiền nhà phố 112 sau cải tạo bởi NESTZ Design & Build"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/84 via-charcoal/58 to-charcoal/88" />
        <div className="absolute inset-0 site-grid opacity-[0.1]" />
        <div className="relative mx-auto flex min-h-[calc(92svh-7rem)] max-w-7xl flex-col justify-end">
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <NestzLogo tone="light" />
              <span className="h-px w-12 bg-clay" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-concrete">
                Case study cải tạo · Tuyên Quang
              </p>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-8xl">
              {project.hero.title}
            </h1>
            <div className="mt-8 grid max-w-5xl gap-6 border-l-2 border-clay pl-5 md:grid-cols-[1fr_auto] md:items-end">
              <p className="text-base leading-7 text-stone-100 md:text-xl">
                {project.hero.subtitle}
              </p>
              <Link
                href="/#lead-form"
                className="w-fit border border-clay bg-clay px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-paper shadow-[0_16px_42px_rgba(184,88,43,0.34)] transition hover:border-paper hover:bg-paper hover:text-charcoal"
              >
                {project.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-clay">
              {project.overview.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Một dự án cải tạo cần rõ cả hình ảnh, chi phí và cách thi công.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-stone-300 bg-stone-300 sm:grid-cols-2">
            {project.overview.facts.map((fact) => (
              <div key={fact.label} className="bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-clay">
                  {fact.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-charcoal">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 text-paper md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              {project.beforeAfter.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-paper md:text-5xl">
              {project.beforeAfter.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <FramedImage
              src={projectImages.beforeGallery[0]}
              alt="Hiện trạng mặt tiền nhà phố 112 trước cải tạo"
              label={project.beforeAfter.beforeLabel}
              ratio="aspect-[3/4]"
            />
            <FramedImage
              src={projectImages.afterGallery[0]}
              alt="Mặt tiền nhà phố 112 sau cải tạo"
              label={project.beforeAfter.afterLabel}
              ratio="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={project.currentProblems.eyebrow}
              title={project.currentProblems.title}
            />
            <div className="mt-10 grid gap-4">
              {project.currentProblems.items.map((item, index) => (
                <div key={item} className="grid grid-cols-[44px_1fr] border-t border-stone-300 pt-5">
                  <span className="text-sm font-bold text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-8 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow={project.solution.eyebrow}
              title={project.solution.title}
            />
            <div className="mt-10 grid gap-4">
              {project.solution.items.map((item, index) => (
                <div key={item} className="grid grid-cols-[44px_1fr] border-t border-stone-300 pt-5">
                  <span className="text-sm font-bold text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-8 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-grid bg-concrete/35 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={project.renderReality.eyebrow}
            title={project.renderReality.title}
            intro={project.renderReality.intro}
          />
          <p className="mt-8 w-fit border-l-2 border-clay pl-4 text-lg font-semibold text-charcoal">
            {project.renderReality.caption}
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <FramedImage
              src={projectImages.renderGallery[0]}
              alt="Phối cảnh thiết kế mặt tiền nhà phố 112"
              label={project.renderReality.renderLabel}
              ratio="aspect-[4/3]"
            />
            <FramedImage
              src={projectImages.afterGallery[1]}
              alt="Ảnh thực tế hoàn thiện nhà phố 112 sau cải tạo"
              label={project.renderReality.realityLabel}
              ratio="aspect-[4/3]"
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {projectImages.renderGallery.slice(1).map((src, index) => (
              <FramedImage
                key={src}
                src={src}
                alt={`Phối cảnh thiết kế nhà phố 112 góc ${index + 2}`}
                label={`Render 0${index + 2}`}
                ratio="aspect-[4/3]"
              />
            ))}
            <FramedImage
              src={projectImages.afterGallery[0]}
              alt="Chi tiết mặt tiền hoàn thiện của nhà phố 112"
              label="Thực tế"
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 text-paper md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                {project.process.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                {project.process.title}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <FramedImage
                src={projectImages.processGallery[0]}
                alt="Quá trình thi công cải tạo nhà phố 112"
                label="Quá trình thi công"
                ratio="aspect-[4/5]"
              />
              <div className="grid gap-4">
                <FramedImage
                  src={projectImages.processGallery[1]}
                  alt="Công trường cải tạo nhà phố 112 trong quá trình hoàn thiện"
                  label="Theo sát hiện trường"
                  ratio="aspect-[4/3]"
                />
                <div className="grid gap-px overflow-hidden border border-paper/20 bg-paper/20 sm:grid-cols-2">
                  {project.process.cards.map((card, index) => (
                    <div key={card} className="min-h-40 bg-charcoal p-5">
                      <p className="text-sm font-bold text-clay">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-10 text-xl font-semibold leading-tight text-paper">
                        {card}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-clay">
              {project.result.eyebrow}
            </p>
            <p className="max-w-4xl text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
              {project.result.text}
            </p>
          </div>
          <FramedImage
            src={projectImages.afterGallery[1]}
            alt="Không gian hoàn thiện sau cải tạo nhà phố 112"
            label="Sau cải tạo"
            ratio="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 text-paper md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              {project.finalCta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
              {project.finalCta.text}
            </p>
            <div className="mt-7">
              <QuickContactLinks tone="light" />
            </div>
          </div>
          <Link
            href="/#lead-form"
            className="w-fit border border-clay bg-clay px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-paper transition hover:border-paper hover:bg-paper hover:text-charcoal"
          >
            {project.finalCta.button}
          </Link>
        </div>
      </section>

      <Footer />

      <Link
        href="/#lead-form"
        className="fixed inset-x-4 bottom-4 z-50 border border-clay bg-clay px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-paper shadow-[0_18px_48px_rgba(23,23,23,0.4)] transition hover:border-charcoal hover:bg-charcoal md:hidden"
      >
        Tư vấn cải tạo
      </Link>
    </main>
  );
}
