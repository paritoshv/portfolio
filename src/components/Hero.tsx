"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile, suggestions } from "@/content/site";

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

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-3xl">
        <motion.p {...fade(0)} className="eyebrow mb-6">
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-6xl"
        >
          {profile.name}.{" "}
          <span className="font-serif italic text-muted">
            {profile.thesis}
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.blurb}
        </motion.p>

        {/* Ask-me agent bar */}
        <motion.div {...fade(0.24)} className="mt-10">
          <div className="flex items-center gap-2">
            <span className="eyebrow">Ask me anything</span>
            <span className="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-accent-dim">
              ✦ AI agent · soon
            </span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(query);
            }}
            className="group mt-3 flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-4 py-3 backdrop-blur transition-colors focus-within:border-accent/50"
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
                className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                {s.q}
              </button>
            ))}
          </div>

          {hint && (
            <p className="mt-3 font-mono text-xs text-accent-dim">{hint}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
