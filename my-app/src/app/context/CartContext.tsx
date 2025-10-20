"use client"
import { useContext, createContext, useState, useEffect } from "react"

type productDetail = {
    id : number;
    title : string;
    price : number;
    images : string;
    quantity? : number
}

type cartType = {
    items : productDetail[],
    addItem : (item: productDetail) => void,
    deleteItem : (cartNumber:number) => void,
    deleteAllItem : () => void,
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
        setCartItems((prev)=>{
            const exitingItem = prev.find((currentItem)=> currentItem.id === items.id)

            let updatedCart;

            if (exitingItem) {
                updatedCart = prev.map((currentItem)=>
                    currentItem.id === items.id ?
                        {...currentItem, quantity: (currentItem.quantity || 1) + 1}
                        : currentItem
                )
            } else {
                // kalau belum ada, tambahkan dengan quantity = 1
                updatedCart = [...prev, { ...items, quantity: 1 }];
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            }

        return updatedCart;
        })
    }

    const deleteItem = (cartNumber:number) =>{
        setCartItems((prev) =>{
            const updatedCart = prev.filter(prev => prev.id !== cartNumber)
            if (typeof window !== "undefined") {
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            }
            return updatedCart;
        })
    }

    const deleteAllItem = () =>{
        if (typeof window !== "undefined") {
            localStorage.clear();
        }
        setCartItems([])
    }

    const value = {items: cartItems, addItem, deleteItem, deleteAllItem}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    if (context == undefined) {
        throw new Error ("cart provider error")
    }
    return context;
}
