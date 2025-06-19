import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  interactive = false,
  onRatingChange,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (value: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;
          const isPartial = starValue > rating && starValue - 1 < rating;

          return (
            <button
              key={index}
              type="button"
              className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
              onClick={() => handleClick(starValue)}
              disabled={!interactive}
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isFilled
                    ? 'text-yellow-400 fill-yellow-400'
                    : isPartial
                      ? 'text-yellow-400 fill-yellow-200'
                      : 'text-gray-300'
                } transition-colors`}
              />
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};
