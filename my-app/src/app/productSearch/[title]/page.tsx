"use client"
import React, {useState, useEffect} from 'react'
import Card from '@/components/Card';
import { searchbyTitle } from '@/lib/api';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
}

interface Params {
  title : string;
}

function ProductList({ params }: { params: Promise<Params> }) {
    const { title } = React.use(params); // unwrap params
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
            <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
          ))}
        </div>
    </>
  )
}

export default ProductList
