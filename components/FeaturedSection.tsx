import React from 'react';
import { Poppins, Inter } from 'next/font/google';
import Image from 'next/image';
import icon1 from '/public/assets/servicesLogo.svg'
import icon2 from '/public/assets/Gaurantee.svg'
import icon3 from '/public/assets/Services.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

const FeaturedSection = () => {
  return (
    <section id='todaySection' className='featured-section mb-[140px]'>
      <div className='section-header'>
        <div className='section-icon'></div>
        <h4 className={`section-subtitle ${poppins.className}`}>
            Featured
        </h4>
      </div>
      <div className='section-title'>
        <h2 className={`title-text ${inter.className}`}>
          New Arrival
        </h2>
      </div>

      <div className='grid-container'>
        <div className='area1'>
            <Image
            src='/assets/Feature-full1.svg'
            width={570}
            height={600}
            alt=''
            className='rounded'
            />
        </div>
        <div className='area2'>
          <div className='area2A'>
            <Image
            src='/assets/Feature-full2.svg'
            width={570}
            height={284}
            alt=''
            className='grid-item2 rounded'
            />
          </div>
          <div className='area2B'>
            <div className='area2Bi'>
                <Image
                src='/assets/Feature-full3.svg'
                width={270}
                height={284}
                alt=''
                className='grid-item3 rounded'
                />
            </div>
            <div className='area2Bii'>
                <Image
                src='/assets/Feature-full4.svg'
                width={270}
                height={284}
                alt=''
                className='grid-item4 rounded'
                />
            </div>
          </div>
        </div>
      </div>

      <div className='rectangle flex space-x-[88px] my-[140px] justify-center' >
        <div className='flex flex-col justify-center items-center'>
            <Image
            src={icon1}
            width={80}
            height={80}
            alt=''
            className='mb-[24px]'
            />

            <h3 className='mb-[8px] text-[20px] font-[600]'>FREE AND FAST DELIVERY</h3>
            <p className='text-[14px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
            src={icon2}
            width={80}
            height={80}
            alt=''
            className='mb-[24px]'
            />

            <h3 className='mb-[8px] text-[20px] font-[600]'>24/7 CUSTOMER SERVICE</h3>
            <p className='text-[14px]'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image
            src={icon3}
            width={80}
            height={80}
            alt=''
            className='mb-[24px]'
            />

            <h3 className='mb-[8px] text-[20px] font-[600]'>MONEY BACK GUARANTEE</h3>
            <p className='text-[14px]'>We return money within 30 days</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection;
