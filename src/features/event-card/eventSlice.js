import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    date: '',
    description: '',
    endTime: '',
    eventLink: '',
    image: '',
    location: '',
    startTime: '',
    title: 'Title'
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload
    },
    setEventLink: (state, action) => {
      state.eventLink = action.payload
    },
    setImage: (state, action) => {
      state.image = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    }
  }
})

export const {
  setDate,
  setDescription,
  setEndTime,
  setEventLink,
  setImage,
  setLocation,
  setStartTime,
  setTitle
} = eventSlice.actions

export const selectDate = state => state.event.date
export const selectDescription = state => state.event.description
export const selectEndTime = state => state.event.endTime
export const selectEventLink = state => state.event.eventLink
export const selectImage = state => state.event.image
export const selectLocation = state => state.event.location
export const selectStartTime = state => state.event.startTime
export const selectTitle = state => state.event.title

export default eventSlice.reducer
