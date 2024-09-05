import { Poppins, Inter } from 'next/font/google';
import { bestSellingData } from '@/constants/itemData';
import Card from './Card';
import Image from 'next/image';
import speaker from '/public/assets/speaker.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

const BestSellingSection = () => {

  return (
    <section id='todaySection' className='mt-[70px] w-full'>
      <div className='flex px-[5%]'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h4 className={`${poppins.className} ml-[16px] align-content-center text-[#DB4444] text-[16px]`}>
            This Month
        </h4>
      </div>
      <div className='flex items-end px-[5%] mb-[40px]'>
        <h2 className={`${inter.className} text-[36px] mt-[24px] mr-[87px]`}>
          Best Selling Products
        </h2>

        <div className='bg-[#DB4444] text-white text-[16px] w-[159px] h-[56px] rounded-[4px] px-[48px] py-[16px] ml-auto'>
            View All
        </div>

      </div>

      <div className='relative'>
        <div id='bestSellingCard' className='carousel flex scroll-smooth overflow-hidden px-[5%] mb-[140px] gap-[4.5rem]'>
          {bestSellingData && bestSellingData.map((item, index) => (
            <div key={index} className='flex-shrink-0'>
              <Card product={{ ...item, productRating: Number(item.productRating) }} />
              </div>
          ))}
        </div>
      </div>
      {/* <div className='billboard-container'>
          <div className='overlay-content border-1 border-green-500'>
            <div className='flex'>
              <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center'>hours</div>
              <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[22.5px] bg-white flex justify-center items-center'>days</div>
              <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[22.5px] bg-white flex justify-center items-center'>minutes</div>
              <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center'>seconds</div>
            </div>
          </div>
      </div> */}
    </section>
  );
};

export default BestSellingSection;
