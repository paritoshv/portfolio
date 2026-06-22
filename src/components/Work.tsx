import { projects } from "@/content/site";
import Reveal from "./Reveal";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      ↗
    </span>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-3 text-2xl tracking-tight sm:text-3xl">
          What I&apos;ve built recently.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 0.06}
            className={`bg-bg ${p.featured ? "sm:col-span-2" : ""}`}
          >
            <article className="flex h-full flex-col p-7 transition-colors hover:bg-surface">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-base text-fg">{p.name}</h3>
                  <p className="mt-1 text-sm text-accent-dim">{p.tagline}</p>
                </div>
                <span className="eyebrow shrink-0 pt-1">{p.proves}</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.7rem] text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-5 pt-1 text-sm">
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
