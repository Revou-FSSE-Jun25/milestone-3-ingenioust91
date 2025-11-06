import React from 'react'
import ItemsComponent from './ItemsComponent';

// regenerate tiap 1 menit
export const revalidate = 60;


function ProductList() {
  return (
    <ItemsComponent/>
  )
}

export default ProductList
