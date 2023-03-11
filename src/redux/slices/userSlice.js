import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: null,
    token: null,
    id: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    // getUser(state, action) {
    //   state.user = action.payload
    // },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
