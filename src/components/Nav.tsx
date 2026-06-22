import { profile } from "@/content/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-fg/90 transition-colors hover:text-accent"
        >
          paritosh<span className="text-accent">.space</span>
        </a>
        <nav className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-fg transition-colors hover:border-accent/60 hover:text-accent"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
