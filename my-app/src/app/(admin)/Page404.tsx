import Link from 'next/link'
import React from 'react'

type errorMsg ={
  message : number
}

function Page404({message}:errorMsg) {
  return (
    <div className="mt-[12%] lg:mt-[6%]">
      <div className='w-full h-[70vh] flex flex-col gap-2 justify-center items-center'>
          <img className='w-[35%] lg:w-[10%]' src='/img/revoshop-03.png' />
          <h1 className='text-3xl'><b>Sorry!</b></h1>
          <h2 className='text-lg'>{message} | Data process failed. Please contact support.</h2>
          <button className='buttonAdmin text-xl p-[0.5%_1%]'>
              <Link href={`/admin`}>
              Back to Admin Page</Link></button>
      </div>
    </div>
  )
}

export default Page404