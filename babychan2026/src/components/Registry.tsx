import type { RegistryLink } from "../types/event";

interface RegistryProps {
  links: RegistryLink[];
}

export default function Registry({ links }: RegistryProps) {
  return (
    <section id="registry" className="mx-auto max-w-3xl px-6 py-20">
      <span className="tag-label">gift registry</span>
      <h2 className="mt-2 font-display text-3xl text-sage-dark sm:text-4xl">
        If you'd like to bring something
      </h2>
      <p className="mt-4 max-w-xl font-body text-ink/80">
        Your company is the only gift we're asking for — but for those who
        insist, here's where we've put together a few ideas.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.store}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center justify-center gap-1 rounded-2xl border border-sage-light/50 bg-surface p-6 text-center font-body shadow-sm transition hover:border-blush hover:shadow-md"
            >
              <span className="font-display text-lg text-sage-dark">
                {link.store}
              </span>
              {link.note && (
                <span className="text-xs text-ink/60">{link.note}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
