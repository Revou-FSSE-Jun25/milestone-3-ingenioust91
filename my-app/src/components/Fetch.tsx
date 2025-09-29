"use client"

import React, {useEffect, useState} from 'react';
import { animate, stagger, text } from 'animejs';

function Fetch() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchingData(){
        setLoading(true);    // Set loading to true before fetching
        setError(null);      // Clear any previous errors
        try{
            const response = await fetch('https://api.escuelajs.co/api/v1/products')
            const result = await response.json();
            setData(result)
        }
        catch(err:any) {
            setError(err)
        }
        finally {
        setLoading(false);
        }
    }

    useEffect(()=>{
        fetchingData();
    },[])

    useEffect(()=>{
        text.split('p', {chars: { class: 'split-char' },});

        animate('.split-char', {
        y: ['0rem', '-1rem', '0rem'],
        loop: true,
        delay: stagger(100)
        });
    },[])
    
    if (loading) return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-xl">LOADING...</p>
        </div>
    )
    
    if (error) return <div>Error: {error}</div>;

  return (
    <div>FETCHING</div>
  )
}

export default Fetch