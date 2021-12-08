import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import contactsreducer from '../features/contacts/contactsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsreducer,
  },
})
