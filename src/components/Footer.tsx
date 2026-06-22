import { profile } from "@/content/site";

const socials = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "Twitter", href: profile.socials.twitter },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="rounded-2xl border border-border bg-surface/40 p-10 sm:p-14">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl">
          Open to backend and{" "}
          <span className="font-serif italic text-accent-dim">AI-infrastructure</span> work.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-6 inline-block font-mono text-base text-fg hover:text-accent"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-muted transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted transition-colors hover:text-fg"
          >
            Résumé
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-faint">
        © {profile.name} · built with Next.js
      </p>
    </footer>
  );
}
