import React, { useEffect, useState } from 'react'
import ProductCart from '../app/productdetail/[id]/ProductCart';
import { useRouter } from "next/navigation";
import { useCart } from '@/app/context/CartContext';
import { useToggle } from '@/app/context/ToggleCartContext';

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}


function CartList() {
  const {items, deleteItem} = useCart();
  const [cartItems, setCartItems] = useState<productDetail[]>([])
  const router = useRouter();
  const {isCartOpen, closeCart} = useToggle();

  useEffect(()=>{
    setCartItems(items)
  },[items])
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)

return (
  <>
    {/* Backdrop*/}
    <div
      onClick={closeCart}
      className={`fixed inset-0 bg-black/40 z-[998]${
        isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    />

    {/* Cart Sidebar */}
    <div
      className={`fixed top-0 right-0 z-[999] lg:w-[25%] w-[85%] h-full bg-white p-[2%]
      flex flex-col gap-y-4
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-row justify-between items-center">
        <h1>
          <strong>CART</strong>
        </h1>
        <button onClick={closeCart} className="text-sm cursor-pointer">
          CLOSE
        </button>
      </div>

      <hr />

      {cartItems.map((item) => (
        <div key={item.id} className='flex flex-row items-start'>
        <ProductCart
          id={item.id}
          title={item.title}
          price={item.price}
          images={item.images}
        />
        <button onClick={()=>deleteItem(item.id)} className='cursor-pointer'><b>X</b></button>
        </div>
      ))}

      <hr />
      <div className="flex flex-row justify-between">
        <h2>SUBTOTAL :</h2>
        <h2><b>$ {subtotal}</b></h2>
      </div>

      <hr />

      <button onClick={() => {router.push(`/checkOut`); closeCart()}}
        className="cursor-pointer w-full h-[50px] text-xl buttonAdmin">
        Check Out
      </button>
    </div>
  </>
);
}

export default CartList