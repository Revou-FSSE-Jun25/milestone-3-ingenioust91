"use client"
import React, {useState, useEffect, useCallback} from 'react'
import Card from './Card';
import useEmblaCarousel from 'embla-carousel-react';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
}

interface ProductListProps {
  initialProducts: items[];
}

function ProductList({initialProducts}:ProductListProps) {
    const [items, setItems] = useState<items[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})
    
    useEffect(()=>{
      setItems(initialProducts)
    },[initialProducts])
    
    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    },[emblaApi])

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
  return (
    <div className='relative'>
      <div className="overflow-hidden m-[5%]" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <section key={item.id} className='mr-6 flex grow-0 shrink-0 w-full lg:w-[24%] overflow-hidden h-[60vh] bg-white'>
            <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
            </section>
          ))}
        </div>
      </div>
      
      <div className='absolute text-5xl top-[50%] w-full p-[0%_3%] flex flex-row justify-between'>
        <i className="cursor-pointer fa fa-angle-left p-[0%_1.2%] bg-white rounded-4xl hover:bg-gray-200 hover:text-gray-500"
            onClick={scrollPrev}>
        </i>
        <i className="cursor-pointer fa fa-angle-right p-[0%_1.2%] bg-white rounded-4xl hover:bg-gray-200 hover:text-gray-500"
            onClick={scrollNext}>
        </i>
      </div>
    </div>
  )
}

export default ProductList
