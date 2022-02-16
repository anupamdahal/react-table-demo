import { configureStore } from "@reduxjs/toolkit"

import requestIDSlice from "./requestIDSlice"
import tableDataSlice from "./tableDataSlice"
import resultSlice from "./resultSlice"

const store = configureStore({
  reducer: {
    requestID: requestIDSlice.reducer,
    tableData: tableDataSlice.reducer,
    result: resultSlice.reducer
  }
})

export default store

