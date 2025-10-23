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
    }

    function closeCart() {
        setIsCartOpen(false)
    }

    const value = {isCartOpen, openCart, closeCart}

    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}

export const useToggle = () => {
    const context = useContext(ToggleContext);

    if (context == undefined){
        throw Error ('Toggle Provider Error')
    }
    return context
}

