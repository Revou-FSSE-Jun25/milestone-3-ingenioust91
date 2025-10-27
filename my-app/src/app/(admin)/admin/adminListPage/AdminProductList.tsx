"use client"
import React, {useState, useEffect} from 'react'
import Card from '@/components/Card';
import Link from 'next/link';
import { deleteProduct } from '@/lib/api';
import { useForm } from 'react-hook-form';

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
    category : {
        id : number
    }
}

interface ProductListProps {
  initialProducts: items[];
}

type SearchForm = {
  searchQuery : string;
}

function AdminProductList({initialProducts}:ProductListProps) {
    const [items, setItems] = useState<items[]>([]);
    const [allItems, setAllItems] = useState<items[]>([]);
    const { register, handleSubmit, reset } = useForm<SearchForm>();
    
    useEffect(()=>{
      setItems(initialProducts)
      setAllItems(initialProducts)
    },[initialProducts])

    function handleDelete(id:number) {
        const isDelete = confirm('Are you sure want to delete this product?')
        
        if (isDelete) {
            deleteProduct(id)
            setItems(items.filter(items => items.id !== id))
        }
    }

    function handleCategoryChange(categoryId: number) {
        if (categoryId==0)
            {setItems(allItems)}
        else 
        {
            setItems(allItems.filter(items => items.category.id == categoryId))
        }
    }

    function onSubmitFunction(data:SearchForm) {
        if (data.searchQuery == "")
        {setItems(allItems)}
        else 
        {   setItems(allItems.filter(items => items.title.toLowerCase().includes(data.searchQuery.toLowerCase())))
            reset();
        }
    }


return (
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
        <form onSubmit={handleSubmit(onSubmitFunction)} className='w-full lg:w-[70%] ml-[100px] lg:ml-0'>
            <input className="w-[50%] lg:w-[95%] h-[5vh] pl-[2%] bg-gray-200" type="search" placeholder="SEARCH"
            {...register("searchQuery",)}
            />
            <button className="w-[10%] lg:w-[5%]" type="submit"><img className="inline-block" src ="/img/search.png"/></button>
        </form>

        <div className='lg:w-[70%] h-[7vh] flex flex-row'>
            <label className='w-[50%] lg:w-[20%]'>Filter by Category</label><br/>
            <select className='inputStyle w-[50%] lg:w-[80%]'
            onChange={(e)=>{handleCategoryChange(Number(e.target.value))}}>
              <option value={0}>All</option>
              <option value={10}>Clothes</option>
              <option value={8}>Furniture</option>
              <option value={9}>Shoes</option>
              <option value={7}>Electronics</option>
            </select>
          </div>

        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
            {items.map((item) => (
            <section key={item.id} className='flex flex-col w-[40%] lg:w-[20%] bg-white'>
                <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
                
                <div className='flex flex-row justify-between'>
                    <Link className='cursor-pointer w-[40%] text-center text-lg buttonAdmin'
                    href={`/productdetail/${item.id}/edit`}>
                    EDIT</Link>
                    
                    <button className='cursor-pointer w-[40%] text-lg buttonDelete'
                    onClick={() => handleDelete(item.id)}
                    ><b>DELETE</b></button>
                </div>
            </section>

            ))}
        </div>
    </div>
  )
}

export default AdminProductList
