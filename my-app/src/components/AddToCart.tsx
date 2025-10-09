import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
import { useRouter } from "next/navigation";

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

type showCart = {
  cartOpen : boolean;
}

function AddToCart(props : productDetail | showCart) {
  const [cartItems, setCartItems] = useState<productDetail[]>([])
  const [showCart, setShowCart] = useState<boolean>(true)
  const router = useRouter();

  //ambil data dari local
    useEffect(() => {
      const storedCart = localStorage.getItem("cart")
        if (storedCart) {
          setCartItems(JSON.parse(storedCart))
        } else {setCartItems([])}
    }, [])

    useEffect(() => {
      if ("cartOpen" in props) {
       setShowCart(true)} 
    }, [props])
  
    useEffect(() => {
      if ("id" in props) {
        const newItem = {
          id: props.id,
          title: props.title,
          price: props.price,
          images: props.images,
        };

        setCartItems((prev) => {
          const updated = [...prev, newItem];
          localStorage.setItem("cart", JSON.stringify(updated));
          return updated;
        });
      }
    }, [props]);
    
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
  { showCart &&
  <div className="flex flex-col gap-y-4 fixed top-0 z-[999] right-0 lg:w-[25%] w-[85%] h-full bg-white p-[2%]">
    <div className='flex flex-row justify-between items-center'>
      <h1><strong>CART</strong></h1>
      <a onClick={()=>setShowCart(false)} className='text-sm'>CLOSE</a>
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
    <button onClick={()=>{router.push(`/checkOut`); setShowCart(false)}} className="cursor-pointer w-full h-[50px] bg-black text-white text-xl">
      Check Out</button>

   
  </div> }
  </>
  )
}

export default AddToCart