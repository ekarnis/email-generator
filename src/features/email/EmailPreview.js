import React from 'react'
import { useSelector } from 'react-redux'

import { MIDDLE } from '../../constants/email'

import { Event } from './Event'
import { Input } from '../input/Input'

export function EmailPreview (props) {
  const events = useSelector(state => state.events)

  const renderedEvents = events.map(event => {
    return <Event {...event} key={event.id} />
  })

  return (
    <article>
      <section
        className='bg-white p-4 rounded hover:shadow-xl mb-5 mx-4 overflow-y-auto'
        style={{ width: '50vh', height: '80vh' }}
      >
        <img
          src='https://via.placeholder.com/450x80?text=Your+Logo+Here'
          alt='Organisation Name'
        />
        <Input
          extraClasses='text-5xl font-extrabold text-center w-full mt-2'
          value='Events this week'
        />
        <Input
          extraClasses='text-3xl text-center mb-6 w-full mt-2'
          value='Come out and get involved!'
        />

        {renderedEvents}
      </section>
    </article>
  )
}
