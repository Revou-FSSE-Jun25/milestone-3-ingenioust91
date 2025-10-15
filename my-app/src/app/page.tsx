import { getProducts } from "@/lib/api";
import ProductList from "@/components/productList";
import MiniBanner from "@/components/MiniBanner";

// ISR — halaman akan diregenerate otomatis tiap 1 menit
export const revalidate = 60;

export default async function Home() {
  const initialProducts = await getProducts();
  return (
    <>
    <img src="/img/main-banner.webp"/>
    <MiniBanner/>
    <ProductList initialProducts={initialProducts} />
    </>
  );
}