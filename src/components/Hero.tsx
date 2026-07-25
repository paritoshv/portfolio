"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile, suggestions } from "@/content/site";
import Trace from "./Trace";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "./icons";

function routeFor(text: string): { target: string; label: string } {
  const t = text.toLowerCase();
  if (/(health|metropolis|texas|experien|job|work(ed)?|role|career)/.test(t))
    return { target: "experience", label: "experience" };
  if (/(project|build|built|repo|orchestrat|code|ship)/.test(t))
    return { target: "work", label: "selected work" };
  if (/(who|about|you|background|study|educat|skill)/.test(t))
    return { target: "about", label: "about" };
  return { target: "work", label: "selected work" };
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const socials = [
  { label: "GitHub", icon: GitHubIcon, key: "github" as const },
  { label: "LinkedIn", icon: LinkedInIcon, key: "linkedin" as const },
  { label: "Twitter", icon: XIcon, key: "twitter" as const },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [hint, setHint] = useState<string | null>(null);

  function submit(text: string) {
    const value = text.trim();
    if (!value) return;
    const { target, label } = routeFor(value);
    setHint(`Pointing you to ${label} — the live agent lands soon.`);
    setTimeout(() => scrollTo(target), 450);
  }

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  // Emphasize the last word of the thesis ("running.")
  const thesisWords = profile.thesis.split(" ");
  const lastWord = thesisWords.pop();
  const thesisLead = thesisWords.join(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[7fr_5fr]">
        <div>
          <motion.p {...fade(0)} className="eyebrow mb-7">
            {profile.name} · {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="font-display text-balance text-[2.6rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl"
          >
            {thesisLead} <span className="text-accent">{lastWord}</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.blurb}
          </motion.p>

          <motion.div {...fade(0.22)} className="mt-7 flex items-center gap-5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.key}
                  href={profile.socials[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Icon size={17} />
                  <span className="text-sm">{s.label}</span>
                </a>
              );
            })}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <MailIcon size={17} />
              <span className="text-sm">Email</span>
            </a>
          </motion.div>

          {/* Ask-me agent bar */}
          <motion.div {...fade(0.3)} className="mt-10">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Ask me anything</span>
              <span className="font-mono text-[0.62rem] tracking-wider text-faint">
                live agent · soon
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(query);
              }}
              className="panel mt-3 flex items-center gap-3 px-4 py-3 transition-colors focus-within:border-accent/50"
            >
              <span className="font-mono text-accent">{">"}</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="what did you build at Healthify?"
                aria-label="Ask about Paritosh"
                className="w-full bg-transparent font-mono text-sm text-fg placeholder:text-faint focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                ↵
              </button>
            </form>

            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s.target}
                  onClick={() => {
                    setQuery(s.q);
                    submit(s.q);
                  }}
                  className="rounded-md border border-border bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
                >
                  {s.q}
                </button>
              ))}
            </div>

            {hint && <p className="mt-3 font-mono text-xs text-accent-dim">{hint}</p>}
          </motion.div>
        </div>

        <motion.div {...fade(0.35)} className="w-full">
          <Trace />
        </motion.div>
      </div>
    </section>
  );
}
