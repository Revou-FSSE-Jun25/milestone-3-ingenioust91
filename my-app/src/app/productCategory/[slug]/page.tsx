"use client"
import React, {useState, useEffect} from 'react'
import { useParams } from 'next/navigation';
import Card from '@/components/Card';
import { categoryFetch } from '@/lib/api';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
}


function ProductList() {
    const params = useParams<{ slug: string }>();
    const slug = params.slug;
    const [items, setItems] = useState<items[]>([]);

    useEffect(()=>{
      async function fetchProduct() {
        const data = await categoryFetch(slug);
        setItems(data);
      }
      fetchProduct();
    },[])
    
    
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
