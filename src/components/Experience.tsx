import { experience } from "@/content/site";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;ve worked.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="grid gap-6 border-t border-border py-10 sm:grid-cols-[1fr_2fr]">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {job.company}
                  </h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
                      NOW
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted">{job.role}</p>
                <p className="mt-1 font-mono text-xs text-faint">{job.period}</p>
              </div>

              <div>
                <ul className="flex flex-col gap-3.5">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-3.5 text-sm leading-relaxed text-muted">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-accent/70" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-xs text-faint">
                  {job.stack.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
