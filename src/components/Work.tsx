import { projects } from "@/content/site";
import Reveal from "./Reveal";
import Schematic from "./Schematic";

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      ↗
    </span>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I&apos;ve built recently.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <article className="grid items-start gap-8 md:grid-cols-[320px_1fr] md:gap-12">
              <div className="panel overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="ml-2 font-mono text-[0.62rem] tracking-wider text-faint">
                    {p.name}
                  </span>
                </div>
                <Schematic kind={p.schematic} />
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-mono text-[0.95rem] text-fg">{p.name}</h3>
                  <span className="font-mono text-xs text-faint">{p.proves}</span>
                </div>

                <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">
                  {p.tagline}
                </p>

                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                  {p.description}
                </p>

                <p className="mt-5 font-mono text-xs text-faint">{p.stack.join(" · ")}</p>

                <div className="mt-6 flex items-center gap-6 text-sm">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                  >
                    Code <Arrow />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                    >
                      Live <Arrow />
                    </a>
                  )}
                  {p.status && (
                    <span className="font-mono text-xs text-faint">{p.status}</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
