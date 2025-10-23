import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CartList from '../CartList';
import { useState } from 'react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock ProductCart
jest.mock('../ProductCart', () => () => {
<div data-testid="product-cart"></div>
});

// Mock useCart
const mockItems = [
  { id: 1, title: 'Produk A', price: 10000, images: 'https://coba.id/112.jpg', quantity:1 },
];

const mockAddQuantity = jest.fn();
const mockMinQuantity = jest.fn();
jest.mock('@/app/context/CartContext', () => ({
  useCart: () => ({
    items: mockItems,
    addItem: jest.fn(),
    deleteItem: jest.fn(),
    deleteAllItem: jest.fn(),
    addQuantity: mockAddQuantity,
    minQuantity: mockMinQuantity,
  }),
}));

// Mock useToggle
jest.mock('@/app/context/ToggleCartContext', () => {
  return {
    useToggle: () => {
      const [isCartOpen, setIsCartOpen] = useState(true);
      const closeCart = () => setIsCartOpen(false);
      return { isCartOpen, closeCart };
    },
  };
});

describe('CartList',()=>{
    it('cart close when click CLOSE button',()=>{
        render(<CartList />);

        //pastikan button dengan text CLOSE ada
        const closeButton= screen.getByRole('button', {name:/CLOSE/i},)

        const cartSideBar = screen.getByTestId('cart-sidebar');
        expect(cartSideBar).toBeInTheDocument();
        expect(cartSideBar).toHaveClass('translate-x-0');

        const cartBackDrop = screen.getByTestId('cart-backdrop');
        expect(cartBackDrop).toBeInTheDocument();
        expect(cartBackDrop).toHaveClass('opacity-100','visible');
        

        //simulasi user klik button close
        fireEvent.click(closeButton);

        expect(cartBackDrop).toHaveClass('opacity-0','invisible')
        expect(cartSideBar).toHaveClass('translate-x-full')
    })

    it('quantity added when click +',()=>{
      render(<CartList />);

      //pastikan ada barang di cartlist
      const quantity = screen.getByTestId('quantityText')
      expect(quantity).toHaveTextContent('1');
      const addQuantity = screen.getByTestId('addButton')

      fireEvent.click(addQuantity)

      expect(mockAddQuantity).toHaveBeenCalledWith(1);

    })

    it('quantity reduce when click +',()=>{
      render(<CartList />);

      //pastikan ada barang di cartlist
      const quantity = screen.getByTestId('quantityText')
      expect(quantity).toHaveTextContent('1');
      const minQuantity = screen.getByTestId('minButton')

      fireEvent.click(minQuantity)

      expect(mockMinQuantity).toHaveBeenCalledWith(1);

    })
})