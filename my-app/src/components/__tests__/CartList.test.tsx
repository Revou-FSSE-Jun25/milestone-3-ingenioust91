import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import CartList from '../CartList';
import { CartProvider } from '@/app/context/CartContext';
import { ToggleProvider } from '@/app/context/ToggleCartContext';
import { userEvent } from "@testing-library/user-event";

// Mock useCart
const mockItems = [
  { id: 1, title: 'Produk A', price: 10000, images: 'https://coba.id/112.jpg', quantity:2 },
];

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));


describe('CartList', ()=>{
    it('quantity added when click +', async()=>{
      render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CartList />
              </CartProvider></ToggleProvider>);
    
      const user = userEvent.setup();

      //pastikan ada barang di cartlist
      const quantity = await screen.findByTestId('quantityText');
      expect(quantity).toBeInTheDocument();

      expect(quantity).toHaveTextContent('2');
      const addQuantity = screen.getByTestId('addButton')

      await user.click(addQuantity)
      
      // waitFor membuat test menunggu sampai kondisi di dalamnya menjadi benar.
      // Tanpa waitFor, test bisa gagal karena melakukan assert terlalu cepat sebelum UI berubah.
      await waitFor(() => {
        expect(quantity).toHaveTextContent('3')
      })

    })

    it('quantity reduced when click -', async()=>{
      render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CartList />
              </CartProvider></ToggleProvider>);
    
      const user = userEvent.setup();

      //pastikan ada barang di cartlist. ada quantityText = ada barang
      const quantity = await screen.findByTestId('quantityText');
      expect(quantity).toBeInTheDocument();

      expect(quantity).toHaveTextContent('2');
      const minQuantity = screen.getByTestId('minButton')

      await user.click(minQuantity)
      
      // waitFor membuat test menunggu sampai kondisi di dalamnya menjadi benar.
      // Tanpa waitFor, test bisa gagal karena melakukan assert terlalu cepat sebelum UI berubah.
      await waitFor(() => {
        expect(quantity).toHaveTextContent('1')
      })

    })

    it('check out button will leads to check out page', async()=>{
      render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CartList />
              </CartProvider></ToggleProvider>);

      const user = userEvent.setup();
      const checkOutButton = screen.getByRole('button', {name : /check out/i})
      
      await user.click(checkOutButton);
      expect(pushMock).toHaveBeenCalledWith('/checkOut')
    })

})