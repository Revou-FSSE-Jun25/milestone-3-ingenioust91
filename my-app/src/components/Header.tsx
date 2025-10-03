"use client"
import { searchbyTitle } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ProductList from "./productList";
import { useState } from "react";

type SearchForm = {
  searchQuery : string;
}

function Header() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const [searchProducts, setSearchProducts] = useState([])

  const handleClick = (slug:string) =>
  { 
    if (slug=="all"){
      router.push(`/`)
    } else
    {router.push(`/productCategory/${slug}`)}
  }

  const onSubmitFunction = async (data:SearchForm) => {
    try {
      const searchFetch = await searchbyTitle(data.searchQuery)
      setSearchProducts(searchFetch);
      reset();
    } catch (e) {}
    
  }

  return (
    <>
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
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
          <img src ="/img/cart.png"/>
        </div>
    </header>
    <ProductList initialProducts={searchProducts} />
    </>
  )
}

export default Header