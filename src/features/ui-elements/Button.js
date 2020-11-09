import React from 'react'

export function Button (props) {
  let colour
  switch (props.type) {
    case 'inverted':
      colour =
        'bg-white hover:bg-red-700 text-red-700 hover:text-white border border-transparent hover:border-white'
      break
    case 'primary':
      colour =
        'bg-red-700 hover:bg-white text-white hover:text-red-700 border border-transparent hover:border-red-700'
      break
    default:
      break
  }
  return (
    <button
      className={
        colour +
        (props.extraClasses ? ' ' + props.extraClasses : '') +
        ' font-bold rounded px-4 py-2 mx-2'
      }
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
