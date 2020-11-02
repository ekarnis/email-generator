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
    reducer (state, action) {
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
    (state = state.filter(event => event.id !== action.payload)),

  eventUpdated (state, action) {
    const {
      id,
      date,
      description,
      endTime,
      eventLink,
      image,
      location,
      startTime,
      title
    } = action.payload
    const existingEvent = state.find(event => event.id === id)
    if (existingEvent) {
      existingEvent.date = date
      existingEvent.description = description
      existingEvent.endTime = endTime
      existingEvent.eventLink = eventLink
      existingEvent.image = image
      existingEvent.location = location
      existingEvent.startTime = startTime
      existingEvent.title = title
    }
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
