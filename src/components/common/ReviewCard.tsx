import { Star } from 'lucide-react';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-neutral-100">
      <div className="flex items-center mb-6">
        <div className="flex text-accent-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < review.rating ? 'fill-current' : ''}`}
            />
          ))}
        </div>
        <span className="ml-3 text-primary-600 text-sm font-medium">({review.rating}/5)</span>
      </div>

      <blockquote className="text-primary-700 mb-6 text-lg leading-relaxed italic">
        "{review.review}"
      </blockquote>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-primary-950">{review.customerName}</span>
        <div className="text-right text-sm text-primary-500">
          {review.project && <div className="font-medium">{review.project}</div>}
          <div>{new Date(review.date).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}