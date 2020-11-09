import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { EmailEvent } from './EmailEvent'
import { Input } from '../ui-elements/Input'

import { selectEvents } from '../events/eventsSlice'

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
    <article>
      <section
        className='bg-white p-4 rounded hover:shadow-xl mx-4 overflow-y-auto'
        style={{ width: '50vh', height: '80vh' }}
      >
        <img
          src='https://via.placeholder.com/450x80?text=Your+Logo+Here'
          alt='Organisation Name'
        />
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
    </article>
  )
}
