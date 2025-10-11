"use client"
import React from 'react'
import { useRouter } from "next/navigation";

function MiniBanner() {
    const router = useRouter();
    const handleClick = (slug:string) =>
  { 
    if (slug=="all"){
      router.push(`/`)
    } else
    {router.push(`/productCategory/${slug}`)}
  }

  return (
    <div className='lg:h-[12%] h-[10%]'>
    <br/>
    <h1 className="text-center text-xl">CATEGORY</h1>
    <div className="flex flex-row lg:p-[2%] p-[5%] gap-[5%] justify-center">
      <a onClick={()=>{handleClick("clothes")}} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-clothes.png" />
        <p className='text-base'>Clothes</p>
      </a>

      <a onClick={()=>{handleClick("furniture")}} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-furniture.png" />
        <p className='text-base'>Furniture</p>
      </a>

      <a onClick={()=>{handleClick("shoes")}} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-shoes.png" />
        <p className='text-base'>Shoes</p>
      </a>

      <a onClick={()=>{handleClick("electronics")}} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-electronic.png" />
        <p className='text-base'>Electronics</p>
      </a>
      
    </div>   
    </div>
  )
}

export default MiniBanner