import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
   
      <div className="mx-20 my-14 " >
    <Image 
    src={'/banner1.avif'}
    alt="banner1"
    width={200}
    height={200}
    className="h-80 w-full  "
    />
   </div>
  
  )
}

export default Banner
