import React from 'react'

export function Event (props) {
  const eventTime = () => {
    let time = new Date(props.date)
    console.log('eventTime -> time', time)
  }

  return (
    <div className='my-2'>
      <img
        src={props.image ? props.image : 'https://via.placeholder.com/480x240'}
        alt=''
      />
      <div className='text-3xl text-center mb-2'>{props.title}</div>
      <p>
        <b className='mr-2'>WHEN:</b>
        {eventTime()}
      </p>
      <p>
        <b className='mr-2'>WHERE:</b>
        {props.location}
      </p>
      <p>{props.description}</p>
    </div>
  )
}
