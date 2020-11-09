import React from 'react'
import { Button } from './Button'
export function Header () {
  return (
    <header className='bg-red-700 px-3 py-1 flex justify-between'>
      <span className='flex items-center'>
        <img
          src='https://via.placeholder.com/400x80?text=Your+Logo+Here'
          className='text-white mr-4'
          alt='Organisation Name'
        />
        <h1 className='text-white text-5xl font-black'>Email Generator</h1>
      </span>
      <span className='flex items-center'>
        <Button text='Help' type='inverted' />
        <Button text='Debug' type='inverted' />
        <Button text='Copy' type='inverted' />
      </span>
    </header>
  )
}
