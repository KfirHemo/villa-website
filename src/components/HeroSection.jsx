import './HeroSection.css';

export default function HeroSection({ title, bgImage }) {
  return (
    <div
      className="hero-section"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
}
