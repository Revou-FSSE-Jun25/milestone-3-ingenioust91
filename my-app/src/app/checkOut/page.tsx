"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import ProductCart from '@/components/ProductCart'
import { useForm } from "react-hook-form";

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

type InputForm = {
    name : string;
    email : string;
    phone : number;
    paymentMethod : string;
    address: string;
}

function checkOutPage() {
    const [cartItems, setCartItems] = useState<productDetail[]>([])
    const { register, handleSubmit, reset, formState: {errors} } = useForm<InputForm>();

    useEffect(() => {
          const storedCart = localStorage.getItem("cart")
            if (storedCart) {
              setCartItems(JSON.parse(storedCart))
            } else {setCartItems([])}
        }, [])

    const subtotal = cartItems.reduce((sum, i) => sum + i.price, 0);

    function onSubmitInput(data:InputForm){
        alert(`Thank you ${data.name},
            PAYMENT with ${data.paymentMethod} SUCCESS.`)
    }

return (
    <>
    <h1 className='text-2xl text-center h-[10%]'><strong>CHECK OUT PAGE</strong></h1>
    <div className='flex lg:flex-row p-[2%] justify-center'>
        <div className='w-full lg:w-[30%] flex flex-col gap-4 p-[2%]'>
            { cartItems.map((item) => (
                <ProductCart key={item.id} id={item.id} title={item.title} price={item.price} images={item.images}/>))
            }
            
            <hr/>
            <div className='flex flex-row justify-between'>
                <h2>SUBTOTAL :</h2>
                <h2><b>$ {subtotal}</b></h2>
            </div>
            <hr/>
        </div>

      <div className='w-full lg:w-[40%]'>
        <form onSubmit={handleSubmit(onSubmitInput)} className='flex flex-col items-center gap-4 p-[2%]'>
          <div className='w-full'>
            <label>Name</label><br/>
            <input type="text" className='inputStyle'
              placeholder='Full Name'
              {...register("name", {
              required : "name required",
              minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className='w-full'>
            <label>Email</label><br/>
            <input type="email" className='inputStyle'
              placeholder='Email'
              {...register("email", {
              required : "email required",
              })}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className='w-full'>
            <label>Phone*</label><br/>
            <input type="number" className='inputStyle'
              placeholder='Phone number'
              {...register("phone", {
              required : "phone required",
              valueAsNumber: true,
              })}
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div className='w-full'>
            <label>Payment Method</label><br/>
            <select className='inputStyle h-[57%]'
            {...register("paymentMethod", {
              required : "payment required",
              })}>
              <option value="creditcard">Credit Card</option>
              <option value="banktransfer">Bank Transfer</option>
              <option value="qris">QRIS</option>
              <option value="ewallet">E-Wallet</option>
            </select>
          </div>

          <div className='w-full'>
            <label>Address</label><br/>
            <textarea className='inputStyle'
              placeholder='Address'
              {...register("address",)}
            />
          </div>

        <button className='cursor-pointer w-full h-[50px] bg-red-500 text-white text-xl'>PAY NOW</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default checkOutPage
