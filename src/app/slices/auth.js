import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../../services/authService'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    destroyUserData: (state) => {
      state.userData = {}
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
export const setUserDataAsync = (userData) => async (dispatch) => {
  const response = await userLogin(userData)
  dispatch(setUserData(response.data.body))
}

/**
 * Function to get the user logged data in the state
 * @param {string} token
 * @param {object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.email
 * @param {string} user.password
 * @return An {object} of the logged user state
 */
export const selectUserData = (state) => state.auth.userData

export default authSlice.reducer
