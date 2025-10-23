import React from 'react'

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

export default function ProductCart({id, title, price, images }: productDetail) {
  return (
    <div className='flex flex-row gap-x-2'>
        <div className='w-[40%]'>
          <img src={images} alt={title}/>
        </div>
        
        <div className='w-[40%]'>
          <p className='text-sm'>Id: {id}</p>
          <h2 className='text-base/5'>{title}</h2>
          <h2>${price}</h2>
        </div>
    </div>
  )
}
