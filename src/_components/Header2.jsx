import React from 'react'

const Header2 = () => {
const List =[{
  name:'Banglore'
},
{
  name:'Banglore'
},
{
  name:'Banglore'
},
{
  name:'Banglore'
},
{
  name:'Banglore'
},

]




  return (
    <div className='flex justify-between px-10 py-1 bg-gray-200' >
      
{
  List.map((item)=>(
    <span key={item.id} >{item.name}</span>
  ))
}

    
    </div>
  )
}

export default Header2
