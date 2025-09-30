"use client"
import Fetch from "@/components/Fetch";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="mt-[12%] lg:mt-[7%]"></div>
    <Fetch>
      {(items) => (
        <div className="flex flex-row justify-center flex-wrap gap-6 p-[1%]">
          {items.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} price={item.price} images={item.images} />
          ))}
        </div>
      )}
    </Fetch>
    <Footer />
    </>
  );
}
