'use client';
import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroImage11 from '/public/assets/HeroImage11.png';
import HeroImage12 from '/public/assets/HeroImage12.png';
import HeroImage1 from '/public/assets/HeroImage1.svg';
import Image from 'next/image';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators={false} controls={false} activeIndex={index} onSelect={handleSelect} className='w-full'>
      <Carousel.Item className=''>
        <Image
          src={HeroImage12}
          width={882}
          height={344}
          alt="First slide"
          className='w-full h-[344px]'
        />
        <Carousel.Caption>
          <h3>Iphone 14 pro on Discount now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={HeroImage11}
          width={882}
          height={344}
          alt="Second slide"
          className='w-full h-[344px]'
        />
        <Carousel.Caption>
          <h3>Iphone 15 pro max is now restocked!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={HeroImage11}
          width={1500}
          height={344}
          alt="Third slide"
          className='w-full h-[344px]'
        />
        <Carousel.Caption>
          <h3>Pre-order the Iphone 16 series</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
