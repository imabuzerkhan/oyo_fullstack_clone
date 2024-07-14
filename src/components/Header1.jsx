import React from 'react'
import Image from 'next/image'
import Block from './Block'
const Header1 = () => {
  return (
    <div className='flex items-center justify-between border-2 border-gray-300 h-20 px-5 ' >
      <Image
      src={'/logo.png'}
      alt='logo'
      width={200}
      height={200}
      className='w-28 h-28  '
      >

      </Image>
      <div className='h-full flex items-center justify-center ' >
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <div className="flex item-center justify-center px-3  ">
      <Image
      src={'/demo.svg'}
      alt="demo"
      width={200}
      height={200}
      className="w-10 h-10 rounded-full mr-5 "
      
      />
      <h3 className='font-bold' >Login/Singup </h3>
      </div>
      </div>
      
    </div>
  )
}

export default Header1
