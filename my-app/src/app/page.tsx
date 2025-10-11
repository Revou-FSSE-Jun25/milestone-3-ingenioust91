import { getProducts } from "@/lib/api";
import ProductList from "@/components/productList";
import MiniBanner from "@/components/MiniBanner";

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