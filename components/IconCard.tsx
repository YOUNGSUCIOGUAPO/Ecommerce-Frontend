import Image from 'next/image'
import React from 'react'


const IconCard: React.FC<{ icon: { icon: string; text: string } }> = ({ icon }) => {
  return (
    <div className='icon-card mr-[55px] mb-[70px]'>
      <div className='icon-container'>
        <Image
        src={icon.icon}
        width={56}
        height={56}
        className='icon'
        alt=''
        />
      </div>
      <h3 className='icon-text icon'>{icon.text}</h3>
    </div>
  )
}

export default IconCard