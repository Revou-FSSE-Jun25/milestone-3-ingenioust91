"use client"
import React from 'react'
import { useCart } from '@/app/context/CartContext';
import CartList from '../../../components/CartList';
import { useToggle } from '@/app/context/ToggleCartContext';

type itemCart = {
    id : number,
    title : string,
    image : string,
    price : number
}

function ButtonAddToCart({id, title, image, price}:itemCart) {
  const {addItem} = useCart();
  const {isCartOpen, openCart} = useToggle();

  function handleClick(){
    addItem({id:id, price:price, title:title, images:image});
    openCart();
  }

  return (
  <>
  <button onClick={()=>handleClick()} className="cursor-pointer w-full h-[50px] text-xl buttonAdmin">Add to Cart</button>
  {isCartOpen &&
    <CartList/>}
  </>
  )
}

export default ButtonAddToCart
