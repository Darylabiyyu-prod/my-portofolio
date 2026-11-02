import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { location, socialLinks } from '@/lib/site'
import { FancyText } from '@/components/ui/fancy-text';

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-34 scroll-mt-14">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs text-white/50"> Who Am I</p>
        <h2 className="mt-4 mb-12 md:mb-20 text-2xl font-medium tracking-tighter text-white sm:text-3xl md:text-6xl">
          <FancyText
            className="text-white/20"
            fillClassName="text-white"
            stagger={0.05}
            duration={1.2}
            delay={0.3}
          >
            Beyond Boundaries
          </FancyText>{' '}
          <span className="font-[family-name:var(--font-serif-display)] font-normal italic tracking-tight text-white/50">
            since 2023
          </span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[374/414] overflow-hidden rounded-3xl border border-white/10 bg-black">
              <Image
                src="/images/about-portrait.png"
                alt="Black and white portrait of Daryl Abiyyu standing between concrete walls"
                fill
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover"
              />
              <div className="liquid-glass absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-2xl bg-black/35 px-4 py-3 text-xs font-medium text-white">
                <MapPin className="size-3.5 text-white/70" />
                {location}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xl leading-[1.35] tracking-tight text-white/45 sm:text-2xl">
              <span className="text-white">
                I am a dedicated web designer committed to transforming client
                inspirations into living digital realities.
              </span>{' '}
              With a deep-rooted passion for design, I bring a broad reference
              scope, an open-minded approach, and creative problem-solving to
              every project.
            </p>

            <p className="text-base leading-relaxed text-white/50 sm:text-lg">
              My goal is to bridge the gap between imagination and functional
              execution, crafting unique web spaces that resonate with users.
              Based in {location}, I work with clients near and far to shape
              ideas into clear, considered and memorable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}