'use client'
import React, { useEffect, useState } from 'react';
import { useTimerLogic } from './TimerLogic'; // Correctly import from TimerLogic.js
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600','400'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
});

const BillboardSection = () => {
  const timeLeft = useTimerLogic(); // Using the hook directly to get time values

  return (
    <div className='billboard-container'>
      <div className='overlay-content'>
        <div className='flex'>
          <div className='h-[4.5rem] w-[4.5rem] rounded-[50%] mr-[1.44rem] bg-white flex flex-col justify-center items-center'>
            <span className={`${poppins.className} text-[16px] font-semibold leading-none`}>{timeLeft.hours}</span>
            <span className={`${poppins.className} text-[12px]`}>Hours</span>
          </div>
          <div className='h-[4.5rem] w-[4.5rem] rounded-[50%] mr-[1.44rem] bg-white flex flex-col justify-center items-center'>
            <span className={`${poppins.className} text-[16px] font-semibold leading-none`}>{timeLeft.days}</span>
            <span className={`${poppins.className} text-[12px]`}>Days</span>
          </div>
          <div className='h-[4.5rem] w-[4.5rem] rounded-[50%] mr-[1.44rem] bg-white flex flex-col justify-center items-center'>
            <span className={`${poppins.className} text-[16px] font-semibold leading-none`}>{timeLeft.minutes}</span>
            <span className={`${poppins.className} text-[12px]`}>Minutes</span>
          </div>
          <div className='h-[4.5rem] w-[4.5rem] rounded-[50%] mr-[1.44rem] bg-white flex flex-col justify-center items-center'>
            <span className={`${poppins.className} text-[16px] font-semibold leading-none`}>{timeLeft.seconds}</span>
            <span className={`${poppins.className} text-[12px]`}>Seconds</span>
          </div>
        </div>

        <button className='w-[11.9rem] h-[4rem] rounded-[0.25rem] mt-[2.7rem] bg-[#00FF66] flex justify-center items-center text-white'>Buy Now!</button>
      </div>
    </div>
  );
};

export default BillboardSection;
