import { Link } from 'react-router-dom';
import './FeatureCards.css';

const cards = [
  {
    icon: '🏠',
    title: 'THE VILLA',
    text: 'Two bedrooms, two bathrooms, a well equipped kitchen open to the inside dining and living space. A beautiful outside area that leads to the gazebo and swimming pool.',
    buttonLabel: 'EXPLORE THE VILLA',
    to: '/villa',
  },
  {
    icon: '📍',
    title: 'EXPLORE THE ISLAND',
    text: 'Chart and explore the French and Dutch stores, cultures, cuisines, and activities while staying located in the exclusive community of Terres Basses on the French side.',
    buttonLabel: 'EXPLORE THE ISLAND',
    to: '/island',
  },
  {
    icon: '♥',
    title: 'VIEW OUR REVIEWS',
    text: 'Choosing the perfect vacation home can be difficult. Check out some of the wonderful notes our past guests left us to see how much they enjoyed the villa and island.',
    buttonLabel: 'EXPLORE OUR REVIEWS',
    to: '/guest-reviews',
  },
];

export default function FeatureCards() {
  return (
    <div className="feature-cards">
      {cards.map((card) => (
        <div key={card.title} className="feature-card">
          <div className="feature-icon">{card.icon}</div>
          <h3 className="feature-title">{card.title}</h3>
          <p className="feature-text">{card.text}</p>
          <Link to={card.to} className="feature-button">{card.buttonLabel}</Link>
        </div>
      ))}
    </div>
  );
}
