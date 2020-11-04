import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  {
    dates: [
      {
        date: '',
        endTime: '',
        id: nanoid(),
        startTime: ''
      }
    ],
    description: '',
    eventLink: '',
    id: nanoid(),
    image: '',
    location: '',
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
          dates: [
            {
              date: '',
              endTime: '',
              id: nanoid(),
              startTime: ''
            }
          ],
          description: '',
          eventLink: '',
          id: nanoid(),
          image: '',
          location: '',
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
  },

  dateAdded: (state, action) => {
    const existingEvent = state.find(event => event.id === action.payload)
    if (existingEvent)
      existingEvent.dates.push({
        date: '',
        endTime: '',
        id: nanoid(),
        startTime: ''
      })
  },

  dateRemoved: (state, action) => {
    const existingEvent = state.find(event => event.id === action.payload.id)
    if (existingEvent)
      existingEvent.dates.filter(date => date.id !== action.payload.dateId)
  },

  dateUpdated (state, action) {
    const existingEvent = state.find(event => event.id === action.payload.id)
    if (existingEvent) {
      const existingDate = existingEvent.dates.find(
        date => date.id === action.payload.date.id
      )
      if (existingDate) Object.assign(existingDate, action.payload.date)
    }
  }
}

export const eventSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: reducers
})

export const {
  eventAdded,
  eventRemoved,
  eventUpdated,
  dateAdded,
  dateRemoved,
  dateUpdated
} = eventSlice.actions

export const selectEvents = state => state.events

export default eventSlice.reducer
