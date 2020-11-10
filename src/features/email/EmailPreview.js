import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { EmailEvent } from './EmailEvent'
import { Input } from '../ui-elements/Input'

import { selectEvents } from '../events/eventsSlice'

import instagram from '../../resources/instagram.png'
import facebook from '../../resources/facebook.png'
import twitter from '../../resources/twitter.png'

import {
  selectTitle,
  selectSubTitle,
  titleUpdated,
  subTitleUpdated
} from './emailSlice'

export function EmailPreview (props) {
  const dispatch = useDispatch()

  const events = useSelector(selectEvents)
  const title = useSelector(selectTitle)
  const subTitle = useSelector(selectSubTitle)

  const renderedEvents = events.map(event => {
    return <EmailEvent {...event} key={event.id} />
  })

  return (
    <article
      className='bg-white rounded hover:shadow-xl overflow-y-auto'
      style={{ width: '50vh', height: '80vh' }}
    >
      <img
        src='https://via.placeholder.com/450x80?text=Your+Logo+Here'
        alt='Organisation Name'
        className='w-full'
      />
      <section className='p-4'>
        <Input
          extraClasses='text-5xl font-extrabold text-center w-full mt-2'
          value={title}
          onChange={value => dispatch(titleUpdated(value))}
        />
        <Input
          extraClasses='text-3xl text-center mb-6 w-full mt-2'
          value={subTitle}
          onChange={value => dispatch(subTitleUpdated(value))}
        />

        {renderedEvents}
      </section>
      <footer className='w-full p-4 bg-red-700 flex justify-between items-center'>
        <a href='www.example.ca'>www.example.ca</a>
        <span className='flex'>
          <img className='w-12 m-2' src={instagram} alt='' />
          <img className='w-12 m-2' src={facebook} alt='' />
          <img className='w-12 m-2' src={twitter} alt='' />
        </span>
      </footer>
    </article>
  )
}
