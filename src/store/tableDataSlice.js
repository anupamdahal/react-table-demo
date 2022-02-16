import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data : []
}

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    updateData (state, action){
      state.data = action.payload
    }
  }
})

const tableDataActions = tableDataSlice.actions

export { tableDataActions }
export default tableDataSlice