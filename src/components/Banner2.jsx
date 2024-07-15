import React from 'react'
import Image from 'next/image'
const Banner2 = () => {
  return (
   
      <div className="mx-20 my-14 " >
    <Image 
    src={'/banner2.avif'}
    alt="banner1"
    width={200}
    height={200}
    className="h-40 w-full  "
    />
   </div>
  
  )
}

export default Banner2