import { Mail } from 'lucide-react'
import { email, navLinks } from '@/lib/site'
import { FancyText } from '@/components/ui/fancy-text';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[70rem] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 text-center md:pt-32">
        <p className="text-xs text-white/50"> Contact</p>
        <h2 className="mt-5 text-5xl font-medium tracking-tighter text-white sm:text-7xl">
          <FancyText
            className="text-white/20"
            fillClassName="text-white"
            stagger={0.05}
            duration={1.2}
            delay={0.2}
          >
            {"Let's Make It"}
          </FancyText>
          
          <span className="font-serif font-normal italic tracking-tight text-white/50">
            Happen
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/50">
          Always open to new opportunities, collaborations, and creative
          challenges. Let&apos;s work together to bring your ideas to life.
        </p>

        <a
          href="https://wa.me/6285117321033"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass group mt-10 inline-flex w-fit items-center gap-3 self-center rounded-full border-white/25 bg-black/40 py-2 pl-2.5 pr-6 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/50 hover:bg-white/15 hover:shadow-[inset_0_1px_1px_rgb(255_255_255/0.45),0_20px_60px_-12px_rgb(0_0_0/0.8),0_0_70px_6px_rgb(255_255_255/0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-transform group-hover:scale-110">
            <svg className="size-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
           </svg>
          </span>
          Get in Touch
        </a>
      </div>

      <footer className="relative mx-auto mt-24 max-w-6xl px-6 pb-8 md:mt-32">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <p>&copy; 2026 Daryl Abiyyu. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
