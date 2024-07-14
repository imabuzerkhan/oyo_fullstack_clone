import Image from "next/image"
const Block = () => {
  return (
    <div className=' h-full  flex border-r border-gray-300 px-3 w-68   items-center  ' >
      <Image
      src={'/demo.svg'}
      alt="demo"
      width={200}
      height={200}
      className="w-10 h-10 rounded-full mr-5 "
      
      ></Image>
      <div>
        <h3 className="font-bold" >This is heading</h3>
        <p className="text-gray-500 text-sm line-clamp-1 " >Lorem ipsum dolor sit amet.</p>
      </div>
      
    </div>
  )
}

export default Block
