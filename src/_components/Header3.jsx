import React from 'react'

const Header3 = () => {
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-60 ' >
      <div className=" p-5 ">
        <h1 className='text-4xl text-white text-center font-bold ' >World's Fastest Growing Hotel Chain</h1>
        <div className="grid grid-cols-5 my-5 mx-10 ">
          <input type="text" placeholder='search' 
          className=' col-span-2 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 ' />

<input type="text" placeholder='search' 
          className=' col-span-1 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 ' />

<input type="text" placeholder='search' 
          className=' col-span-1 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 ' />

<button className='h-16 px-3 py-2 bg-green-500 col-span-1 text-xl text-white hover:cursor-pointer hover:bg-green-700 ' >Search</button>


        </div>
        <div className="flex my-6 mx-8 ">
        <button className='h-10 px-3 py-2   text-xl text-white hover:cursor-pointer  ' >Continue Your Search </button>

        <button className='h-10 px-3 py-1 border-2 border-white  text-xl text-white hover:cursor-pointer hover:bg-slate-500  ' >Enjoy Homestay in Nepal</button>
        </div>
      </div>
    </div>
  )
}

export default Header3
