import React from 'react'

export function EmailEvent (props) {
  const eventTime = date => {
    let time = new Date(date.date)
    console.log('EmailEvent -> time', time)
    console.log('EmailEvent -> date.date', date.date)

    let timeString =
      time.toLocaleString('default', { weekday: 'short' }) +
      ', ' +
      time.toLocaleString('default', { month: 'short' }) +
      ' ' +
      time.getDate()

    if (date.startTime) {
      timeString += ' at ' + convert24To12(date.startTime)
      if (date.endTime) timeString += ' - ' + convert24To12(date.endTime)
    }

    return timeString
  }

  const convert24To12 = timeString => {
    let suffix,
      hoursFormatted,
      hours = timeString.substring(0, 2),
      minutes = timeString.substring(3, 6)

    // figure out am or pm, remove leading 0
    if (hours > 12) {
      suffix = 'PM'
      hoursFormatted = hours - 12
    } else if (parseInt(hours) === 12) {
      suffix = 'PM'
      hoursFormatted = hours
    } else {
      suffix = 'AM'

      if (hours >= 10) hoursFormatted = hours
      else if (hours === '00') hoursFormatted = '12'
      else hoursFormatted = timeString.substring(1, 2)
    }

    // if minutes === 00, only show hours
    if (minutes === '00') return hoursFormatted + ' ' + suffix
    else return hoursFormatted + ':' + timeString.substring(3, 6) + ' ' + suffix
  }

  const renderDates = dates => {
    if (dates.length === 1)
      return (
        <p>
          <b className='mr-2'>WHEN:</b>
          {dates[0].date ? eventTime(dates[0]) : ''}
        </p>
      )
    else
      return dates.map((date, index) => (
        <p key={'date' + index}>
          <b className='mr-2'>DAY {index + 1}:</b>
          {date.date ? eventTime(date) : ''}
        </p>
      ))
  }

  return (
    <div className='my-2'>
      <img
        src={props.image ? props.image : 'https://via.placeholder.com/480x240'}
        alt='Email Logo'
      />
      <div className='text-3xl text-center mb-2'>{props.title}</div>
      {renderDates(props.dates)}
      <p>
        <b className='mr-2'>WHERE:</b>
        {props.location}
      </p>
      <p>{props.description}</p>
    </div>
  )
}
