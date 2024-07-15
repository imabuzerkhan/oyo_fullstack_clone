"use client"

import Image from "next/image"
const Header4 = () => {
  return (
    <div className="flex justify-between mb-4 items-center mx-16 border-2 border-gray-200 rounded-lg px-2 " >
      <div className="flex items-center  ">
        <Image
        src={'/fire.jpg'}
        alt="fire"
        width={200}
        height={200}
        className="w-32 h-32 rounded-fullmr-5 "
        
        />
        <div className="text-xl" >
          <p className="font-bold  " >Get access to exclusive deals</p>
          <p>only the best reach your inbox</p>
        </div>
      </div>
      <div className="flex">
        <input type="email" className="outline-none w-80 h-16 px-6 py-3 mr-3 border border-gray-100  "
        placeholder="e.g.@gmail.com" />
        <button className="w-32 h-14 bg-red-600 text-xl text-white  rounded-lg " >Notify</button>
      </div>
    </div>
  )
}

export default Header4
