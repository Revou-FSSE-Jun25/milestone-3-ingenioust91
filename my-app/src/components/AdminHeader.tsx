'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'

function AdminHeader() {
    const { data : session }  = useSession();
  return (
    <>
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
        <a className='lg:w-[20%] w-[50%]' href='/'>
          <img className='max-h-[100%] lg:h-auto' src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        </a>

        <div className='flex flex-row items-center justify-end gap-2'>
          <img src={session?.user?.image ?? '/'} className='h-[80%] rounded-4xl object-cover'/>
          <h1>{session?.user?.name}</h1>
          <button className='cursor-pointer' onClick={()=>signOut({callbackUrl:'/'})}><b>Log Out</b></button>
        </div>
    </header>
    </>
  )
}

export default AdminHeader
