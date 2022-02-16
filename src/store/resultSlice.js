import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  open: false,
  id: null,
  data : []
}

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    toggleOpen(state){
      state.open = !state.open
    },
    updateId(state, action){
      state.id = action.payload
    },
    updateData (state, action){
      state.data = action.payload
    }
  }
})

const resultAction = resultSlice.actions

export { resultAction }
export default resultSlice