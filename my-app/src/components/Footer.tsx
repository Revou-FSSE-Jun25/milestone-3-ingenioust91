"use client"
import React from 'react'
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  return (
    <section id="connectSection" className="flex flex-col gap-y-2 w-full bg-black text-white p-[4%] lg:p-[2%_8%]">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
          <ul className='flex flex-col lg:flex-row gap-2 lg:gap-4 text-center'>
            <li><a onClick={() => router.push("/policy")}>FAQ</a></li>
            <li><a onClick={() => router.push("/policy")}>About Us</a></li>
            <li><a onClick={() => router.push("/policy")}>Privacy Policy</a></li>
            <li><a onClick={() => router.push("/admin")}>Admin Panel</a></li>
            <li><a>Contact Us</a></li>
          </ul>


      <div className="text-4xl flex flex-row gap-2">
        <a href="https://www.instagram.com/ingesalim/" target="_blank" rel="noopener"  title="instagram byingesalim">
        <i className="fa fa-instagram"></i></a>

        <a href="https://www.linkedin.com/in/inge-salim/" target="_blank" rel="noopener" title="linkedin byingesalim">
        <i className="fa fa-linkedin-square"></i></a>

        <a href="https://www.youtube.com" target="_blank" rel="noopener" title="youtube">
        <i className="fa fa-youtube-play"></i></a>

        <a href="https://www.facebook.com" target="_blank" rel="noopener" title="facebook">
        <i className="fa fa-facebook-f"></i></a>
      </div>

      </div>
      <h4 className="text-xs text-center">byingesalim | 2025 © all right reserved</h4>
    </section>
  )
}

export default Footer