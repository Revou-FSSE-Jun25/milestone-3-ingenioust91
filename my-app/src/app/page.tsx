import { getProducts } from "@/lib/api";
import ProductList from "@/components/productList";

type Cat = {
  selectedCategories : string;
}

export default async function Home() {
  const initialProducts = await getProducts();
  return (
    <>
    <ProductList initialProducts={initialProducts} />
    </>
  );
}