"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Line = {
  text: string;
  meta?: string;
  kind: "cmd" | "step" | "warn" | "sum";
};

const LINES: Line[] = [
  { text: "orchestrate meal-plan --days 7", kind: "cmd" },
  { text: "fetch profile", meta: "12ms", kind: "step" },
  { text: "generate day 1–7", meta: "7 workers, parallel", kind: "step" },
  { text: "validate nutrition gates", meta: "day 4 failed", kind: "warn" },
  { text: "retry day 4 · attempt 1", meta: "passed in 8.2s", kind: "step" },
  { text: "persist plan · notify app", meta: "", kind: "step" },
  { text: "done in 3m 28s · 128,455 tokens · $0.41", kind: "sum" },
];

const TICK_MS = 1100;
const HOLD_TICKS = 5;

function Glyph({ line, state }: { line: Line; state: "pending" | "running" | "done" }) {
  if (line.kind === "cmd") return <span className="text-accent">$</span>;
  if (line.kind === "sum") return <span className="text-accent">▸</span>;
  if (state === "running")
    return (
      <span className="animate-pulse text-data motion-reduce:animate-none">●</span>
    );
  if (line.kind === "warn") return <span className="text-accent">!</span>;
  return <span className="text-ok">✓</span>;
}

export default function Trace() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? LINES.length : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setStep((s) => (s >= LINES.length + HOLD_TICKS ? 0 : s + 1));
    }, TICK_MS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="panel overflow-hidden font-mono text-[0.78rem]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 text-[0.65rem] tracking-wider text-faint">
          orchestrator — simulated run
        </span>
      </div>

      <div className="flex flex-col gap-1 px-4 py-4 leading-7">
        {LINES.map((line, i) => {
          const visible = step >= i;
          const state: "pending" | "running" | "done" =
            step > i ? "done" : step === i ? "running" : "pending";
          return (
            <div
              key={i}
              className={`flex items-baseline gap-3 transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              } ${line.kind === "sum" ? "mt-2 border-t border-border pt-3 text-accent" : ""}`}
            >
              <span className="w-3 shrink-0 text-center">
                <Glyph line={line} state={state} />
              </span>
              <span
                className={
                  line.kind === "cmd"
                    ? "text-fg"
                    : line.kind === "sum"
                      ? "text-accent"
                      : "text-muted"
                }
              >
                {line.text}
              </span>
              {line.meta && state === "done" && (
                <span
                  className={`ml-auto shrink-0 text-[0.68rem] ${
                    line.kind === "warn" ? "text-accent-dim" : "text-faint"
                  }`}
                >
                  {line.meta}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
