import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { ToggleProvider } from '@/app/context/ToggleCartContext';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));


describe('Header', ()=>{
    it('Clothes will navigate to filter clothes page',()=>{
        render(<ToggleProvider><Header/></ToggleProvider>);

        const clothes = screen.getByRole('link', {name:/Clothes/i})
        expect(clothes).toBeInTheDocument;

        expect(clothes).toHaveAttribute('href', '/productCategory/clothes');

    })

    it('Furniture will navigate to filter furniture page',()=>{
        render(<ToggleProvider><Header/></ToggleProvider>);

        const furniture = screen.getByRole('link', {name:/Furniture/i})
        expect(furniture).toBeInTheDocument;

        expect(furniture).toHaveAttribute('href', '/productCategory/furniture');

    })

    it('Shoes will navigate to filter furniture page',()=>{
        render(<ToggleProvider><Header/></ToggleProvider>);

        const shoes = screen.getByRole('link', {name:/Shoes/i})
        expect(shoes).toBeInTheDocument;

        expect(shoes).toHaveAttribute('href', '/productCategory/shoes');

    })

    it('Electronics will navigate to filter electronics page',()=>{
        render(<ToggleProvider><Header/></ToggleProvider>);

        const electronics = screen.getByRole('link', {name:/Electronics/i})
        expect(electronics).toBeInTheDocument;

        expect(electronics).toHaveAttribute('href', '/productCategory/electronics');

    })

    
})