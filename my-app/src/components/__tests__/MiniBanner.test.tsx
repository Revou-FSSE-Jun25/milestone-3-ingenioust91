import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MiniBanner from '../MiniBanner';

describe('Page',()=>{
    it('Clothes image will navigate to filter clothes page',()=>{
        render(<MiniBanner/>)
        const clothes = screen.getByRole('link', {name:/Clothes/i})
        expect(clothes).toBeInTheDocument;
        
        expect(clothes).toHaveAttribute('href', '/productCategory/clothes');
    })

    it('Furniture image will navigate to filter clothes page',()=>{
        render(<MiniBanner/>)
        const furniture = screen.getByRole('link', {name:/Furniture/i})
        expect(furniture).toBeInTheDocument;
        
        expect(furniture).toHaveAttribute('href', '/productCategory/furnitures');
    })

    it('Shoes image will navigate to filter clothes page',()=>{
        render(<MiniBanner/>)
        const shoes = screen.getByRole('link', {name:/Shoes/i})
        expect(shoes).toBeInTheDocument;
        
        expect(shoes).toHaveAttribute('href', '/productCategory/shoes');
    })

    it('Electronics image will navigate to filter clothes page',()=>{
        render(<MiniBanner/>)
        const electronics = screen.getByRole('link', {name:/Electronics/i})
        expect(electronics).toBeInTheDocument;
        
        expect(electronics).toHaveAttribute('href', '/productCategory/electronics');
    })
})