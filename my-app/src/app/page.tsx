import { firstFetch } from "@/lib/api";
import ProductList from "@/components/productList";

type Cat = {
  selectedCategories : string;
}

export default async function Home() {
  const initialProducts = await firstFetch();
  return (
    <>
    <div className="mt-[12%] lg:mt-[7%]"></div>
    <ProductList initialProducts={initialProducts} />
    </>
  );
}