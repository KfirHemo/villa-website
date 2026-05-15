import { useState } from 'react';
import Lightbox from './Lightbox';
import './PhotoGrid.css';

export default function PhotoGrid({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="photo-grid">
        {images.map((src, i) => (
          <div key={i} className="photo-tile" onClick={() => open(i)}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
