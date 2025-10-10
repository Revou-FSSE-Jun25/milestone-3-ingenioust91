"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import AddToCart from "./AddToCart";
import { useState, useEffect } from "react";

type SearchForm = {
  searchQuery : string;
}

function Header() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(false);

  const handleClick = (slug:string) =>
  { 
    if (slug=="all"){
      router.push(`/`)
    } else
    {router.push(`/productCategory/${slug}`)}
  }

  const onSubmitFunction = async (data:SearchForm) => {
    try {
      router.push(`/productSearch/${data.searchQuery}`)
      reset();
    } catch (e) {}
    
  }

  useEffect(() => {
  if (showCart) {
    setTimeout(() => setShowCart(false), 5000);
  }
  }, [showCart]);

  return (
    <>
    { showBurger &&
          <div className="fixed p-[3%_6%] w-full bg-white z-[999]">
            <ul className='w-[90%] flex flex-col gap-[3%]'>
              <p onClick={()=>setShowBurger(false)} className="text-sm text-right">CLOSE</p>
              <li onClick={()=>{handleClick("all")}}>All Items</li>
              <li onClick={()=>{handleClick("clothes")}}>Clothes</li>
              <li onClick={()=>{handleClick("furniture")}}>Furniture</li>
              <li onClick={()=>{handleClick("shoes")}}>Shoes</li>
              <li onClick={()=>{handleClick("electronics")}}>Electronics</li>
            </ul>
          </div>
        }
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
        <a onClick={()=>setShowBurger(true)} className="lg:hidden text-xl">☰</a>

        <a className='lg:w-[20%] w-[50%]' href='/'>
          <img className='max-h-[100%] lg:h-auto' src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        </a>

        <ul className='hidden w-[50%] lg:flex flex-row gap-[3%] justify-center items-center'>
          <li onClick={()=>{handleClick("all")}}>All Items</li>
          <li onClick={()=>{handleClick("clothes")}}>Clothes</li>
          <li onClick={()=>{handleClick("furniture")}}>Furniture</li>
          <li onClick={()=>{handleClick("shoes")}}>Shoes</li>
          <li onClick={()=>{handleClick("electronics")}}>Electronics</li>
        </ul>

        <div className='flex flex-row gap-[2%] w-[50%] lg:w-[25%] right-0 justify-end'>
          <form onSubmit={handleSubmit(onSubmitFunction)} className="w-[75%]">
            <input className="h-[70%] w-[75%] pl-[2%] bg-gray-200" type="search" placeholder="SEARCH"
            {...register("searchQuery", {
              required : "searchQuery required",
            })}
            />
            <button className="w-[22%]" type="submit"><img className="inline-block" src ="/img/search.png"/></button>
          </form>
          <button onClick={() => setShowCart(true)}
          className="w-[15%] cursor-pointer"><img src ="/img/cart.png"/></button>
        </div>

        {
          showCart && <AddToCart cartOpen={true}/>
        }
    </header>
    </>
  )
}

export default Header