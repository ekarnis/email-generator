import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  {
    id: nanoid(),
    date: '',
    description: '',
    endTime: '',
    eventLink: '',
    image: '',
    location: '',
    startTime: '',
    title: 'Title'
  }
]

const reducers = {
  eventAdded: {
    reducer: (state, action) => {
      state.push(action.payload)
    },
    prepare () {
      return {
        payload: {
          id: nanoid(),
          date: '',
          description: '',
          endTime: '',
          eventLink: '',
          image: '',
          location: '',
          startTime: '',
          title: 'Title'
        }
      }
    }
  },

  eventRemoved: (state, action) =>
    state.filter(event => event.id !== action.payload),

  eventUpdated (state, action) {
    const existingEvent = state.find(event => event.id === action.payload.id)
    if (existingEvent) Object.assign(existingEvent, action.payload)
  }
}

export const eventSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: reducers
})

export const { eventAdded, eventRemoved, eventUpdated } = eventSlice.actions

export const selectEvents = state => state.events

export default eventSlice.reducer
