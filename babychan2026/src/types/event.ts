export interface EventInfo {
  babyName: string;
  parentNames: string;
  date: string; // e.g. "Saturday, October 17, 2026"
  time: string; // e.g. "2:00 PM – 4:30 PM"
  theme?: string;
  dressCode?: string;
  hostNote: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  mapEmbedUrl: string; // Google Maps embed src URL
  mapLinkUrl: string; // Google Maps directions link
  parkingNote?: string;
}

export interface RegistryLink {
  store: string;
  url: string;
  note?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HostInfo {
  name: string;
  contactMethod: string; // e.g. "Text" or "Email"
  contactValue: string;
  rsvpBy: string;
}
