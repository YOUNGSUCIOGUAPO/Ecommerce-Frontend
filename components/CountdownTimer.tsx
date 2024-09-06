import React from 'react';
import { useTimerLogic } from './TimerLogic';
import { Poppins, Inter } from 'next/font/google';


const CountdownTimer = () => {
  const timeLeft = useTimerLogic();

  return (
    <div className="flex items-end">
      <div className="flex flex-col items-center justify-end">
        <span className={`font-poppins text-[12px]`}>Days</span>
        <span className={`font-inter text-[32px] leading-none`}>{timeLeft.days}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`font-poppins text-[12px]`}>Hours</span>
        <span className={`font-inter text-[32px] leading-none`}>{timeLeft.hours}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`font-poppins text-[12px]`}>Minutes</span>
        <span className={`font-inter text-[32px] leading-none`}>{timeLeft.minutes}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`font-poppins text-[12px]`}>Seconds</span>
        <span className={`font-inter text-[32px] leading-none`}>{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
