import React from 'react'




function Card ({image, name,price,desc}) {
  return (
    <div className='flex flex-col gap-2 h-100 w-60 outline-1 p-2.5 rounded-sm '>
        <div className="h-30 flex items-center justify-center">
             <img  className="w-full h-full object-fill rounded-lg"   src={image}/>
        </div>
        <h1 className='font-semi-bold font-sans text-xl'>{name}</h1>
        <h3> Price: PKR <span className='text-green-600'>{price}</span></h3>
        <p className='text-sm font-normal grow'>{desc}</p>
        <button 
         className='p-1.5 bg-red-500 rounded-md 
         font-semi-bold text-white hover:bg-transparent hover:text-red-500 border border-red-500 transition duration-300 ease-in-out'>
        Add to cart
         </button>
    </div>
  )
}

export default Card