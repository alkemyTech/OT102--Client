import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    destroyUserData: (state) => {
      state.userData = null
    },
  },
})

export const { setUserData, destroyUserData } = authSlice.actions

/**
 * Accepts an object to set the new state of user
 * @async
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.password
 * @return Promise {object} the logged user and set the new state with only body data.
 */

/**
 * Function to get the user logged data in the state
 * @param {object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.email
 * @param {string} user.password
 * @return An {object} of the logged user state. It can be used on useSelect() function as parameter
 */
export const selectUserData = (state) => state.auth.userData

export default authSlice.reducer
