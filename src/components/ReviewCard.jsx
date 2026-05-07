import './ReviewCard.css';

export default function ReviewCard({ text, author }) {
  return (
    <div className="review-card">
      <div className="review-quote">&#10077;</div>
      <p className="review-text">{text}</p>
      <p className="review-author">{author}</p>
    </div>
  );
}
