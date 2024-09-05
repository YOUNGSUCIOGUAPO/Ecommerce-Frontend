import React from 'react'
import { Poppins, Inter } from 'next/font/google';
import down from '@/public/assets/DropDown-White.svg'
import Image from 'next/image';


interface HeaderProps {
  className?: string;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700'], // Add desired weights
  style: ['normal', 'italic'], // Add desired styles
});

const Header: React.FC<HeaderProps> = ({ className })=> {
  return (
    <header className='flex bg-black text-white h-12 w-full items-center' id='no-pad'>
  <div className='w-full relative text-center  mx-[5%] flex items-center justify-center'>
    <h3 className='font-poppins font-light text-[14px]'>
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
      <span className='ml-[8px] font-poppins font-semibold text-[14px] underline'>
        ShopNow
      </span>
    </h3>

    <div className={`${poppins.className} flex text-[14px] text-white font-normal items-center absolute right-0`}>
      <h5>English</h5>
      <Image
        src={down}
        width={24}
        height={24}
        alt=''
        className='text-white'
      />
    </div>
  </div>
</header>


  )
}

export default Header
