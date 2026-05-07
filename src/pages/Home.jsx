import { Link } from 'react-router-dom';
import FeatureCards from '../components/FeatureCards';
import PhotoGrid from '../components/PhotoGrid';
import CTASection from '../components/CTASection';
import { allImages, pick } from '../imageManifest';
import './Home.css';

const heroBg = pick('gazebo-pool1.JPG', 0);
const readyBg = pick('IMG_8485.jpeg', 5);
const previewImages = allImages.slice(0, 11);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="home-hero-overlay">
          <div className="home-hero-text">
            <h1>PRIVATE ESCAPE IN FABULOUS TROPICAL GARDEN WITH A CARRIBEAN VIEW</h1>
            <p>
              Come and experience the exclusive lifestyle of Terres Basses on St. Martin (St. Maarten).
              The villa is well located close to Princess Juliana airport (SXM) and some of the islands
              best beaches, golf, nightlife, and explore Terres Basses' 3 distinct beaches.
            </p>
          </div>
          <div className="home-hero-cta-box">
            <h2>Rent Villa Sugaree Now!</h2>
            <Link to="/contact" className="home-hero-cta-btn">CONTACT US FOR AVAILABILITY</Link>
          </div>
        </div>
      </section>

      {/* Garden intro */}
      <section className="home-garden">
        <h2>Your Own Tropical Garden</h2>
        <p>
          Located on one hectare (two and a half acres) of amazing tropical island land. Enjoy seclusion
          and privacy behind a gated property with a long driveway. The villa is well equipped for a
          wonderful holiday for action and exploration to complete relaxation.
        </p>
      </section>

      {/* Feature cards */}
      <FeatureCards />

      {/* Photo grid preview */}
      <PhotoGrid images={previewImages} />

      <div className="home-gallery-btn-wrapper">
        <Link to="/villa" className="home-gallery-btn">VIEW OUR PICTURE GALLERY</Link>
      </div>

      {/* Ready to rent CTA */}
      <CTASection
        headline="READY TO RENT?"
        subtext="It's time to make this exclusive retreat yours for a week (or three)."
        buttonLabel="CONTACT US FOR AVAILABILITY"
        buttonTo="/contact"
        bgImage={readyBg}
      />
    </main>
  );
}
