"use client"
import Image from 'next/image'
import fill_eye from '/public/assets/Fill Eye.svg'
import React, { useRef, useState, useEffect } from 'react';


import StarRating from './StarRating'
import CardLikeButton from './CardLikeButton'

// Define ProductType interface
interface ProductType {
  id?: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  productRating: number;
  reviews: string;
  discountedPercent?: string;
}


const titleBreaker = (title: string) => {
  // Your implementation here
  if (title.length > 26){
    return `${title.slice(0, 26)}...`;
  }else {
    return title;
  }
};
const Card: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className='w-[270px] h-[350px] flex flex-col'>
      <div className='card-image mb-[16px] relative rounded-[4px]'>
         {/* Conditional rendering of the discount rectangle */}
         {product.discountedPercent ? (
          <div className='discount-rect'>{product.discountedPercent}</div>
        ) : null}
        <div className='card-icons gap-[8px] absolute top-[12px] right-[12px] flex'>
          <CardLikeButton />
          <Image src={fill_eye} width={34} height={34} alt='' />
        </div>
        <div className='image-container'>
          <Image src={product.image} fill className='image' alt='' />
        </div>

        {/* Hover Effect */}
        <div className='add-to-cart absolute left-0 right-0 bottom-[-41px] h-[41px] bg-black text-white flex items-center justify-center text-sm rounded-b-[4px] transition-all duration-300'>
          <a href='#'>Add to cart</a>
        </div>
      </div>

      <div className='card-text max-h-[48px]'>
        <h2 className='card-title'>{titleBreaker(product.title)}</h2>
        <div className='card-pricing'>
          <span className='price'>{`$${product.price}`}</span>
          <span className='old-price'>{product.oldPrice}</span>
        </div>
        <div className='flex'>
          <StarRating rating={product.productRating} />
          <span>{product.reviews}</span>
        </div>
      </div>
    </div>
  )
};


export default Card
