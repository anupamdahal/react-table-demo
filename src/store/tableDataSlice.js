import { createSlice } from "@reduxjs/toolkit"
import { requestColumn } from "../components/Table/Colums"

const initialState = {
  column : requestColumn,
  data : []
}

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    updateColumn (state, payload){
      state.column = payload.column
    },
    updateData (state, payload){
      state.data = payload.data
    }
  }
})

const tableDataActions = tableDataSlice.actions

export { tableDataActions }
export default tableDataSlice