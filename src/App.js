import React from 'react'
import { Counter } from './features/counter/Counter'
import { Header } from './features/header/Header'
import { Button } from './features/button/Button'
import { EventCard } from './features/event-card/EventCard'

function App () {
  return (
    <div className='App h-full flex flex-col bg-gray-200'>
      <Header />
      <div className='flex w-full flex-grow'>
        <section className='w-3/5 pt-4 px-4 flex flex-col'>
          <header className='flex w-full justify-between'>
            <h2 className='text-4xl font-extrabold'>Events</h2>
            <Button text='Add Event' type='primary' />
          </header>
          <div
            className='overflow-y-auto flex-grow mt-2'
            style={{ flexBasis: 0 }}
          >
            <EventCard />

            <EventCard />

            <EventCard />
          </div>
        </section>

        <section className='w-2/5'>
          <Counter />
        </section>
      </div>
    </div>
  )
}

export default App
