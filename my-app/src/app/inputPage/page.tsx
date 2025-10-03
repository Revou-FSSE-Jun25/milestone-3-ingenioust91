"use client"
import React from 'react'
import { useForm } from "react-hook-form";

type InputForm = {
    id : number;
    title : string;
    price : number;
    description: string;
    images : string[];
}

function inputPage() {
  const { register, handleSubmit, reset } = useForm<InputForm>();

  function onSubmitInput(){

  }

  return (
    <div className='lg:p-[2%_7%] p-[10%] mt-[12%] lg:mt-[7%] lg:mb-[3%]'>
      <div className='p-[10%] lg:p-[2%] flex flex-col justify-center gap-2 shadow-2xl bg-white rounded-xl'>
        <h1 className='text-2xl text-center h-[10%]'><strong>ADMIN PANEL</strong></h1>

        <form onSubmit={handleSubmit(onSubmitInput)} className='flex flex-col items-center gap-4'>
          <div className='lg:w-[40%] w-full'>
            <label>Title Product*</label><br/>
            <input type="text" className='inputStyle'
              placeholder='Title Product'
              {...register("title", {
              required : "title required",
              })}
            />
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Category</label><br/>
            <select className='inputStyle h-[57%]'>
              <option >Clothes</option>
              <option >Furniture</option>
              <option >Shoes</option>
              <option >Electronics</option>
            </select>
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Price*</label><br/>
            <input type="number" className='inputStyle'
              placeholder='Price'
              {...register("price", {
              required : "price required",
              })}
            />
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Description</label><br/>
            <input type="text" className='inputStyle'
              placeholder='Product Description'
              {...register("description",)}
            />
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Images*</label><br/>
            <div className='flex flex-col w-full h-full gap-2'>
              <input type="text" className='inputStyle'
              placeholder='Image URL'
              {...register("images",)}/>

              <input type="text" className='inputStyle'
              placeholder='Image URL'
              {...register("images",)}/>

              <input type="text" className='inputStyle'
              placeholder='Image URL'
              {...register("images",)}/>
            </div>
          </div>
          
        
        <button className='lg:w-[40%] w-full h-[50px] bg-black text-white text-xl'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default inputPage