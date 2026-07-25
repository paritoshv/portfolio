import { profile } from "@/content/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedInIcon },
  { label: "Twitter", href: profile.socials.twitter, icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="panel p-10 sm:p-14">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Open to backend and <span className="text-accent">AI-infrastructure</span> work.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-7 inline-block font-mono text-base text-fg hover:text-accent"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Icon size={16} />
                {s.label}
              </a>
            );
          })}
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
        © {profile.name} · {profile.location} · built with Next.js
      </p>
    </footer>
  );
}
