"use client"
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card';
import { getProducts} from '@/lib/api';
import NotFound from '@/app/NotFound';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
    category : {
        id : number
    }
}

function ItemsComponent() {
    const [offset, setOffset] = useState<number>(0)
    const [data, setData] = useState<items[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);

    async function loadMore() {
        if (loading || !hasMore) return;  // cegah fetch ganda
        setLoading(true);
        const product = await getProducts(offset);
        setData(prev => [...prev, ...product]);
        setOffset(prev => prev + 12);

        if (product.length < 12) setHasMore(false);
        setLoading(false);
    }

    useEffect(() => {
        loadMore();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasMore) {
            loadMore();
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore, loading]);

    console.log(data)
    if (!data || data.length === 0) return NotFound();

  return (
    <div className="mt-[12%] lg:mt-[6%]">
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
            {data.map((item:any) => (
            <section key={item.id} className='flex flex-col w-full lg:w-[24%] h-[60vh]  bg-white'>
              <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
            </section>
          ))}
        </div>
    </div>
  )
}

export default ItemsComponent