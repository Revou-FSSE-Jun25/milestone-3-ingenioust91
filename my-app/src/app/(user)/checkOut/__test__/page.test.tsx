import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CheckOutPage from '../page';
import { CartProvider } from '@/app/context/CartContext';
import { ToggleProvider } from '@/app/context/ToggleCartContext';
import userEvent from '@testing-library/user-event';

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

describe('chekOutPage',()=>{
    it('render mockItems in checkout page',()=>{
        render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CheckOutPage/>
              </CartProvider></ToggleProvider>);

        const id = screen.getByTestId('idProduct')
        expect(id).toBeInTheDocument
        expect(id).toHaveTextContent(`Id: 1`)

        const title = screen.getByTestId('title')
        expect(title).toBeInTheDocument
        expect(title).toHaveTextContent('Produk A')

        const price = screen.getByTestId('price')
        expect(price).toBeInTheDocument
        expect(price).toHaveTextContent('$10000')

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument
        expect(image).toHaveAttribute('src', 'https://coba.id/112.jpg')
    })

    it('Error on input requirement : no input',async()=>{
        render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CheckOutPage/>
              </CartProvider></ToggleProvider>);

        const user = userEvent.setup();
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const phoneInput = screen.getByLabelText(/phone/i);
        const submit = screen.getByRole('button', {name : /PAY NOW/i})
        
        await user.click(submit)
        
        const nameError = await screen.findByTestId('nameError')
        const emailError = await screen.findByTestId('emailError')
        const phoneError = await screen.findByTestId('phoneError')
        
        await waitFor(() => {
        expect(nameError).toHaveTextContent('name required');
        expect(emailError).toHaveTextContent('email required');
        expect(phoneError).toHaveTextContent('phone required');
        })
    })

    it('Submit Succed',async()=>{
        render(<ToggleProvider>
                <CartProvider initialItems={mockItems}>
                <CheckOutPage/>
              </CartProvider></ToggleProvider>);

        //mock window alert
        const alertMock = jest.spyOn(window, "alert");
        alertMock.mockImplementation(() => {});

        const user = userEvent.setup();
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const phoneInput = screen.getByLabelText(/phone/i);
        const paymentInput = screen.getByLabelText(/payment method/i)
        const submit = screen.getByRole('button', {name : /PAY NOW/i})
        
        await user.type(nameInput, 'John')
        await user.type(emailInput, 'jphn@mail.com')
        await user.type(phoneInput, '6509873')
        await user.selectOptions(paymentInput, 'creditcard')

        await user.click(submit)
        
        expect(alertMock).toHaveBeenCalledWith(
            `Thank you John,
        PAYMENT with creditcard SUCCESS.`
        );
        alertMock.mockRestore();
        
    })
})