import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductList from '../productList';

// Mock useCart
const mockItems = [
  { id: 1, title: 'Produk A', price: 10000, images: ['https://coba.id/112.jpg'], quantity:2 },
];

describe('Page',()=>{
    it('render mockItems',()=>{
        render(<ProductList initialProducts={mockItems}/>);

        const id = screen.getByTestId('idProduct')
        expect(id).toBeInTheDocument
        expect(id).toHaveTextContent(`Product Id: 1`)

        const title = screen.getByRole('heading', { level: 1 })
        expect(title).toBeInTheDocument
        expect(title).toHaveTextContent('Produk A')

        const price = screen.getByRole('heading', { level: 2 })
        expect(price).toBeInTheDocument
        expect(price).toHaveTextContent('$ 10000')

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument
        expect(image).toHaveAttribute('src', 'https://coba.id/112.jpg')
    })

    it('by clicked image, will lead to product detail page', async()=>{
        render(<ProductList initialProducts={mockItems}/>);

        const image = screen.getByTestId('image')
        expect(image).toBeInTheDocument
        
        expect(image).toHaveAttribute('href', '/productdetail/1');
        
        
    })
})