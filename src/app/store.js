import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import counterReducer from '../features/counter/counterSlice'
import contactsreducer from '../features/contacts/contactsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsreducer,
    auth,
  },
})
