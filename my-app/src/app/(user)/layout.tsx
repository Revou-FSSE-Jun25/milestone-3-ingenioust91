export const metadata = { 
   title: "RevoShop",
   description: "Revolutioner Shopping Experience",
};
import { ToggleProvider } from "../context/ToggleCartContext";
import { CartProvider } from "../context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
    <ToggleProvider>
      <CartProvider>
       <Header />
        <div className="flex-grow">
            {children}
        </div>
      </CartProvider>
    </ToggleProvider>
    <Footer />
    </div>
  );
}
