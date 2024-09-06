'use client'
import React, { useState } from 'react';

const LikeButton: React.FC<{ size?: string; className?: string }> = ({ size = '32px', className }) => {
  // State to manage the toggle between regular and solid heart
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the heart icon
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button onClick={toggleLike}
    className={`cursor-pointer ${className}`} // Merge className with cursor-pointer
    style={{ fontSize: size, background: 'transparent', border: 'none' }}>
      {isLiked ? (
        <i className="fa-solid fa-heart" style={{ color: '#d64043' }}></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </button>
  );
};

export default LikeButton;
