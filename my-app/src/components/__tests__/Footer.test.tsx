import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import {userEvent} from '@testing-library/user-event';
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import PolicyPage from '@/app/(user)/policy/page';

describe('Footer', ()=>{
    it('Privacy Policy will navigate to /policy',async()=>{
        mockRouter.setCurrentUrl('/') //menentukan test mulai dari page mana
        render(<Footer/>, {wrapper: MemoryRouterProvider});

        const user = userEvent.setup()
        const privacy = screen.getByRole('link', {name:/Privacy Policy/i})
        
        await user.click(privacy);
         // cek router url berubah setelah klik
        expect(mockRouter).toMatchObject({asPath : '/policy'})

        //harus render page manual
        render(<PolicyPage/>)
        const heading = screen.getByTestId('heading') //render dulu, baru bisa nemu heading
        expect(heading).toHaveTextContent(/Privacy Policy/i)
    })
})