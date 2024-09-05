import React from 'react';
import Image from 'next/image';
import ControlledCarousel from './ControlledCarousel';

const Hero = () => {
  return (
    <section className="flex items-start px-[5%]">
      {/* Left Section: Links */}
      <div className="flex flex-col flex-nowrap space-y-4 w-[217px] h-[344px] mt-[40px] mr-[16px] text-base">
        <div className='flex justify-between'>
          <a href="#" className="hover:underline flex-nowrap">{`Women's Fashion`}</a>
          <Image
          src={'./assets/DropDown.svg'}
          width={24}
          height={24}
          alt=''
          />
        </div>
        <div className='flex justify-between'>
          <a href="#" className="hover:underline ">{`Men's Fashion`}</a>
          <Image
          src={'./assets/DropDown.svg'}
          width={24}
          height={24}
          alt=''
          />
        </div>
        <a href="#" className="hover:underline">Electronics</a>
        <a href="#" className="hover:underline">Home & Kitchen</a>
        <a href="#" className="hover:underline">Medicine</a>
        <a href="#" className="hover:underline">Sports & Outdoors</a>
        <a href="#" className="hover:underline">Toys & Games</a>
        <a href="#" className="hover:underline">Automotive</a>
        <a href="#" className="hover:underline">Books & Stationery</a>
      </div>

      {/* Middle Section: Divider Line */}
      <div className="w-[1px] h-[384px] mr-[45px] border-[0.5px] border-black opacity-30"></div>

      {/* Right Section: Image Carousel */}
      <div className='w-full h-[344px] mt-[40px]'>
        <ControlledCarousel />
      </div>
    </section>
  );
};

export default Hero;
