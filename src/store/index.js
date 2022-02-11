import { configureStore } from "@reduxjs/toolkit"

import requestIDSlice from "./requestIDSlice"

const store = configureStore({
  reducer: {
    requestID: requestIDSlice.reducer
  }
})

export default store

