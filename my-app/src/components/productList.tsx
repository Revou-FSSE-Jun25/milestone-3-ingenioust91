"use client"
import React, {useState, useEffect} from 'react'
import Card from './Card';
import Header from './Header';
import { categoryFetch, firstFetch } from "@/lib/api";

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
    
    async function handleCategoryChange(cat:string) {
      if (cat == "all") {
        const filterProduct = await firstFetch();
        setItems(filterProduct)
      } else
        {const filterProduct = await categoryFetch(cat);
        setItems(filterProduct)}
    }

    useEffect(()=>{
      setItems(initialProducts)
    },[initialProducts])
    
    
  return (
    <>
        <Header onCategoryChange={handleCategoryChange} />
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
          {items.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
          ))}
        </div>
    </>
  )
}

export default ProductList
