"use client"
import React, {useState, useEffect} from 'react'
import Card from './Card';

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
    
    useEffect(()=>{
      setItems(initialProducts)
    },[initialProducts])
    
    
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
