import React from 'react'

function Header() {
  return (
    <header className='flex flex-row w-full h-[12%] p-[1%] justify-between'>
        <img src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        <ul className='w-[50%] flex flex-row gap-[2%] justify-center items-center'>
          <li>All Items</li>
          <li>Clothes</li>
          <li>Furniture</li>
          <li>Shoes</li>
          <li>Electronics</li>
        </ul>
        <img src ="/img/cart.png"/>
    </header>
  )
}

export default Header