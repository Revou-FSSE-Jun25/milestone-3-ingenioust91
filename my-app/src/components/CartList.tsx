import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
import { useRouter } from "next/navigation";
import { useCart } from '@/app/context/CartContext';
import { useToggle } from '@/app/context/ToggleCartContext';

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
    quantity? : number;
}


export default function CartList() {
  const {items, deleteItem, addQuantity, minQuantity} = useCart();
  const [cartItems, setCartItems] = useState<productDetail[]>([])
  const router = useRouter();
  const {isCartOpen, closeCart} = useToggle();

  useEffect(()=>{
    setCartItems(items)
  },[items])
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price*(item.quantity|| 1), 0);
  let sub : number;

return (
  <>
    {/* Backdrop*/}
    <div data-testid='cart-backdrop'
      onClick={closeCart}
      className={`fixed inset-0 bg-black/40 z-[998] ${
        isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    />

    {/* Cart Sidebar */}
    <div data-testid='cart-sidebar'
      className={`fixed top-0 right-0 z-[999] lg:w-[25%] w-[85%] min-h-full bg-white p-[2%]
      flex flex-col gap-y-3
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
      <div className='flex flex-col gap-y-1' key={item.id} >
        <div className='flex flex-row items-start'>
        <ProductCart
          id={item.id}
          title={item.title}
          price={item.price}
          images={item.images}
        />
        <button onClick={()=>deleteItem(item.id)} className='cursor-pointer'><b>X</b></button>
        </div>

        <div className="flex justify-between items-center ">
          <div className='w-[40%] border border-gray-300 rounded-sm'>
            <button data-testid='minButton' onClick={()=>minQuantity(item.id)}  className="w-[25%] text-xl hover:bg-gray-200">−</button>
            <span data-testid='quantityText' className="w-[50%] inline-block text-center text-xl font-semibold border-x border-gray-300"> {item.quantity} </span>
            <button data-testid='addButton' onClick={()=>addQuantity(item.id)} className="w-[25%] text-xl hover:bg-gray-200">+</button>
          </div>

          
          <h2 ><b>${item.quantity ? sub = item.price*item.quantity : sub=item.price}</b></h2>
        </div>

      </div>
      ))}

      <hr />
      <div className="flex flex-row justify-between">
        <h2>SUBTOTAL :</h2>
        <h2 className='text-xl'><b>${subtotal}</b></h2>
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