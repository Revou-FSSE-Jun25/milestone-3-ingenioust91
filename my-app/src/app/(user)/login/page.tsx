"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Loading from '@/app/Loading';

type LogInForm = {
    email : string,
    password : string,
}

function LoginPage() {
    const { register, handleSubmit, reset, formState: {errors} } = useForm<LogInForm>();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function onSubmitInput(data:LogInForm){
      setLoading(true);
      setError("");
      try{
        const resultSignIn = await signIn('credentials',{
          email : data.email,
          password : data.password,
          redirect: false
        })

        router.replace("/admin")
      }
      catch{
        setError("Email / password salah")
        alert("Email / password salah");
        reset();
      }
      finally{
        setLoading(false)
      }
    

    }

return (
    <div className='flex flex-col justify-center items-center h-[70vh] mt-[12%] lg:mt-[6%]'>
    <div className='flex flex-col lg:w-[30%] w-[80%] gap-2 shadow-2xl bg-white rounded-xl lg:p-[3%] p-[10%_3%]'>
        <div>
          <p><b>Welcome back</b></p>
          <h1 className='text-2xl'><b>Log in to Admin Panel</b></h1>
        </div>

        <form onSubmit={handleSubmit(onSubmitInput)} className='flex flex-col items-center gap-4'>
          <div className='w-full'>
            <label>Email*</label><br/>
            <input type="email" className='inputStyle'
              placeholder='Your Email'
              {...register("email", {
              required : "Email required",})}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className='w-full'>
            <label>Password*</label><br/>
            <input type="password" className='inputStyle'
              placeholder='Password'
              {...register("password", {
              required : "Password required",
              minLength: { value: 3, message: 'Password must be at least 3 characters' }
              })}
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
          </div>
        
        <br/>
           <button className='buttonAdmin w-full p-[2%_5%]'><strong>LOG IN</strong></button>
        
        </form>

        {loading &&
          <Loading/>
        }
    </div>
    </div>
  )
}

export default LoginPage