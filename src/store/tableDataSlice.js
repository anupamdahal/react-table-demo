import { createSlice } from "@reduxjs/toolkit"
import { statusColumn } from "../components/Table/Colums"

const initialState = {
  column : statusColumn,
  data : []
}

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    updateColumn (state, action){
      state.column = action.payload
    },
    updateData (state, action){
      state.data = action.payload
    }
  }
})

const tableDataActions = tableDataSlice.actions

export { tableDataActions }
export default tableDataSlice