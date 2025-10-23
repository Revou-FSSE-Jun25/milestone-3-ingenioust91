import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', ()=>{
    it('Privacy Policy will navigate to /policy',()=>{
        render(<Footer/>);

        const privacy = screen.getByRole('link', {name:/Privacy Policy/i})
        expect(privacy).toBeInTheDocument;

        expect(privacy).toHaveAttribute('href', '/policy');

    })
})