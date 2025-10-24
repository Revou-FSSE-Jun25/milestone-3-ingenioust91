import React from 'react'
import Card from '@/components/Card';
import { categoryFetch } from '@/lib/api';
import NotFound from '@/app/NotFound';

// regenerate tiap 1 menit
export const revalidate = 60;

type Params = Promise<{ slug: string }>

async function ProductList(props: { params: Params }) {
    const {slug} = await props.params;
    const data = await categoryFetch(slug);

    if (!data || data.length === 0) return NotFound();

  return (
    <div className="mt-[12%] lg:mt-[6%]">
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
            {data.map((item:any) => (
            <section key={item.id} className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
              <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
            </section>
          ))}
        </div>
    </div>
  )
}

export default ProductList
