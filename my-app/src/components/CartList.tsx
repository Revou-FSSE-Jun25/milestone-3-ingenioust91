import React, { useEffect, useState } from 'react'
import ProductCart from '../app/productdetail/[id]/ProductCart';
import { useRouter } from "next/navigation";
import { useCart } from '@/app/context/CartContext';

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}


function CartList() {
  const {items} = useCart();
  const [cartItems, setCartItems] = useState<productDetail[]>([])
  const router = useRouter();
  const [showCart, setShowCart] = useState(true);

  useEffect(()=>{
    setCartItems(items)
  },[items])
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
  {showCart && 
  <div className="flex flex-col gap-y-4 fixed top-0 z-[999] right-0 lg:w-[25%] w-[85%] h-full bg-white p-[2%]">
    <div className='flex flex-row justify-between items-center'>
      <h1><strong>CART</strong></h1>
      <a onClick={()=>setShowCart(!showCart)} className='text-sm'>CLOSE</a>
    </div>
  
    <hr/>

     { 
        cartItems.map((item) => (
        <ProductCart key={item.id} id={item.id} title={item.title} price={item.price} images={item.images}/>))
      }

    <hr/>
    <div className='flex flex-row justify-between'>
      <h2>SUBTOTAL :</h2>
      <h2><b>$ {subtotal}</b></h2>
    </div>
    
    <hr/>
    <button onClick={()=>{router.push(`/checkOut`)}} className="cursor-pointer w-full h-[50px] text-xl buttonAdmin">
      Check Out</button>

   
  </div>}
  </>
  )
}

export default CartList