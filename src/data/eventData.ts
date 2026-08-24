import type {
  EventInfo,
  VenueInfo,
  RegistryLink,
  ScheduleItem,
  FaqItem,
  HostInfo,
} from "../types/event";

// Edit everything below with your real details — this is the only file
// most people will ever need to touch.

export const eventInfo: EventInfo = {
  babyName: "A little peanut is on the way!",
  parentNames: "Tracy & Kenrick",
  date: "Sunday, October 11, 2026",
  time: "10:00 AM – 3:00 PM",
  theme: "Soft greens & storybook picnic",
  dressCode: "Casual",
  hostNote:
    "We can't wait to celebrate the newest member of our family with the people who mean the most to us.",
};

export const venueInfo: VenueInfo = {
  name: "Park Asia",
  address: "811 66th Street, Brooklyn, NY 11220",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5!2d-74.123!3d41.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  mapLinkUrl: "https://maps.google.com/maps/place/811+66th+St,+Brooklyn,+NY+11220/",
  parkingNote: "Free parking is limited. You can find street parking relatively easy.",
};

export const registryLinks: RegistryLink[] = [
  {
    store: "Babylist",
    url: "https://www.babylist.com/",
    note: "Our main registry",
  },
  {
    store: "Target",
    url: "https://www.target.com/gift-registry/gift",
  },
  {
    store: "Amazon",
    url: "https://www.amazon.com/baby-reg/",
  },
];

export const schedule: ScheduleItem[] = [
  { time: "2:00 PM", activity: "Arrival & light bites" },
  { time: "2:30 PM", activity: "Welcome & story time" },
  { time: "3:00 PM", activity: "Games" },
  { time: "3:45 PM", activity: "Cake & gift opening" },
  { time: "4:30 PM", activity: "Farewell favors" },
];

export const faqItems: FaqItem[] = [
  {
    question: "Should I bring a gift?",
    answer:
      "Gifts are welcome but never required — our registry links are above if you'd like ideas. Your presence is the present.",
  },
  {
    question: "Are kids welcome?",
    answer:
      "We love your little ones, but we're keeping this gathering adults-only so the parents-to-be can relax. Thank you for understanding.",
  },
  {
    question: "Is there parking?",
    answer: "Yes — free parking is available in the lot behind the venue.",
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
};
