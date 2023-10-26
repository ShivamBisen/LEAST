'use client';

import React from 'react'

const Searchbar = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted');
    };

  return (
    <form 
        className='flex flex-wrap gap-4 mt-12' 
        onSubmit={handleSubmit}
    >
        <input
            type="text" 
            placeholder='Enter Product Link'
            className='searchbar-input'
        />
        <button type='submit' className= 'searchbar-btn  bg-black text-white'>
        search
      </button>
    </form>
  )
}

export default Searchbar
