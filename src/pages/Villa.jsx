import HeroSection from '../components/HeroSection';
import PhotoGrid from '../components/PhotoGrid';
import CTASection from '../components/CTASection';
import { allImages, pick } from '../imageManifest';
import './Villa.css';

const heroBg = pick('ext1.JPG', 1);
const ctaBg = pick('Sugaree- May 27 interior,ext 156.JPG', 8);

export default function Villa() {
  return (
    <main>
      <HeroSection title="The Villa" bgImage={heroBg} />

      <section className="villa-description">
        <p>
          The villa sits privately in a large 2½ acre, one hectare, tropical garden, unseen from the
          entrance gate, up a winding driveway, surrounded by flowers and palms, birds and the sea.
          It is well equipped to anticipate your needs. There is a comfortable living room and dining
          room, with various outdoor spaces for sunning and dining. This unique tropical garden has a
          private strolling trail complete with native orchids. The large sparkling pool surrounded by
          chaise lounges and total privacy. The gorgeous view is west; of the sunset over the Caribbean
          sea and lush garden. The granite and mahogany kitchen is stocked with all the things you need
          to enjoy the many international products in St. Martin's fabulous grocery and gourmet shops.
          There are fans and screen doors throughout. There is a large satellite TV plus DVD's, and
          online entertainment options, and a stereo and music for guests' enjoyment.
        </p>
      </section>

      <PhotoGrid images={allImages} />

      <CTASection
        headline="BOOK YOUR STAY TODAY!"
        subtext="It's time to secure this venue and start your exploration and relaxation journey."
        buttonLabel="CONTACT US FOR AVAILABILITY"
        buttonTo="/contact"
        bgImage={ctaBg}
      />
    </main>
  );
}
