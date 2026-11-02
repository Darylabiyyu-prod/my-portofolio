import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { FancyText } from '@/components/ui/fancy-text';

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-6 md:pt-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/70 backdrop-blur">
          <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]" />
          Available for new opportunities
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-5xl font-medium leading-[0.95] tracking-tighter text-white sm:text-7xl md:text-8xl">
            <FancyText
              className='text-white/20'
              fillClassName='text-white'
              stagger={0.05}
              duration={1.2}
              delay={0.2}
            >
              Hi I&apos;m Daryl Abiyyu
            </FancyText>

            <span className="mt-1 block font-serif text-6xl font-normal italic tracking-tight text-white/55 sm:text-8xl md:text-9xl">
              Web Designer
            </span>
          </h1>
          <p className="mt-8 text-sm text-white/55 sm:text-base">
            Turning your vision into digital reality.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="relative mx-auto h-[26rem] w-full max-w-[22rem] sm:h-[30rem] md:h-[32rem]">
            <div className="absolute inset-x-6 bottom-0 h-3/4 rounded-full bg-white/10 blur-3xl" />
            <div className="relative size-full overflow-hidden rounded-t-[11rem] border border-b-0 border-white/10 bg-black">
              <Image
                src="/images/hero-portrait.png"
                alt="Portrait of Daryl Abiyyu wearing glasses and a dark coat in front of wooden slats"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 352px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070707] to-transparent" />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:flex-row md:items-end md:justify-between">
            <div className="liquid-glass flex w-full max-w-xs items-center gap-3 rounded-2xl p-3 pr-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black/60 text-white">
                <Sparkles className="size-4" />
              </span>
              <p className="text-xs leading-snug text-white/60">
                Ready to take on new{' '}
                <strong className="font-semibold text-white">
                  creative projects &amp; collaborations.
                </strong>
              </p>
            </div>

            <a
              href="https://wa.me/6285117321033"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass group flex items-center gap-3 rounded-full p-1.5 pr-5 text-xs font-medium text-white"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-transform group-hover:scale-110">
                <svg className="size-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </span>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}