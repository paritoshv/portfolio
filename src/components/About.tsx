import { about, skills } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="mt-3 text-2xl tracking-tight sm:text-3xl">
          A bit about me.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 sm:grid-cols-[2fr_1fr]">
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-7">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="eyebrow mb-2.5">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.7rem] text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-6 border-t border-border pt-8 text-sm sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Education</p>
            <p className="text-fg">{about.education.school}</p>
            <p className="mt-1 text-muted">{about.education.degree}</p>
            <p className="mt-1 font-mono text-xs text-faint">{about.education.period}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Community</p>
            <p className="leading-relaxed text-muted">{about.community}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
