import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

function AddToCart({id, title, price, images }: productDetail) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(()=>{
    setSubtotal(subtotal + price)
  },[])
  

  return (
  <div className="flex flex-col gap-y-4 fixed top-0 z-[999] right-0 lg:w-[25%] w-[85%] h-full bg-white p-[2%]">
    <h1><strong>CART</strong></h1>
    <hr/>

    <ProductCart id={id} title={title} price={id} images={images}/>

    <hr/>
    <div className='flex flex-row justify-between'>
      <h2>SUBTOTAL :</h2>
      <h2><b>$ {subtotal}</b></h2>
    </div>
    
    <hr/>
    <button className="cursor-pointer w-full h-[50px] bg-black text-white text-xl">
      Check Out</button>
  </div> 
  )
}

export default AddToCart