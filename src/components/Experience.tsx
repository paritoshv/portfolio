import { experience } from "@/content/site";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 text-2xl tracking-tight sm:text-3xl">
          Where I&apos;ve worked.
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="grid gap-6 border-t border-border py-9 sm:grid-cols-[1fr_2fr]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg text-fg">{job.company}</h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-accent-dim">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      NOW
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{job.role}</p>
                <p className="mt-1 font-mono text-xs text-faint">{job.period}</p>
              </div>

              <div>
                <ul className="flex flex-col gap-3">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-dim" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.7rem] text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
