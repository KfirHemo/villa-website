import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&#x2715;</button>

      <button
        className="lightbox-arrow lightbox-arrow-left"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >&#8249;</button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt="" />
      </div>

      <button
        className="lightbox-arrow lightbox-arrow-right"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >&#8250;</button>
    </div>
  );
}
