"use client"
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleClick = (slug:string) =>
  { 
    if (slug=="all"){
      router.push(`/`)
    } else
    {router.push(`/productCategory/${slug}`)}
  }

  return (
    <>
    <header className='flex flex-row w-full h-[6%] lg:h-[12%] p-[2%] lg:p-[1%] justify-between fixed top-0 right-0 left-0 bg-white z-999'>
        <a className='lg:w-[20%] w-[50%]' href='/'>
          <img className='max-h-[100%] lg:h-auto' src="/img/revoshop-02.png" alt="logo-RevoShop" title='logo-RevoShop'/>
        </a>

        <ul className='hidden w-[50%] lg:flex flex-row gap-[3%] justify-center items-center'>
          <li onClick={()=>{handleClick("all")}}>All Items</li>
          <li onClick={()=>{handleClick("clothes")}}>Clothes</li>
          <li onClick={()=>{handleClick("furniture")}}>Furniture</li>
          <li onClick={()=>{handleClick("shoes")}}>Shoes</li>
          <li onClick={()=>{handleClick("electronics")}}>Electronics</li>
        </ul>

        <div className='flex flex-row gap-[2%] w-[50%] lg:w-[30%] right-0 lg:w-[20%]'>
            <input className="m-[2%_0%] bg-gray-200" type="search"/>
            <img src ="/img/search.png"/>
          <img src ="/img/cart.png"/>
        </div>
    </header>
    </>
  )
}

export default Header