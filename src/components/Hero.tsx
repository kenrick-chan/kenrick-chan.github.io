import type { EventInfo } from "../types/event";
import Divider from "./Divider";

interface HeroProps {
  event: EventInfo;
}

export default function Hero({ event }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-sage-dark text-paper">
      {/* Soft floating blobs, evoking a baby mobile drifting overhead */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-sage/40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-[-4rem] h-72 w-72 rounded-full bg-blush/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-3rem] left-1/3 h-40 w-40 rounded-full bg-gold/30 blur-2xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="tag-label text-paper/80">a baby shower for</span>
        <h1 className="mt-4 font-display text-5xl italic leading-tight sm:text-6xl">
          {event.babyName}
        </h1>
        <p className="mt-4 font-body text-lg text-paper/90">
          Hosted with love for {event.parentNames}
        </p>

        <div className="mt-10 flex flex-col items-center gap-1 font-body text-base sm:text-lg">
          <span>{event.date}</span>
          <span>{event.time}</span>
        </div>

        <a
          href="#details"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-body text-sm font-medium text-sage-dark shadow-sm transition hover:bg-blush-light focus-visible:bg-blush-light"
        >
          See the details ↓
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Divider color="#F3F5EE" />
      </div>
    </header>
  );
}
