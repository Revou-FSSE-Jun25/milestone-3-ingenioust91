import React from 'react'

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

function ProductCart({id, title, price, images }: productDetail) {
  return (
    <div className='flex flex-row gap-x-2'>
        <div className='w-[40%]'>
          <img src={images} alt={title}/>
        </div>
        
        <div>
          <p className='text-sm'>Id: {id}</p>
          <h2>{title}</h2>
          <h2><b>${price}</b></h2>
        </div>
    </div>
  )
}

export default ProductCart
