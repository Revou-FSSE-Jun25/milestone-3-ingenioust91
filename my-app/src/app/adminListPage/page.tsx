import React from 'react'
import { getProductsAdmin } from '@/lib/api';
import AdminProductList from './AdminProductList';

// regenerate tiap 1 menit
export const revalidate = 60;

async function adminListPage() {
    const initialProducts = await getProductsAdmin();
  return (
    <>
    <AdminProductList initialProducts={initialProducts}/>
    </>
    
  )
}

export default adminListPage