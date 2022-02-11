import { createSlice } from "@reduxjs/toolkit"

import { ids } from '../getData/metadata'

const initialState = {
  active: [...ids],
  selected: []
}

const requestIDSlice = createSlice({
  name: 'requestID',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.selected = [...action.ids]
    },
    updateActive(state, action){
      state.active = [...action.active]
    }
  }
})

const requestIDActions = requestIDSlice.actions

export { requestIDActions }
export default requestIDSlice