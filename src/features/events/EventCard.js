import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { eventUpdated, eventRemoved } from './eventsSlice'

import { Button } from '../button/Button'
import { Input } from '../input/Input'

export function EventCard (props) {
  const dispatch = useDispatch()

  const event = useSelector(state =>
    state.events.find(event => event.id === props.eventId)
  )

  if (!event) {
    return (
      <section>
        <h2>Event not found!</h2>
      </section>
    )
  }

  return (
    <article className='bg-white p-4 rounded hover:shadow-xl mb-5 mx-4'>
      <header className='flex w-full justify-between mb-4'>
        <h2 className='text-3xl font-extrabold'>
          {event.title ? event.title : 'Title'}
        </h2>
        <Button
          text='Delete'
          type='primary'
          onClick={() => dispatch(eventRemoved(event.id))}
        />
      </header>

      <div className='flex w-full justify-between mb-3'>
        <div className='flex flex-col h-full justify-evenly flex-grow mx-4'>
          <span className='mb-3'>
            <p className='text-xl font-bold'>Title</p>
            <Input
              extraClasses='w-full'
              value={event.title}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    title: value
                  })
                )
              }
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Location</p>
            <Input
              placeHolder='Location of event'
              extraClasses='w-full'
              value={event.location}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    location: value
                  })
                )
              }
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Date</p>
            <Input
              type='date'
              extraClasses='w-full'
              value={event.date}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    date: value
                  })
                )
              }
            />
          </span>
        </div>

        <div className='flex flex-col h-full justify-evenly flex-grow mx-4'>
          <span className='mb-3'>
            <p className='text-xl font-bold'>Image Link</p>
            <Input
              placeHolder='https://i.imgur.com/PH6Yj0F.png'
              extraClasses='w-full'
              value={event.image}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    image: value
                  })
                )
              }
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Facebook Link</p>
            <Input
              placeHolder='www.facebook.com/events/574206449784456'
              extraClasses='w-full'
              value={event.eventLink}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    eventLink: value
                  })
                )
              }
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Start</p>
            <Input
              type='time'
              extraClasses='w-full'
              value={event.startTime}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    startTime: value
                  })
                )
              }
            />
          </span>
        </div>

        <span className='flex flex-col  flex-grow mx-4'>
          <p className='text-xl font-bold'>Description</p>
          <textarea
            className='border border-gray-300 hover:border-blue-500 rounded px-2 py-1 flex-grow'
            style={{ scrollbarColor: 'red yellow' }}
            value={event.description}
            onChange={e =>
              dispatch(
                eventUpdated({
                  ...event,
                  description: e.target.value
                })
              )
            }
          ></textarea>
          <span>
            <p className='text-xl font-bold'>End</p>
            <Input
              type='time'
              extraClasses='w-full'
              value={event.endTime}
              onChange={value =>
                dispatch(
                  eventUpdated({
                    ...event,
                    endTime: value
                  })
                )
              }
            />
          </span>
        </span>
      </div>
    </article>
  )
}
