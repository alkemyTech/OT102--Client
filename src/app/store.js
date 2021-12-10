import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'
import contactsreducer from './slices/contacts'

export default configureStore({
  reducer: {
    contacts: contactsreducer,
    auth,
  },
})
