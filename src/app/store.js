import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth,
  },
})
