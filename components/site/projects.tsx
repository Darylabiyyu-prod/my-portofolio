import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FancyText } from '@/components/ui/fancy-text';
import { projects, type Project } from '@/lib/site';
import { cn } from '@/lib/utils';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function normalizeImagePath(path: string) {
  if (path.startsWith('public/')) {
    return path.replace(/^public/, '');
  }
  return path.startsWith('/') ? path : `/${path}`;
}

export function Projects() {
  const total = projects.length;

  return (
    <section id="projects" className="relative py-24 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs text-white/50">Portfolio</p>
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

        {/* Ambient Glow Orbs */}
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="orb-drift absolute left-[8%] top-[10%] size-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent)] md:size-96" />
            <div className="orb-drift-reverse absolute bottom-[6%] right-[8%] size-80 rounded-full bg-[radial-gradient(closest-side,rgba(190,192,205,0.16),transparent)] md:size-120" />
          </div>

          {/* Dynamic Bento Grid */}
          <div
            className={cn(
              'relative grid gap-6 md:gap-8',
              total === 1 && 'grid-cols-1',
              total === 2 && 'grid-cols-1 md:grid-cols-2',
              total >= 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            )}
          >
            {projects.map((project, index) => {
              const isFullWidth = total === 1;
              const isFeaturedWide = total > 2 && (project.featured || index === 0);
              const isWide = isFullWidth || isFeaturedWide;

              const spanClass = isFullWidth
                ? 'col-span-full'
                : isFeaturedWide
                  ? 'md:col-span-2 lg:col-span-2'
                  : 'col-span-1';

              return (
                <article
                  key={project.title}
                  className={cn(
                    'liquid-glass group/card relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:border-white/30 sm:p-8 md:rounded-[2.5rem] md:p-10',
                    spanClass
                  )}
                >
                  {isWide ? (
                    /* Full-width / Wide Bento Card Showcase Layout */
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                      {/* Project Info Column */}
                      <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-xs text-white/70 backdrop-blur">
                            <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]" />
                            Featured Project
                          </div>

                          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                            {project.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-6">
                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur transition-colors hover:border-white/20 hover:text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Links */}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="liquid-glass group/btn inline-flex items-center gap-2 rounded-full border-white/25 bg-black/40 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] sm:text-sm"
                              >
                                <span>Live Demo</span>
                                <ArrowUpRight className="size-4 text-white/70 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-white" />
                              </a>
                            )}

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-xs font-medium text-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white sm:text-sm"
                              >
                                <GithubIcon className="size-4 text-white/70 transition-colors group-hover/btn:text-white" />
                                <span>GitHub</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Preview Showcase Column */}
                      <div className="lg:col-span-7">
                        <div className="group/mockup relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)]">
                          {/* Browser Titlebar */}
                          <div className="flex items-center justify-between border-b border-white/10 bg-white/3 px-4 py-2.5">
                            <div className="flex items-center gap-1.5">
                              <span className="size-2.5 rounded-full bg-white/20" />
                              <span className="size-2.5 rounded-full bg-white/20" />
                              <span className="size-2.5 rounded-full bg-white/20" />
                            </div>
                            <div className="rounded-full border border-white/10 bg-white/3 px-3 py-0.5 text-[11px] font-mono text-white/40">
                              {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : 'preview'}
                            </div>
                            <div className="w-10" />
                          </div>

                          {/* Image Container with Link */}
                          <a
                            href={project.liveUrl || project.githubUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block aspect-16/10 w-full overflow-hidden bg-black/40"
                            tabIndex={-1}
                            aria-label={`Open ${project.title} live preview`}
                          >
                            <Image
                              src={normalizeImagePath(project.image)}
                              alt={`${project.title} Preview`}
                              fill
                              priority
                              sizes="(max-width: 1024px) 100vw, 680px"
                              className="object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover/card:opacity-20" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Vertical Bento Card */
                    <div className="flex h-full flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Mockup Frame on Top */}
                        <div className="group/mockup relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-lg">
                          <div className="flex items-center justify-between border-b border-white/10 bg-white/3 px-3.5 py-2">
                            <div className="flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-white/20" />
                              <span className="size-2 rounded-full bg-white/20" />
                              <span className="size-2 rounded-full bg-white/20" />
                            </div>
                            <div className="truncate rounded-full border border-white/10 bg-white/3 px-2.5 py-0.5 text-[10px] font-mono text-white/40">
                              {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : 'preview'}
                            </div>
                          </div>
                          <a
                            href={project.liveUrl || project.githubUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block aspect-16/10 w-full overflow-hidden bg-black/40"
                            tabIndex={-1}
                            aria-label={`Open ${project.title} preview`}
                          >
                            <Image
                              src={normalizeImagePath(project.image)}
                              alt={`${project.title} Preview`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                            />
                          </a>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-white/60">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-5 pt-2">
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-2.5 py-0.5 text-[11px] font-medium text-white/70 backdrop-blur"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-2.5 pt-1">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="liquid-glass group/btn inline-flex items-center gap-1.5 rounded-full border-white/25 bg-black/40 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/15"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight className="size-3.5 text-white/70 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-white" />
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                            >
                              <GithubIcon className="size-3.5 text-white/70 transition-colors group-hover/btn:text-white" />
                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
