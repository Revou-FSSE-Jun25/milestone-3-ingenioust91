import React from 'react'

function Header() {
  return (
    <header className='flex flex-row w-full h-[12%] p-[1%] justify-between'>
        <img src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        
        <ul className='w-[50%] flex flex-row gap-[2%] justify-center items-center'>
          <li className='cursor-pointer hover:underline underline-offset-2'>All Items</li>
          <li className='cursor-pointer hover:underline underline-offset-2'>Clothes</li>
          <li className='cursor-pointer hover:underline underline-offset-2'>Furniture</li>
          <li className='cursor-pointer hover:underline underline-offset-2'>Shoes</li>
          <li className='cursor-pointer hover:underline underline-offset-2'>Electronics</li>
        </ul>

        <div className='flex flex-row gap-[2%] w-[10%]'>
          <img src ="/img/search.png"/>
          <img src ="/img/cart.png"/>
        </div>
    </header>
  )
}

export default Header