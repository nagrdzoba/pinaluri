import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherString: '',
  },
  reducers: {
    setWeather: (state, action) => {
      state.weatherString = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer