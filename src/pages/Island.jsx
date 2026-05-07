import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { pick } from '../imageManifest';
import './Island.css';

const heroBg = pick('IMG_0781.jpeg', 10);
const ctaBg = pick('IMG_0782.jpeg', 11);

export default function Island() {
  return (
    <main>
      <HeroSection title="The Island" bgImage={heroBg} />

      <section className="island-description">
        <p>
          Half French and half Dutch, this unique island has a European flair with all the beauty,
          amazing beaches, and activities of the beautiful blue Caribbean. There are 23 distinct
          beaches of all types — from surfing waves to quiet coves. A vast array of beach restaurants
          and bars are available, there are "Lolos," the great bbq grills, to leisurely gourmet cuisine
          by the water's edge. Water sports, boat rental, scuba and snuba, zip-line, hiking, day and
          evening cruises are available of all types, and so much more. We have a well earned reputation
          as the Culinary Capital of the Caribbean; there is nightlife for all ages here.
        </p>
      </section>

      <CTASection
        headline="DISCOVER ST. MARTIN"
        subtext="Explore the lush tropical island and rich culture on your terms."
        buttonLabel="CONTACT US FOR AVAILABILITY"
        buttonTo="/contact"
        bgImage={ctaBg}
      />
    </main>
  );
}
