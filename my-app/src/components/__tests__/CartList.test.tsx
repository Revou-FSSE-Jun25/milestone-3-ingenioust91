import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import CartList from '../CartList';
import { CartProvider } from '@/app/context/CartContext';
import { ToggleProvider } from '@/app/context/ToggleCartContext';
import { userEvent } from "@testing-library/user-event";

// Mock useCart
const mockItems = [
  { id: 1, title: 'Produk A', price: 10000, images: 'https://coba.id/112.jpg', quantity:1 },
];

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
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

      expect(quantity).toHaveTextContent('1');
      const addQuantity = screen.getByTestId('addButton')

      await user.click(addQuantity)
      
      // waitFor membuat test menunggu sampai kondisi di dalamnya menjadi benar.
      // Tanpa waitFor, test bisa gagal karena melakukan assert terlalu cepat sebelum UI berubah.
      await waitFor(() => {
        expect(quantity).toHaveTextContent('2')
      })

    })

})