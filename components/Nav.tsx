import Image from 'next/image';
import Cart from '/public/assets/Cart1.svg'
import LikeButton from './LikeButton';

const Nav = () => {
  return (
    <>
    {/* <CustomHead /> */}
    <nav className='h-[94px] pt-10 '>
        <div className=" flex items-center w-full pb-3 px-[5%]">
        <Image
        src={'./assets/ExclusiveLogoBlack.svg'}
        width={118}
        height={24}
        alt=''
        className=''
        />
        <ul className="flex space-x-[3rem] ml-[12rem] mr-[9.25rem]">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Sign Up</a></li>
        </ul>

        <div className=' flex ml-auto'>
        <div className='flex text-black w-[243px] h-[38px] bg-[#F5F5F5] rounded mr-[24px]'>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-black opacity-50 bg-[#f5f5f5] text-[12px] font-[400] w-[156px] ml-[20px] mr-[34px]"
          />
          {/* <span className='absolute my-[7px] mr-[2px]'>
            <i class="fa-solid text-black fa-magnifying-glass text-[20px]"></i>
         </span> */}
          <Image
            src={'./assets/Search-Vector.svg'}
            width={24}
            height={24}
            alt=''
          />
        </div>
        <LikeButton size='29px' className=' mr-[16px]' />
        <Image src={Cart}
        height={32}
        width={32}
        alt='' />

        </div>
      </div>
      <Image
      src={'./assets/Line-3.svg'}
      width={100}
      height={0}
      alt=''
      className='w-full'

      />
    </nav>
    </>
  )
}

export default Nav