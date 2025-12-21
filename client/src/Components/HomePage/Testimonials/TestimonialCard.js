
import {memo} from 'react';
import { Star, Quote } from 'lucide-react';

const StarRating = memo(function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          strokeWidth={i < rating ? 0 : 2}
          fill={i < rating ? "var(--primary)" : "transparent"}
          className={i < rating ? "star active" : "star inactive"}
        />
      ))}
    </div>
  );
});


function TestimonialCard({ testimonial }) {
  return (
    <div className="card">
      <div className="quote-icon-container">
        <Quote size={64} strokeWidth={1} className="quote-icon" />
      </div>

      <div className="card-content-testimonial">
        <StarRating rating={testimonial.rating} />
        <p className="testimonial-text">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      <div className="card-footer">
        <div className="avatar heading-font">
          {testimonial.initials}
        </div>
        
        <div className="user-info">
          <span className="user-name heading-font">
            {testimonial.name}
          </span>
          <span className="user-role heading-font">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard
