"use client"
import React from 'react'
import { useState } from 'react';

type productImage = {
    img : [],
    title : string
}

function ImageCard({img , title}:productImage) {
  const [current, setCurrent] = useState<number>(0);

  const nextImage = () => {
      setCurrent((prev) => (prev + 1) % img.length); //supaya bisa balik ke 0 kalau udah sampai di imagelength
    };
  
  const prevImage = () => {
      setCurrent((prev) => (prev - 1 + img.length) % img.length); //supaya bisa balik ke imagelength kalau sudah 0
    };

  return (
    <section className="lg:w-[40%] relative">
        <img src={img[current]} alt={title} />
        <a onClick={prevImage} className="text-3xl absolute top-[50%] cursor-pointer p-[10px] bg-black opacity-20 text-white">❮</a>
        <a onClick={nextImage}className="text-3xl absolute top-[50%] right-0 cursor-pointer p-[10px] bg-black opacity-20 text-white">❯</a>
    </section>
  )
}

export default ImageCard