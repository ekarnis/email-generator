import React from 'react'
import { useDispatch } from 'react-redux'

export function Input (props) {
  const dispatch = useDispatch()

  return (
    <input
      className={
        (props.extraClasses ? props.extraClasses : '') +
        ' border border-gray-300 hover:border-blue-500 rounded px-2 py-1'
      }
      placeholder={props.placeHolder}
      type={props.type ? props.type : 'text'}
      value={props.value}
      onChange={e => dispatch(props.onChange(e.target.value))}
    />
  )
}
