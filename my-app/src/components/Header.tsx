import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
        <a href='/'>
          <img className='max-h-[100%] lg:h-auto' src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        </a>

        <ul className='hidden w-[50%] lg:flex flex-row gap-[3%] justify-center items-center'>
          <li>All Items</li>
          <li>Clothes</li>
          <li>Furniture</li>
          <li>Shoes</li>
          <li>Electronics</li>
        </ul>

        <div className='flex flex-row gap-[2%] w-[25%] right-0 lg:w-[10%]'>
          <img src ="/img/search.png"/>
          <img src ="/img/cart.png"/>
        </div>
    </header>
  )
}

export default Header