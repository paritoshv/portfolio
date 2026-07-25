import { profile } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-fg/90 transition-colors hover:text-accent"
        >
          paritosh<span className="text-accent">.space</span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon size={17} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon size={16} />
          </a>

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-accent/40 px-3.5 py-1.5 text-sm text-accent transition-colors hover:bg-accent/10"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
