import type { VenueInfo } from "../types/event";

interface VenueProps {
  venue: VenueInfo;
}

export default function Venue({ venue }: VenueProps) {
  return (
    <section id="venue" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <span className="tag-label">where to find us</span>
        <h2 className="mt-2 font-display text-3xl text-sage-dark sm:text-4xl">
          {venue.name}
        </h2>
        <p className="mt-2 font-body text-ink/80">{venue.address}</p>
        {venue.parkingNote && (
          <p className="mt-1 font-body text-sm text-ink/60">
            {venue.parkingNote}
          </p>
        )}

        <div className="mt-6 overflow-hidden rounded-2xl border border-sage-light/50">
          <iframe
            title={`Map to ${venue.name}`}
            src={venue.mapEmbedUrl}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={venue.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 font-body text-sm font-medium text-sage-dark underline decoration-sage-light decoration-2 underline-offset-4 hover:text-blush"
        >
          Get directions →
        </a>
      </div>
    </section>
  );
}
