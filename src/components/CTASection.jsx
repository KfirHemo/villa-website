import { Link } from 'react-router-dom';
import './CTASection.css';

export default function CTASection({ headline, subtext, buttonLabel, buttonTo, bgImage }) {
  return (
    <div
      className="cta-section"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="cta-overlay">
        <h2 className="cta-headline">{headline}</h2>
        {subtext && <p className="cta-subtext">{subtext}</p>}
        <Link to={buttonTo} className="cta-button">{buttonLabel}</Link>
      </div>
    </div>
  );
}
