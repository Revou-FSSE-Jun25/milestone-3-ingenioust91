"use client"
import { useContext, createContext, useState, useEffect } from "react"

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
}

type cartType = {
    items : productDetail[],
    addItem : (item: productDetail) => void;
}

const CartContext = createContext<cartType | undefined>(undefined);

export function CartProvider({children}:any){
    const [cartItems, setCartItems] = useState<productDetail[]>([]);

    //ambil data dari local untuk pertama kali
    useEffect(() => {
      const storedCart = localStorage.getItem("cartItems")
        if (storedCart) {
          setCartItems(JSON.parse(storedCart))
        } else {setCartItems([])}
    }, [])


    const addItem = (items : productDetail) => {
        if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }

        setCartItems((prev) =>{
            const updatedCart = [...prev, items];
            if (typeof window !== "undefined") {
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            }
            return updatedCart;
        })
            
    }

    const value = {items: cartItems, addItem}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    if (context == undefined) {
        throw new Error ("cart provider error")
    }
    return context;
}
