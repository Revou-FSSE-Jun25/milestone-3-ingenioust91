import React from 'react'

function Footer() {
  return (
    <section id="connectSection" className="flex flex-col gap-y-2 w-full bg-black text-white p-[4%] lg:p-[2%_8%]">
        <div className='flex flex-row justify-between items-center'>
            <img src="./img/revoshop-01.png" className="max-w-[200px] w-[20%] h-fit" alt="logo-revofun" title="logo-revofun"></img>
            
            <h4 className="text-xs">byingesalim | 2025 © all right reserved</h4>
            
            <div className="text-4xl flex flex-row gap-[10%]">
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
    </section>
  )
}

export default Footer