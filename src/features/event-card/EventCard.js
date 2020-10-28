import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setDate,
  setDescription,
  setEndTime,
  setEventLink,
  setImage,
  setLocation,
  setStartTime,
  setTitle,
  selectDate,
  selectDescription,
  selectEndTime,
  selectEventLink,
  selectImage,
  selectLocation,
  selectStartTime,
  selectTitle
} from './eventSlice'

import { Button } from '../button/Button'
import { Input } from '../input/Input'

export function EventCard (props) {
  const date = useSelector(selectDate)
  const description = useSelector(selectDescription)
  const endTime = useSelector(selectEndTime)
  const eventLink = useSelector(selectEventLink)
  const image = useSelector(selectImage)
  const location = useSelector(selectLocation)
  const startTime = useSelector(selectStartTime)
  const title = useSelector(selectTitle)

  const dispatch = useDispatch()

  return (
    <article className='bg-white p-4 rounded hover:shadow-xl mb-5 mx-4'>
      <header className='flex w-full justify-between mb-4'>
        <h2 className='text-3xl font-extrabold'>{title ? title : 'Title'}</h2>
        <Button text='Delete' type='primary' />
      </header>

      <div className='flex w-full justify-between mb-3'>
        <div className='flex flex-col h-full justify-evenly flex-grow mx-4'>
          <span className='mb-3'>
            <p className='text-xl font-bold'>Title</p>
            <Input extraClasses='w-full' value={title} onChange={setTitle} />
          </span>
          <span>
            <p className='text-xl font-bold'>Location</p>
            <Input
              placeHolder='Location of event'
              extraClasses='w-full'
              value={location}
              onChange={setLocation}
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Date</p>
            <Input
              type='date'
              extraClasses='w-full'
              value={date}
              onChange={setDate}
            />
          </span>
        </div>

        <div className='flex flex-col h-full justify-evenly flex-grow mx-4'>
          <span className='mb-3'>
            <p className='text-xl font-bold'>Image Link</p>
            <Input
              placeHolder='https://i.imgur.com/PH6Yj0F.png'
              extraClasses='w-full'
              value={image}
              onChange={setImage}
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Facebook Link</p>
            <Input
              placeHolder='www.facebook.com/events/574206449784456'
              extraClasses='w-full'
              value={eventLink}
              onChange={setEventLink}
            />
          </span>
          <span>
            <p className='text-xl font-bold'>Start</p>
            <Input
              type='time'
              extraClasses='w-full'
              value={startTime}
              onChange={setStartTime}
            />
          </span>
        </div>

        <span className='flex flex-col  flex-grow mx-4'>
          <p className='text-xl font-bold'>Description</p>
          <textarea
            className='border border-gray-300 hover:border-blue-500 rounded px-2 py-1 flex-grow'
            style={{ scrollbarColor: 'red yellow;' }}
            value={description}
            onChange={e => dispatch(setDescription(e.target.value))}
          ></textarea>
          <span>
            <p className='text-xl font-bold'>End</p>
            <Input
              type='time'
              extraClasses='w-full'
              value={endTime}
              onChange={setEndTime}
            />
          </span>
        </span>
      </div>
    </article>
  )
}
