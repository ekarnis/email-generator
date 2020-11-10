import React from 'react'
import { useSelector } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { selectTitle, selectSubTitle } from '../email/emailSlice'
import { selectEvents } from '../events/eventsSlice'

import { Button } from './Button'

import { makeEmail } from '../email/HTMLEmail'

export function Header () {
  const title = useSelector(selectTitle)
  const subTitle = useSelector(selectSubTitle)
  const events = useSelector(selectEvents)

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
        <CopyToClipboard text={makeEmail(title, subTitle, events)}>
          <Button text='Copy' type='inverted' />
        </CopyToClipboard>
      </span>
    </header>
  )
}
