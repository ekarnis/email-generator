import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Events this week',
  subTitle: 'Come out and get involved!'
}

const reducers = {
  titleUpdated: (state, action) => {
    state.title = action.payload
  },
  subTitleUpdated: (state, action) => {
    state.subTitle = action.payload
  }
}

export const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: reducers
})

export const { titleUpdated, subTitleUpdated } = emailSlice.actions

export const selectTitle = state => state.email.title
export const selectSubTitle = state => state.email.subTitle

export default emailSlice.reducer
