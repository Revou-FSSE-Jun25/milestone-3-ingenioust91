import { getProducts } from "@/lib/api";
import ProductList from "@/components/productList";
import MiniBanner from "@/components/MiniBanner";

// ISR — halaman akan diregenerate otomatis tiap 1 menit
export const revalidate = 60;
 
export default async function HomePage() {
  const initialProducts = await getProducts();
  return (
    <div className="mt-[12%] lg:mt-[6%]">
    <img src="/img/main-banner.webp"/>
    <MiniBanner/>
    <ProductList initialProducts={initialProducts} />
    </div>
  );
}