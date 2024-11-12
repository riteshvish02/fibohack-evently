import { configureStore } from '@reduxjs/toolkit'
import User from "./reducers/userSlice"
export default configureStore({
  reducer: {
    User:User
  },
})