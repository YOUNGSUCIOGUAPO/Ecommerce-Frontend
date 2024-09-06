import React from 'react';
import LikeButton from './LikeButton'; // Adjust the import path accordingly

const CardLikeButton = ({ size = '34px', heartSize = '16px', className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full">
        <LikeButton size={heartSize} className={undefined} />
      </div> 
    </div>
  );
};

export default CardLikeButton;
