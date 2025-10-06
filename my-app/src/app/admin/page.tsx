"use client"
import React from 'react'
import { useRouter } from "next/navigation";

function adminPage() {
    const router = useRouter();
  return (
    <>
    <div className='h-[70vh] p-[1%_7%] mt-[12%] lg:mt-[7%]'>
    <div className='h-full flex flex-col justify-center gap-2 shadow-2xl bg-white rounded-xl'>
        <h1 className='text-center text-2xl'>WELCOME TO ADMIN PANEL</h1>

        <div className='h-[30%] flex flex-row items-center justify-center gap-6 '>
        <button onClick={()=>router.push('/inputPage')} className='buttonAdmin bg-[#3a76ef]'>
            <strong>Input Data</strong></button>
        <button onClick={()=>router.push('/adminListPage')} className='buttonAdmin bg-[#a66dd4]'>
            <strong>List Data</strong></button>
        </div>
    </div>
    </div>
    </>
  )
}

export default adminPage