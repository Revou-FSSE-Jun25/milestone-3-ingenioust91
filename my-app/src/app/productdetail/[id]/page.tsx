import React from 'react'
import { getProduct } from '@/lib/api';
import ImageCard from './ImageCard';
import NotFound from '@/app/NotFound';

export const revalidate = 60; // re-fetch data tiap 1 menit

export async function generateStaticParams() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products')
  const products = await res.json()

  return products.map((p: any) => ({ id: p.id.toString() }))
}

async function ProductDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProduct(id);

  if (!product || !product.id) return NotFound();
  
  return (
    <section className="flex flex-col lg:flex-row w-full h-[75%] p-[2%_5%] justify-center">
      {/* product container */}
        <ImageCard img={product.images} title={product.title} />

      {/* product detail */}
      <section className="flex flex-col gap-[5px] lg:gap-[30px] lg:w-[50%] p-[1%_5%]">
        <div>
          <h1 className="text-base">Product ID : {product.id}</h1>
          <h2 className="text-base">Category : {product.category.slug}</h2>
        </div>

        <div>
          <h2 className="text-3xl"><b>{product.title}</b></h2>
          <h3 className="text-3xl">{product.price}</h3>
        </div>

        <p>{product.description}</p>

        <button className="cursor-pointer w-full h-[50px] text-xl buttonAdmin">Add to Cart</button>

      </section>
      
    </section>
  );
}

export default ProductDetailPage;