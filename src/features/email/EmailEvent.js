import React from 'react'

export function EmailEvent (props) {
  const eventTime = () => {
    let time = new Date(props.date)
    let timeString =
      time.toLocaleString('default', { weekday: 'short' }) +
      ', ' +
      time.toLocaleString('default', { month: 'short' }) +
      ' ' +
      time.getDay()

    if (props.startTime) {
      timeString += ' at ' + convert24To12(props.startTime)
      if (props.endTime) timeString += ' - ' + convert24To12(props.endTime)
    }

    return timeString
  }

  const convert24To12 = timeString => {
    let suffix,
      firstTwoFormatted,
      firstTwo = timeString.substring(0, 2)

    if (firstTwo > 12) {
      suffix = 'PM'
      firstTwoFormatted = firstTwo - 12
    } else if (parseInt(firstTwo) === 12) {
      suffix = 'PM'
      firstTwoFormatted = firstTwo
    } else {
      suffix = 'AM'

      if (firstTwo >= 10) firstTwoFormatted = firstTwo
      else if (firstTwo === '00') firstTwoFormatted = '12'
      else firstTwoFormatted = timeString.substring(1, 2)
    }

    return firstTwoFormatted + ':' + timeString.substring(3, 6) + ' ' + suffix
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
        {props.date ? eventTime() : ''}
      </p>
      <p>
        <b className='mr-2'>WHERE:</b>
        {props.location}
      </p>
      <p>{props.description}</p>
    </div>
  )
}
