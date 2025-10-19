"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { login } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/lib/auth';

type LogInForm = {
    email : string,
    password : string,
}

function loginPage() {
    const { register, handleSubmit, reset, formState: {errors} } = useForm<LogInForm>();
    const router = useRouter();

    async function onSubmitInput(data:LogInForm){
        const userlogin = await login(data.email, data.password);

        if (!userlogin){
          alert('email atau password salah')
          reset();
          router.push(`/login`)
        } 
        
        alert('log in berhasil')
        setCookie('access_token', userlogin.accessToken, 30);
        setCookie('refresh_token', userlogin.accessToken, 30);
        setCookie('user-data', JSON.stringify(userlogin), 30); //simpan hasil fetch dari userlogin ke user-data
        router.push(`/admin`);
    }

return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
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
    </div>
    </div>
  )
}

export default loginPage