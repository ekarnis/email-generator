import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Header } from './features/header/Header'
import { Button } from './features/button/Button'
import { EventCard } from './features/events/EventCard'
import { EmailPreview } from './features/email/EmailPreview'

import { selectEvents, eventAdded } from './features/events/eventsSlice'

function App () {
  const dispatch = useDispatch()

  const events = useSelector(selectEvents)
  return (
    <div className='App h-full flex flex-col bg-gray-200'>
      <Header />
      <div className='flex w-full flex-grow'>
        <section className='w-3/5 pt-4 px-4 flex flex-col'>
          <header className='flex w-full justify-between mb-4'>
            <h2 className='text-4xl font-extrabold'>Events</h2>
            <Button
              text='Add Event'
              type='primary'
              onClick={() => dispatch(eventAdded())}
            />
          </header>
          <div className='overflow-y-auto flex-grow' style={{ flexBasis: 0 }}>
            {events.map(event => (
              <EventCard eventId={event.id} key={event.id} />
            ))}
          </div>
        </section>

        <section className='w-2/5 pt-4 px-4 flex flex-col items-center'>
          <h2 className='text-4xl font-extrabold mb-4'>Email Preview</h2>
          <EmailPreview />
        </section>
      </div>
    </div>
  )
}

export default App
