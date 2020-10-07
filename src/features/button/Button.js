import React from 'react'

export function Button (props) {
  let colour
  switch (props.type) {
    case 'inverted':
      colour = 'bg-white hover:bg-gray-200 text-red-600 rounded'
      break

    default:
      break
  }
  return <button className={colour + ' px-4 py-2 mx-2'}>{props.text}</button>
}
