"use client"
import React from 'react'

interface HeaderProps {
  onCategoryChange: (category: string) => void;
}

function Header({ onCategoryChange }: HeaderProps) {

  return (
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
        <a className='lg:w-[15%] w-[50%]' href='/'>
          <img className='max-h-[100%] lg:h-auto' src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        </a>

        <ul className='hidden w-[50%] lg:flex flex-row gap-[3%] justify-center items-center'>
          <li onClick={()=>{onCategoryChange("all")}}>All Items</li>
          <li onClick={()=>{onCategoryChange("clothes")}}>Clothes</li>
          <li onClick={()=>{onCategoryChange("furniture")}}>Furniture</li>
          <li onClick={()=>{onCategoryChange("shoes")}}>Shoes</li>
          <li onClick={()=>{onCategoryChange("electronics")}}>Electronics</li>
        </ul>

        <div className='flex flex-row gap-[2%] w-[25%] right-0 lg:w-[10%]'>
          <img src ="/img/search.png"/>
          <img src ="/img/cart.png"/>
        </div>
    </header>
  )
}

export default Header