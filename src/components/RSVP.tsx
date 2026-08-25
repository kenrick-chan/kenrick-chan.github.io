import type { HostInfo } from "../types/event";

interface RSVPProps {
  host: HostInfo;
  rsvpBy?: string;
}

export default function RSVP({ host }: RSVPProps) {
  return (
    <section id="rsvp" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <span className="tag-label">kindly reply</span>
      <h2 className="mt-2 font-display text-3xl text-sage-dark sm:text-4xl">
        RSVP
      </h2>
      <p className="mx-auto mt-4 max-w-md font-body text-ink/80">
        {host.rsvpBy
          ? `We'd love to know you're coming — please text to RSVP by ${host.rsvpBy}.`
          : "We'd love to know you're coming — please text to let us know if you can make it."}
      </p>

      <p className="mt-6 font-display text-2xl text-sage-dark">
        {host.contactValue}
      </p>
      <p className="mt-1 font-body text-sm text-ink/60">
        {host.contactMethod} {host.name}
      </p>
    </section>
  );
}