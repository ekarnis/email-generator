import React from 'react'

export function Button (props) {
  let colour
  switch (props.type) {
    case 'inverted':
      colour = 'bg-white hover:bg-gray-300 text-red-600'
      break
    case 'primary':
      colour = 'bg-red-700 hover:bg-red-800 text-white'
      break
    default:
      break
  }
  return (
    <button className={colour + ' font-bold rounded px-4 py-2 mx-2'}>
      {props.text}
    </button>
  )
}
