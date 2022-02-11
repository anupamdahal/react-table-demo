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
    updateSelected(state, payload) {
      state.selected = [...payload.ids]
    },
    updateActive(state, payload){
      state.active = [...payload.active]
    }
  }
})

const requestIDActions = requestIDSlice.actions

export { requestIDActions }
export default requestIDSlice