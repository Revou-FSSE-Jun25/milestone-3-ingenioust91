"use client"
import React, {useState} from "react"

type CardProps = {
    id : number;
    title : string;
    price : number;
    images : string[]
}

export default function Card({id, title, price, images }: CardProps) {
  const [current, setCurrent] = useState(0);
  
    const nextImage = () => {
      setCurrent((prev) => (prev + 1) % images.length); //supaya bisa balik ke 0 kalau udah sampai di imagelength
    };
  
    const prevImage = () => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length); //supaya bisa balik ke imagelength kalau sudah 0
    };
  

  return (
    <section className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
      <div className="text-4xl relative">
        <i className='cursor-pointer fa fa-angle-left absolute top-[60px] lg:top-[120px] hover:bg-gray-500 p-[2px]' onClick={prevImage}></i>
        <i className='cursor-pointer fa fa-angle-right absolute right-0 top-[60px] lg:top-[120px] hover:bg-gray-500 p-[2px]' onClick={nextImage}></i>
      </div>

      <img src={images[current]}/>
      <p className='p-[1%_5%] text-sm'>Product Id: {id}</p>
      <h1 className='p-[1%_5%] truncate'><b>{title}</b></h1>
      <h2 className='p-[1%_5%] text-right'><b>$ {price}</b></h2>
    </section>
  )
}