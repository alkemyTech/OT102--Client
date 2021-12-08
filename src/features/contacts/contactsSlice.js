import { createSlice } from '@reduxjs/toolkit'
import { getAllContacts } from '../../services/contactsService'

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
  },
  reducers: {
    contactsList: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { contactsList } = contactSlice.actions

export const getContacts = () => async (dispatch) => {
  try {
    const contacts = await getAllContacts() // http contactsService
    dispatch(contactsList(contacts.data.body))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default contactSlice.reducer
