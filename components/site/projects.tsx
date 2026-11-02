import { FancyText } from '@/components/ui/fancy-text';
export function Projects() {

  return (
    <section id="projects" className="relative py-24 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs text-white/50"> Portfolio</p>
        <h2 className="mt-4 text-5xl font-medium tracking-tighter text-white sm:text-6xl md:text-7xl">
          <FancyText
            className="text-white/20"
            fillClassName="text-white"
            stagger={0.05}
            duration={1.2}
            delay={0.2}
          >
            Projects
          </FancyText>
          
        </h2>

        <div className="relative mt-14 flex items-center justify-center py-10 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="orb-drift absolute left-[12%] top-[8%] size-56 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.22),transparent)] md:size-80" />
            <div className="orb-drift-reverse absolute bottom-[4%] right-[10%] size-64 rounded-full bg-[radial-gradient(closest-side,rgba(190,192,205,0.2),transparent)] md:size-96" />
          </div>

          <div className="liquid-glass relative flex min-h-72 w-full max-w-4xl items-center justify-center rounded-[2.5rem] px-8 py-16 text-center md:min-h-96 md:rounded-[3.5rem] md:px-16">
            <p className="text-balance text-3xl font-medium uppercase leading-[1.1] tracking-tight text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.35)] sm:text-5xl md:text-6xl">
              OPEN FOR PROJECT AND OPPORTUNITIES
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
