import React from 'react'
import Image from 'next/image'
import Block from './Block'
const Header1 = () => {
  return (
    <div className='flex items-center justify-between border-2 border-gray-300 h-24 px-5 ' >
      <Image
      src={'/logo.png'}
      alt='logo'
      width={200}
      height={200}
      className='w-28 h-28  '
      >

      </Image>
      <div className='h-full flex' >
      <Block/>
      </div>
      
    </div>
  )
}

export default Header1
