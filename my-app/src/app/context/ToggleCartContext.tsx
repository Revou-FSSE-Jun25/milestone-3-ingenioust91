"use client"
import { useContext, createContext, useState } from "react";

type ToggleType = {
    isCartOpen : boolean,
    openCart : () => void,
    closeCart : () => void;
}

const ToggleContext = createContext<ToggleType | undefined>(undefined);

export const ToggleProvider = ({children}:any) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    function openCart() {
        setIsCartOpen(true)
        console.log('buka!')
    }

    function closeCart() {
        setIsCartOpen(false)
    }

    const value = {isCartOpen, openCart, closeCart}

    return <ToggleContext value={value}>{children}</ToggleContext>
}

export const useToggle = () => {
    const context = useContext(ToggleContext);

    if (context == undefined){
        throw Error ('Toggle Provider Error')
    }
    return context
}

