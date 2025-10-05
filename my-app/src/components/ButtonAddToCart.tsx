import React from 'react'

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

function ButtonAddToCart({id, title, price, images }: productDetail) {
  return (
  <>
  <div id="filter-list" className="fixed z-9999 w-full h-full">
      <button className="absolute w-full h-full bg-black opacity-75"></button>
      <div className="absolute flex flex-col h-full w-[60%] lg:w-[30%] right-0 top-0 bg-white justify-center p-[5%]">
        <h3 className="pb-[5%]"><b>FILTERS</b></h3>
          <h3>CATEGORIES</h3>

          <section className="pb-[5%]">
          <h3><b>BRANDS</b></h3>
          </section>
      </div>
  </div> 
  </>
  )
}

export default ButtonAddToCart