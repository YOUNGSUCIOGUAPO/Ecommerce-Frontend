'use client'
import React, { useRef } from 'react';
import { Poppins, Inter } from 'next/font/google';
import CountdownTimer from './CountdownTimer';
import { itemData } from '@/constants/itemData';
import Card from './Card';
import Image from 'next/image';
import RightArrow from '/public/assets/Right-Arrow.svg'
import LeftArrow from '/public/assets/Left-Arrow.svg'

const TodaySection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust to card width + margin
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Adjust to card width + margin
    }
  };

  return (
    <section id='todaySection' className='mt-[140px] w-full'>
      <div className='flex px-[5%]'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h4 className={`font-poppins ml-[16px] align-content-center text-[#DB4444] text-[16px]`}>
            Todays
        </h4>
      </div>
      <div className='flex px-[5%] mb-[40px]'>
        <h2 className={`font-inter text-[36px] mt-[24px] mr-[87px]`}>
          Flash Sales
        </h2>
        <CountdownTimer />

        <div className='ml-auto space-x-2'>
        <button onClick={handleScrollLeft} className=''>
          <Image
            src={LeftArrow}
            width={46}
            height={46}
            alt=''
            /> {/* Left arrow */}
        </button>
        <button onClick={handleScrollRight} className=''>
          <Image
          src={RightArrow}
          width={46}
          height={46}
          alt=''
          /> {/* Right arrow */}
        </button>
        </div>
      </div>

      <div className='relative'>
        <div ref={carouselRef} id='productCarousel' className='carousel flex scroll-smooth overflow-hidden pl-[5%] gap-10'>
          {itemData && itemData.map((item, index) => (
            <div key={index} className='flex-shrink-0'>
              <Card product={{ ...item, productRating: Number(item.productRating) }} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='my-[60px] bg-[#DB4444] w-[234px] h-[56px] rounded-[4px] text-white flex justify-center align-middle items-center'>
          View All Products
        </button>
      </div>
      <div className='px-[5%]'>
      <div
        className="border-b border-black  opacity-30"
        style={{ borderWidth: '0.5px' }}
      ></div>
      </div>
    </section>
  );
};

export default TodaySection;
