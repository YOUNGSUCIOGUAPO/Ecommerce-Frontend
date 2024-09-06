import React from 'react';
import Image from 'next/image';
import fullStar from '@/public/assets/Star-Vector.svg';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
//   const fullStar = '/public/assets/Star-Vector.png'; // Path to your star vector icon in the public folder
//   const fullStar = <Image
//                     src={fullstar}
//                     width={20}
//                     height={20}
//                     alt="Star-Vector"
//                         />;
  const maxRating = 5; // Max number of stars

  // Create an array based on the max rating
  const stars = Array.from({ length: maxRating }, (_, index) => {
    return index < rating;
  });

  return (
    <div className="star-rating flex space-x-1">
      {stars.map((isFilled, index) => (
        <Image
          key={index}
          src={fullStar}
          alt={`Star ${index + 1}`}
          width={20}
          height={20}
          style={{
            filter: isFilled ? 'none' : 'grayscale(100%)',
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
