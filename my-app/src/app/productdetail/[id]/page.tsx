"use client"
import React, { useEffect, useState } from 'react';
import { getProduct } from '@/lib/api';
import ButtonAddToCart from '@/components/ButtonAddToCart';

type items = {
  id: number;
  title: string;
  price: number;
  images: string[];
  category : {
    slug : string;
  };
  description : string;
}

interface Params {
  id: number;
}

function ProductDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params); // unwrap params
  const [product, setProduct] = useState<items | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [showAddToCart, setShowAddToCart] =useState<boolean>(false);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>The Product doesn't exist</p>;

  const nextImage = () => {
      setCurrent((prev) => (prev + 1) % product.images.length); //supaya bisa balik ke 0 kalau udah sampai di imagelength
    };
  
  const prevImage = () => {
      setCurrent((prev) => (prev - 1 + product.images.length) % product.images.length); //supaya bisa balik ke imagelength kalau sudah 0
    };
  
  return (
    <>
    <section className="flex flex-col lg:flex-row w-full h-[75%] p-[2%_5%] justify-center">
      {/* product container */}
      <section className="lg:w-[40%] relative">
        <img src={product.images[current]} alt={product.title} />
        <a onClick={prevImage} className="text-3xl absolute top-[50%] cursor-pointer p-[10px] bg-black opacity-20 text-white">❮</a>
        <a onClick={nextImage}className="text-3xl absolute top-[50%] right-0 cursor-pointer p-[10px] bg-black opacity-20 text-white">❯</a>
      </section>

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

        <button className="cursor-pointer w-full h-[50px] bg-black text-white text-xl"
        onClick={()=>{setShowAddToCart(true)}}
        >Add to Cart</button>

        {/* { showAddToCart &&
        (<ButtonAddToCart id={product.id} title={product.title} price={product.id} images={product.images[0]}/>)} */}
      </section>
    </section>
    </>
  );
}

export default ProductDetailPage;