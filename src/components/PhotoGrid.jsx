import './PhotoGrid.css';

export default function PhotoGrid({ images = [] }) {
  return (
    <div className="photo-grid">
      {images.map((src, i) => (
        <div key={i} className="photo-tile">
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
