import type { HostInfo, EventInfo } from "../types/event";

interface FooterProps {
  host: HostInfo;
  event: EventInfo;
}

export default function Footer({ host, event }: FooterProps) {
  return (
    <footer className="bg-sage-dark py-14 text-center text-paper">
      <p className="font-display text-2xl italic">
        See you there, with love
      </p>
      <p className="mt-2 font-body text-paper/80">
        Questions? {host.contactMethod} {host.name} at {host.contactValue}
      </p>
      <p className="mt-6 font-tag text-xs uppercase tracking-[0.2em] text-paper/50">
        {event.babyName} · {event.date}
      </p>
    </footer>
  );
}
