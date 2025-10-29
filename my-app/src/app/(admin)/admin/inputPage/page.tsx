"use client"
import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import Page404 from '../../Page404';

type InputForm = {
    id : number;
    title : string;
    price : number;
    categoryId : number;
    description: string;
    images : string[];
}

function inputPage() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<InputForm>();
  const [errorCode, setErrorCode] = useState(0);
  const [loading, setLoading] = useState(true);

  async function onSubmitInput(data:InputForm){
    try {
      setLoading(true);    // Set loading to true before fetching
      setErrorCode(0);      // Clear any previous errors

      console.log(data)

      const response = await fetch('https://api.escuelajs.co/api/v1/products/',
        {
          method : "POST",
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify ({
              title : data.title,
              price : Number(data.price),
              description: data.description,
              categoryId : Number(data.categoryId),
              images : Array.isArray(data.images)
              ? data.images.filter((i) => typeof i === "string" && i.startsWith("http"))
              : [data.images]
            })
        })

        if (!response.ok) {
          setErrorCode(response.status);
          return;
        }

        const result = await response.json();
        console.log("RESULT: ", result);
        alert('Input Data berhasil')
        reset();
      }
      catch (e:any){
        console.error("ERROR:", e);
      }
      finally{
        setLoading(false)
      }


  }

  if (errorCode) {
    return <Page404 message={errorCode}/>
  }

  return (
    <div className='lg:p-[2%_7%] p-[10%] mt-[12%] lg:mt-[7%] lg:mb-[3%]'>
      <div className='p-[10%] lg:p-[2%] flex flex-col justify-center gap-2 shadow-2xl bg-white rounded-xl'>
        <h1 className='text-2xl text-center h-[10%]'><strong>CREATE NEW PRODUCT</strong></h1>

        <form onSubmit={handleSubmit(onSubmitInput)} className='flex flex-col items-center gap-4'>
          <div className='lg:w-[40%] w-full'>
            <label>Title Product*</label><br/>
            <input type="text" className='inputStyle'
              placeholder='Title Product'
              {...register("title", {
              required : "title required",
              minLength: { value: 3, message: 'Title must be at least 3 characters' }
              })}
            />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Category</label><br/>
            <select className='inputStyle h-[57%]'
            {...register("categoryId", {
              required : "category required",
              valueAsNumber: true 
              })}>
              <option value={10}>Clothes</option>
              <option value={8}>Furniture</option>
              <option value={9}>Shoes</option>
              <option value={7}>Electronics</option>
            </select>
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Price*</label><br/>
            <input type="number" className='inputStyle'
              placeholder='Price'
              {...register("price", {
              required : "price required",
              valueAsNumber: true,
              min: { value: 0, message: 'Price must be positive' }
              })}
            />
            {errors.price && <p className="text-red-400 text-sm mt-1">{errors.price.message}</p>}
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Description</label><br/>
            <textarea className='inputStyle'
              placeholder='Product Description'
              {...register("description",)}
            />
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Images</label><br/>
            <div className='flex flex-col w-full h-full gap-2'>
              <input type="url" className='inputStyle'
              placeholder='Image URL'
              {...register("images.0",)}/>

              <input type="url" className='inputStyle'
              placeholder='Image URL'
              {...register("images.1",)}/>

              <input type="url" className='inputStyle'
              placeholder='Image URL'
              {...register("images.2",)}/>
            </div>
          </div>
          
        
        <button className='cursor-pointer lg:w-[40%] w-full h-[50px] text-xl buttonAdmin'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default inputPage
