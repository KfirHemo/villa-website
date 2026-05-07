import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { pick } from '../imageManifest';
import './Contact.css';

const heroBg = pick('garden2.JPG', 3);
const ctaBg = pick('Sugaree- May 27 interior,ext 159.JPG', 14);

export default function Contact() {
  return (
    <main>
      <HeroSection title="Book Villa Sugaree" bgImage={heroBg} />

      <section className="contact-section">
        <div className="contact-box">
          <h2>Contact Info:</h2>
          <p>Please inquire to:</p>
          <p><a href="mailto:vilasugaeesxm@gmail.com" className="contact-email">vilasugaeesxm@gmail.com</a></p>
        </div>

        <div className="contact-pricing">
          <h3>Contact For Availability</h3>
          <p className="pricing-label">Rates Start At...</p>
          <div className="pricing-amount">
            <span className="pricing-dollar">$</span>
            <span className="pricing-number">3,000</span>
            <span className="pricing-period">/week</span>
          </div>
        </div>
      </section>

      <CTASection
        headline="CHECK OUR REVIEWS"
        subtext="Find out how much our other guests loved their stay."
        buttonLabel="GUEST REVIEWS"
        buttonTo="/guest-reviews"
        bgImage={ctaBg}
      />
    </main>
  );
}
