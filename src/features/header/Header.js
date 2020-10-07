import React from 'react'
import { Button } from '../button/Button'
export function Header () {
  return (
    <header className='bg-red-700 p-3 flex justify-between'>
      <span className='flex items-center'>
        <img
          src='https://via.placeholder.com/400x100?text=Your+Org+Name+Here'
          className='text-white mr-4'
          alt='Organisation Name'
        />
        <h1 className='text-white text-5xl font-bold'>Email Generator</h1>
      </span>
      <span className='flex items-center'>
        <Button text='Help' type='inverted' />
        <Button text='Debug' type='inverted' />
        <Button text='Copy' type='inverted' />
      </span>
    </header>
  )
}
