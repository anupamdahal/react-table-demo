import { createSlice } from "@reduxjs/toolkit"
import { ids, key } from "../data/metadata"

const getActive = () => {
  const stored = JSON.parse(localStorage.getItem(key))
  const requestIDs = stored?.length ? stored : ids
  localStorage.setItem(key, JSON.stringify(requestIDs))
  return requestIDs
}
const initialState = {
  active: getActive(),
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
      state.active = action.payload
    }
  }
})

const requestIDActions = requestIDSlice.actions

export { requestIDActions }
export default requestIDSlice