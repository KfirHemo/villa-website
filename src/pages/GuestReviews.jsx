import HeroSection from '../components/HeroSection';
import ReviewCard from '../components/ReviewCard';
import CTASection from '../components/CTASection';
import { pick } from '../imageManifest';
import './GuestReviews.css';

const heroBg = pick('garden1.JPG', 2);
const ctaBg = pick('Sugaree- May 27 interior,ext 183.JPG', 12);

const reviews = [
  {
    text: 'Thanks for another wonderful visit. We had nine days of pure sunshine. Visited again Club-Mini in Marigot for the buffet. Very nice and do recommend. Also the grilled snapper at the barbecue places in Grand Case is excellent and best value as well.',
    author: '~M&D, New York, NY',
  },
  {
    text: 'Thank you so much for the time you invested in your guest-information book. It is a goldmine of information.\n\nLove experience plus your love for Villa Sugaree makes staying here a delight.\n\nWe must say that this is the best place on the island. It was hard to leave. That\'s why MTC (Max the Cat) is still here. He\'s one smart cat.',
    author: '~P&W, M&D',
  },
  {
    text: 'I believe this was our fifth visit to your wonderful home. Each time we come we marvel at the paradise you have created. This year the plants and flowers were particularly spectacular. Thank you so much [for] a beautiful few days away from the snow!',
    author: '~M&D, Manhattan, NY',
  },
  {
    text: 'We had an amazing time here at Villa Sugaree. The house met all of our needs and made for a very comfortable two weeks. The outside space provided us with a peaceful and relaxing place to have our breakfast, or just chill after an "exhausting" day at one of the many amazing St. Maarten beaches we visited. And thankful for all of the great info in the book.\n\nOur favorite places – Bare Aux Prunes, Baie Rouge, Calmos Cafe in Grand Case, Ernest and Fidel\'s Cafe down the hill.',
    author: '~M&J, Castic, CA',
  },
  {
    text: 'Thank you so much for the opportunity to rent your Villa Sugaree. You really do have a piece of paradise. We really enjoyed our stay. The house was great, pool and gazebo as well as the grounds and great plants. Max came by every evening too.\n\nWe try to vacation twice a year and hope to be repeat renter.\n\nThanks for your email communication and the book at the villa was helpful.',
    author: '~B&L, Brewerton, NY',
  },
  {
    text: 'I cannot imagine staying on the island anywhere else. Your villa was beautiful, private and everything we could have only imagined. This is not our first time to St. Martin but when we return it will be to Villa Sugaree.\n\nThe notebook was like our island bible and pointed us in the right directions!\n\nMust suggestion: Mullet Bay Rosie\'s is our favorite lunch lolo (chicken is to die for). Loved Aux Quatre Vents!!\n\nThank you for opening your home to us!',
    author: '~R&P, Asheville, NC',
  },
  {
    text: 'The difficult part of writing this note is where to begin, it\'s all so good...!\n\nFrom the gates opening up to your beautiful winding driveway past all the tenderly cared for diverse island fauna, leading to your island home "Villa Sugaree" – a tasteful love inspired delightful experience. The array of eclectic posters and art work, the indoor & outdoor sound system – so clean and clear, the pool so inviting and delicious. The comfortable furniture, beds, and loungers, even the kitchen is stocked from top to bottom with any item one could wish for. And of course this view as I write from the gazebo table of the sun setting, colors splashing the clouds. Life is good, thanks for sharing all this.',
    author: '~S&R, Pond Ridge, NY',
  },
  {
    text: 'Wow. Just wow. We escaped the ice and snow of Colorado and landed in paradise.\n\nWe spent a lot of our time here just enjoying the villa – the pool & the flowers are fabulous. Everything about the house itself was so easy and comfortable. We also enjoyed exploring the island, but must admit, even with "only one main road," we managed to get lost a few times. The only thing that wasn\'t absolutely perfect was the mosquitoes!\n\nThanks so much for everything. It was such a wonderful vacation!',
    author: '~E&S',
  },
  {
    text: 'Sitting here on our last night, listening to calypso music, petting max, our new best friend, and enjoying the spectacular setting before heading back to gray skies and the 22 inches of snow that fell while we were enjoying your amazing home. Thank you for all the small but important touches – the well stocked kitchen (including Max\'s food!), the stereo speakers on the patio, the extra lights for the rolling brown outs, the beautiful garden, the well maintained pool – just everything!\n\nWe often had our big meal at lunch and really enjoyed the food and service at Tastevin in Grand Case – highly recommend.',
    author: '~B&K&D Chicago, IL',
  },
  {
    text: 'It was our first time in St. Martin and in this house, we felt like paradise. The house is so great and comfortable. The pool so fun, the rooms, the bed, the garden to be had sitting outside is like to forget all your troubles, and just relax in paradise. Although the island, St. Martin, is beautiful.',
    author: '',
  },
  {
    text: 'Thank you for making our trip to St. Martin a lovely one. The pool was awesome!! Many hours spent in it. Sunset time was wonderful and the beds very comfortable. Thanks again.',
    author: '~S.R., New York',
  },
];

export default function GuestReviews() {
  return (
    <main>
      <HeroSection title="Guest Reviews" bgImage={heroBg} />

      <section className="reviews-grid-section">
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <ReviewCard key={i} text={r.text} author={r.author} />
          ))}
        </div>
      </section>

      <CTASection
        headline="IT'S TIME TO WRITE YOUR OWN CHAPTER"
        subtext="Book your stay today and start planning your journey on St. Martin."
        buttonLabel="CONTACT US FOR AVAILABILITY"
        buttonTo="/contact"
        bgImage={ctaBg}
      />
    </main>
  );
}
