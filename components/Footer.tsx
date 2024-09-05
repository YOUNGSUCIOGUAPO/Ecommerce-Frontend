import Image from 'next/image'
import React from 'react'
import { CardFooter } from 'react-bootstrap'
import copyright from '@/public/assets/copyright.svg'

const Footer = () => {
  return (
    <footer className='w-full h-[440px] bg-black justify-center '>
        <div className=' text-white  flex justify-center items-start space-x-[87px] pt-[80px] pb-[76px]'>
            <div className='pillar-1'>
                <Image
                src={'./assets/ExclusiveLogo.svg'}
                width={118}
                height={24}
                alt=''
                />
                <h3 className='text-[20px] font-[500] my-[24px] text-[#FAFAFA]'>Subscribe</h3>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Get 10% off your first order</h5>
                {/* input bar */}
                <div className=' rounded-sm text-[#FAFAFA] h-[48px] w-[217px] bg-black border-[1.5px] border-[#FAFAFA] '>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-[#FAFAFA] ml-4 mr-8 text-[16px] w-[130px] opacity-40 bg-black py-[10px]"
                />
                <span className='absolute py-[12px] mr-[2px]'>
                    <Image
                    src={'./assets/icon-send.svg'}
                    width={20}
                    height={18}
                    alt=''
                    />
                </span>
                </div>
            </div>

            <div className='pillar-2'>
                <h3 className='text-[20px] font-[500] mb-[24px] text-[#FAFAFA]'>Support</h3>

                <h3 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA] w-[184px] h-[48px] leading-[24px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h3>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>exclusive@gmail.com</h5>
                <h5 className='text-[16px] font-[400] text-[#FAFAFA]'>+88015-88888-9999</h5>
            </div>

            <div className='pillar-3'>
                <h3 className='text-[20px] font-[500] mb-[24px] text-[#FAFAFA]'>Account</h3>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>My Account</h5>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Login / Register</h5>
                <h5 className='text-[16px] font-[400] mb-[26px] text-[#FAFAFA]'>Cart</h5>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Wishlist</h5>
                <h5 className='text-[16px] font-[400] text-[#FAFAFA]'>Shop</h5>
            </div>

            <div className='pillar-4'>
               
                <h3 className='text-[20px] font-[500] mb-[24px] text-[#FAFAFA]'>Quick Link</h3>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Privacy Policy</h5>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Terms Of Use</h5>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>FAQ</h5>
                <h5 className='text-[16px] font-[400] mb-[16px] text-[#FAFAFA]'>Contact</h5>
            </div>

            <div className='pillar-5'>
                
                <h3 className='text-[20px] font-[500] mb-[24px] text-[#FAFAFA]'>Download App</h3>
                <h5 className='text-[12px] font-[500] opacity-70 mb-[8px] text-[#FAFAFA]'>Save $3 with App New User Only</h5>
                <Image
                src={'/assets/qr-code.svg'}
                width={198}
                height={84}
                alt=''
                className='mb-[24px]'
                />
                <Image
                src={'/assets/social-icons.svg'}
                width={168}
                height={24}
                alt=''
                />
            </div>

        </div>

        <div className='flex justify-center opacity-40 mb-[24px] space-x-[6px] text-white'>
            <Image
            src={copyright}
            width={20}
            height={20}
            alt=''
            />
            <h5 className='text-[16px] text-opacity-40'>Copyright Rimel 2022. All right reserved</h5>
        </div>
    </footer>
  )
}

export default Footer