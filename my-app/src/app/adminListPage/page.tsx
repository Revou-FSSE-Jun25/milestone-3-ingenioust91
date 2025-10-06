"use client"
import React, {useState, useEffect} from 'react'
import { getProductsAdmin, deleteProduct } from '@/lib/api';
import { useRouter } from "next/navigation";

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
}

function adminListPage() {
    const [items, setItems] = useState<items[]>([]);
    const router = useRouter();

    async function fetchAdminProduct() {
        const initialProducts = await getProductsAdmin();
        setItems(initialProducts)
    }

    useEffect(()=>{
        fetchAdminProduct();
    },[])


    function handleDelete(id:number) {
        const isDelete = confirm('Are you sure want to delete this product?')
        
        if (isDelete) {
            deleteProduct(id)
            setItems(items.filter(items => items.id !== id))
        }
    }

  return (
    <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
        <form className='lg:w-[70%]'>
            <input className="w-[85%] h-[5vh] pl-[2%] bg-gray-200" type="search" placeholder="SEARCH"
            />
            <button className="w-[5%]" type="submit"><img className="inline-block" src ="/img/search.png"/></button>
        </form>

        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
            {items.map((item) => (
            <section key={item.id} className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
                <img onClick={()=>router.push(`/productdetail/${item.id}`)} className="cursor-pointer" src={item.images[0]}/>
                <p className='p-[1%_5%] text-sm'>Product Id: {item.id}</p>
                <h1 className='p-[1%_5%] truncate'><b>{item.title}</b></h1>
                <h2 className='p-[1%_5%] text-right'><b>$ {item.price}</b></h2>
                <div className='flex flex-row justify-between'>
                    <button className='cursor-pointer bg-black text-white w-[40%] text-lg'>EDIT</button>
                    <button className='cursor-pointer bg-red-500 text-black w-[40%] text-lg'
                    onClick={() => handleDelete(item.id)}
                    ><b>DELETE</b></button>
                </div>
            </section>

            ))}
        </div>
    </div>
  )
}

export default adminListPage
