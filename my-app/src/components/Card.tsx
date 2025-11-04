import React from "react"
import Link from 'next/link'

type CardProps = {
    id : number;
    title : string;
    price : number;
    images : string[]
}

export default function Card({id, title, price, images }: CardProps) {

  return (
    <section className="w-full h-full">
      <Link data-testid='image' href={`/productdetail/${id}`}
      className="relative w-full block h-[75%]"> 
        <img alt={title} className="absolute block inset-0 w-full h-full object-cover object-center cursor-pointer transition-opacity duration-500 opacity-100 hover:opacity-0" src={images[0]}/>
        <img alt={title} className="absolute block inset-0 w-full h-full object-cover object-center cursor-pointer transition-opacity duration-500 opacity-0 hover:opacity-100" src={images[1]}/>
      </Link>
      
      <div className="m-[2%_5%] ">
        <p data-testid='idProduct' className='text-sm'>Product Id: {id}</p>
        <h1 className='truncate'><b>{title}</b></h1>
        <h2 className='text-right'><b>$ {price}</b></h2>
      </div>
    </section>
  )
}