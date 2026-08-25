import type {
  EventInfo,
  VenueInfo,
  RegistryLink,
  FaqItem,
  HostInfo,
} from "../types/event";

// Edit everything below with your real details — this is the only file
// most people will ever need to touch.

export const eventInfo: EventInfo = {
  babyName: "A little peanut is on the way!",
  parentNames: "Tracy & Kenrick",
  date: "Sunday, October 11, 2026",
  time: "11:00 AM – 3:00 PM",
  theme: "Green & Gray",
  dressCode: "Casual",
  hostNote:
    "We can't wait to celebrate the newest member of our family with the people who mean the most to us. We will also be revealing the gender!",
};

export const venueInfo: VenueInfo = {
  name: "Park Asia",
  address: "811 66th Street, Brooklyn, NY 11220 (Side entrance)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6055.787761589209!2d-74.0127778!3d40.6322222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454f3705963f%3A0xcd1e96594e89262f!2sPark%20Asia!5e0!3m2!1sen!2sus!4v1787608761549!5m2!1sen!2sus",
  mapLinkUrl: "https://maps.google.com/maps/place/811+66th+St,+Brooklyn,+NY+11220/",
  parkingNote: "Venue parking is limited. You can find street parking relatively easy.",
};

export const registryLinks: RegistryLink[] = [
  {
    store: "Babylist",
    url: "https://my.babylist.com/baby-ktchan-2026",
    note: "Our main registry",
  },
  {
    store: "Target",
    url: "https://www.target.com/gift-registry/gift-giver?registryId=7b4da860-7e26-11f1-87c9-bf84e564390c&type=BABY",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Should I bring a gift?",
    answer:
      "Gifts are welcome but never required — our registry links are above if you'd like ideas. Your presence is the present! No cards needed! We'd love to fill baby's shelves with books instead.",
  },
  {
    question: "Are kids welcome?",
    answer:
      "Absolutely — we'd love to have your little ones join us! There will be plenty of space for them!",
  },
  {
    question: "Is there parking?",
    answer: "Yes — However venue parking is very limited but street parking should be plenty.",
  },
  {
    question: "What if I have a food allergy?",
    answer:
      "Let the host know when you RSVP and we'll make sure there's something safe for you to eat.",
  },
];

export const host: HostInfo = {
  name: "Kenrick",
  contactMethod: "Text",
  contactValue: "(555) 123-4567",
  rsvpBy: "September 15, 2026"
};