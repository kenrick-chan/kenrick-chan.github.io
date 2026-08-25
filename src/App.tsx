import Hero from "./components/Hero";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import Venue from "./components/Venue";
import Registry from "./components/Registry";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import {
  eventInfo,
  venueInfo,
  registryLinks,
  faqItems,
  host,
} from "./data/eventData";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero event={eventInfo} />
      <RSVP host={host} />
      <Details event={eventInfo} />
      <Divider />
      <Venue venue={venueInfo} />
      <Divider flip />
      <Registry links={registryLinks} />
      <Divider />
      <FAQ items={faqItems} />
      <Footer host={host} event={eventInfo} />
    </div>
  );
}
