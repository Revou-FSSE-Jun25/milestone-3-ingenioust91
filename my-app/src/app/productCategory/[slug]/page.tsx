import React from 'react'
import Card from '@/components/Card';
import { categoryFetch } from '@/lib/api';

async function ProductList({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const data = await categoryFetch(slug);

  return (
    <>
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
            {data.map((item:any) => (
            <section key={item.id} className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
              <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
            </section>
          ))}
        </div>
    </>
  )
}

export default ProductList
