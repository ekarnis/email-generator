import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from '../features/events/eventsSlice'
import emailReducer from '../features/email/emailSlice'

export default configureStore({
  reducer: {
    events: eventsReducer,
    email: emailReducer
  }
})
