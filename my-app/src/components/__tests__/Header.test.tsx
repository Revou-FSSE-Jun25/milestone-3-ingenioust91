import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';
import { ToggleProvider } from '@/app/context/ToggleCartContext';
import CartList from '../CartList';
import { userEvent } from "@testing-library/user-event";
import { CartProvider } from '@/app/context/CartContext';

// Mock useCart
const mockItems = [
  { id: 1, title: 'Produk A', price: 10000, images: 'https://coba.id/112.jpg', quantity:1 },
];

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));


describe('Header', ()=>{
    it('Clothes will navigate to filter clothes page',()=>{
        render(<ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider></ToggleProvider>);

        const clothes = screen.getByRole('link', {name:/Clothes/i})
        expect(clothes).toBeInTheDocument;

        expect(clothes).toHaveAttribute('href', '/productCategory/clothes');

    })

    it('Furniture will navigate to filter furniture page',()=>{
        render(<ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider></ToggleProvider>);

        const furniture = screen.getByRole('link', {name:/Furniture/i})
        expect(furniture).toBeInTheDocument;

        expect(furniture).toHaveAttribute('href', '/productCategory/furniture');

    })

    it('Shoes will navigate to filter furniture page',()=>{
        render(<ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider></ToggleProvider>);

        const shoes = screen.getByRole('link', {name:/Shoes/i})
        expect(shoes).toBeInTheDocument;

        expect(shoes).toHaveAttribute('href', '/productCategory/shoes');

    })

    it('Electronics will navigate to filter electronics page',()=>{
        render(<ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider></ToggleProvider>);

        const electronics = screen.getByRole('link', {name:/Electronics/i})
        expect(electronics).toBeInTheDocument;

        expect(electronics).toHaveAttribute('href', '/productCategory/electronics');

    })

    it('cart open when click CART button', async ()=>{
        render(<ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider></ToggleProvider>)

        const user = userEvent.setup();
        const cart = screen.getByTestId('cart');
        
        const cartSideBar = screen.getByTestId('cart-sidebar');
        const cartBackDrop = screen.getByTestId('cart-backdrop');
        
        //open cart
        await user.click(cart)

        //cartList harus open = true dulu
        expect(cartSideBar).toBeInTheDocument();
        expect(cartSideBar).toHaveClass('translate-x-0');

        expect(cartBackDrop).toBeInTheDocument();
        expect(cartBackDrop).toHaveClass('opacity-100','visible');
    })

    it('cart close when click CLOSE button', async () => {
        render(
            <ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider>
            </ToggleProvider>
        );

        const user = userEvent.setup();
        const cart = screen.getByTestId('cart');

        await user.click(cart);

        const cartSideBar = screen.getByTestId('cart-sidebar');
        const cartBackDrop = screen.getByTestId('cart-backdrop');
        const closeButton = screen.getByRole('button', { name: /CLOSE/i });

        await user.click(closeButton);

        // Tunggu perubahan class setelah close (pakai waitfor)
        // waitFor membuat test menunggu sampai kondisi di dalamnya menjadi benar.
        // Tanpa waitFor, test bisa gagal karena melakukan assert terlalu cepat sebelum UI berubah.
        await waitFor(() => {
            expect(cartSideBar).toHaveClass('translate-x-full');
            expect(cartBackDrop).toHaveClass('opacity-0', 'invisible');
        });
    });

    it('search bar will focused while submit with no-text', async ()=>{
        render(
            <ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider>
            </ToggleProvider>
        );

        const user = userEvent.setup();
        const searchBar = screen.getByTestId('input');
        const searchButton = screen.getByTestId('search');

        await user.click(searchButton);

        expect(searchBar).toHaveFocus();

    })

    it('search will run according to user input', async()=>{
        render(
            <ToggleProvider>
            <CartProvider initialItems={mockItems}>
                <Header />
            </CartProvider>
            </ToggleProvider>
        );

        

        const user = userEvent.setup();
        const searchBar = screen.getByTestId('input');
        const searchButton = screen.getByTestId('search');

        await user.type(searchBar, 'laptop');
        await user.click(searchButton);

        expect(pushMock).toHaveBeenCalledWith('/productSearch/laptop')
    })

    
})