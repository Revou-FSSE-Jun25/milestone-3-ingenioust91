"use client"
import React, {useState, useEffect} from 'react'
import { getProductsAdmin, deleteProduct } from '@/lib/api';
import { useForm } from "react-hook-form";
import { animate, stagger, text } from 'animejs';
import Card from '@/components/Card';
import { useRouter } from "next/navigation";

type items = {
    id : number;
    title : string;
    price : number;
    images : string[];
    category : {
        id : number
    }
}

type SearchForm = {
  searchQuery : string;
}

function adminListPage() {
    const [items, setItems] = useState<items[]>([]);
    const [allItems, setAllItems] = useState<items[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset } = useForm<SearchForm>();
    const router = useRouter();

    async function fetchAdminProduct() {
        setLoading(true);    // Set loading to true before fetching
        setError(null);      // Clear any previous errors
        try {
            const initialProducts = await getProductsAdmin();
            setItems(initialProducts)
            setAllItems(initialProducts)
        }
        catch (err:any){setError(err)}
        finally {
            setLoading(false);    
        }
    }

    useEffect(()=>{
        fetchAdminProduct();
    },[])

    useEffect(()=>{
        text.split('p', {chars: { class: 'split-char' },});
    
        animate('.split-char', {
        y: ['0rem', '-1rem', '0rem'],
        loop: true,
        delay: stagger(100)
        });
    },[])
        
    if (loading) return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-xl">LOADING...</p>
        </div>
    )

    if (error) return <div>Error: {error}</div>;

    function handleDelete(id:number) {
        const isDelete = confirm('Are you sure want to delete this product?')
        
        if (isDelete) {
            deleteProduct(id)
            setItems(items.filter(items => items.id !== id))
        }
    }

    function handleEdit(id:number) {
        router.push(`/productdetail/${id}/edit`)
    }

    function onSubmitFunction(data:SearchForm) {
        if (data.searchQuery == "")
        {setItems(allItems)}
        else 
        {   setItems(allItems.filter(items => items.title.toLowerCase().includes(data.searchQuery.toLowerCase())))
            reset();
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
                    <button className='cursor-pointer w-[40%] text-lg buttonAdmin'
                    onClick={() => handleEdit(item.id)}
                    >EDIT</button>
                    
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

export default adminListPage
