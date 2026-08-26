import type { EventInfo } from "../types/event";

interface DetailsProps {
  event: EventInfo;
}

export default function Details({ event }: DetailsProps) {
  return (
    <section id="details" className="mx-auto max-w-3xl px-6 py-20">
      <span className="tag-label">the details</span>
      <h2 className="mt-2 font-display text-3xl text-sage-dark sm:text-4xl">
        What to expect
      </h2>
      <p className="mt-4 max-w-xl font-body text-ink/80">{event.hostNote}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-surface p-6 shadow-sm">
          <h3 className="font-display text-lg text-sage-dark">Theme</h3>
          <p className="mt-1 font-body text-ink/80">
            {event.theme ?? "Come as you are — no theme this time."}
          </p>
        </div>
        <div className="rounded-2xl bg-surface p-6 shadow-sm">
          <h3 className="font-display text-lg text-sage-dark">Dress code</h3>
          <p className="mt-1 font-body text-ink/80">
            {event.dressCode ?? "Whatever feels comfortable."}
          </p>
        </div>
      </div>
    </section>
  );
}
