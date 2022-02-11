import { configureStore } from "@reduxjs/toolkit"

import requestIDSlice from "./requestIDSlice"
import tableDataSlice from "./tableDataSlice"

const store = configureStore({
  reducer: {
    requestID: requestIDSlice.reducer,
    tableData: tableDataSlice.reducer,
  }
})

export default store

