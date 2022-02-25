import { createSlice } from "@reduxjs/toolkit"
import { getActiveIDs } from "../utils/requestIDHelper"

const initialState = {
  active: getActiveIDs(),
  selected: []
}

const requestIDSlice = createSlice({
  name: 'requestID',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.selected = action.payload
    },
    updateActive(state, action){
      console.log(action)
      state.active = action.payload
    },
    addIds(state, action){
      state.active = [...state.active, ...action.payload]
    }
  }
})

const requestIDActions = requestIDSlice.actions

export { requestIDActions }
export default requestIDSlice