"use client"
import React from 'react'
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';
import CartList from '../../../components/CartList';

type itemCart = {
    id : number,
    title : string,
    image : string,
    price : number
}

function ButtonAddToCart({id, title, image, price}:itemCart) {
  const {addItem} = useCart();
  const [showCart, setShowCart] = useState(false);


  return (
  <>
  <button onClick={()=>{addItem({id:id, price:price, title:title, images:image}); setShowCart(true)}} className="cursor-pointer w-full h-[50px] text-xl buttonAdmin">Add to Cart</button>
  {
   showCart &&
   <CartList/> 
  }
  </>
  )
}

export default ButtonAddToCart
