"use client"
import React, {useState, useEffect} from 'react'
import Card from '@/components/Card';
import { searchbyTitle } from '@/lib/api';
import { useParams } from 'next/navigation';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
}


function ProductList() {
    const params = useParams<{title:string}>();
    const title = params.title;

    const [items, setItems] = useState<items[]>([]);
    
    useEffect(()=>{
      async function fetchProduct() {
            const data = await searchbyTitle(title);
            setItems(data);
        }
        fetchProduct();
    },[])

    if (items.length === 0) {
        return (
            <div className='w-full h-[70vh] flex flex-col gap-4 justify-center items-center'>
                <img className='w-[35%] lg:w-[10%]' src='/img/revoshop-03.png' />
                <h1 className='text-xl'>Oops! Couldn't find "{title}"</h1>
            </div>
        )
    }
    
    
  return (
    <>
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
          {items.map((item) => (
            <section key={item.id} className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
              <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
            </section>
          ))}
        </div>
    </>
  )
}

export default ProductList
