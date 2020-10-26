import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import eventReducer from '../features/event-card/eventSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer
  }
})
