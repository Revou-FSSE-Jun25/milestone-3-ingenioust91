"use client"
import React from 'react'
import Link from 'next/link'

function MiniBanner() {
  
   return (
    <div className='lg:h-[12%] h-[10%]'>
    <br/>
    <h1 className="text-center text-xl">CATEGORY</h1>
    <div className="flex flex-row lg:p-[2%] p-[5%] gap-[5%] justify-center">
      <Link href={`/productCategory/clothes`} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-clothes.png" />
        <p className='text-base'>Clothes</p>
      </Link>

      <Link href={`/productCategory/furnitures`} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-furniture.png" />
        <p className='text-base'>Furniture</p>
      </Link>

      <Link href={`/productCategory/shoes`} className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-shoes.png" />
        <p className='text-base'>Shoes</p>
      </Link>

      <Link href={`/productCategory/electronics`}  className="cursor-pointer flex flex-col justify-center items-center">
        <img src="/img/category-electronic.png" />
        <p className='text-base'>Electronics</p>
      </Link>
      
    </div>   
    </div>
  )
}

export default MiniBanner