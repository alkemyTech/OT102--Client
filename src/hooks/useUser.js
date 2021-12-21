import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectUserData,
  setUserData,
  destroyUserData,
} from '../app/slices/auth'
import { userLogin, registerUser, getUserData } from '../services/authService'

export default function useUser() {
  const userData = useSelector(selectUserData)
  const jwt = window.localStorage.getItem('x-access-token')
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userData && jwt) {
      getUserData().then(({ data }) => {
        const { body } = data
        dispatch(setUserData(body))
      })
    }
  }, [])

  const newUser = (user) =>
    registerUser(user).then(({ data }) => {
      const { body } = data
      dispatch(setUserData(body.user))
      window.localStorage.setItem('x-access-token', body.token)
    })

  const loginUser = (user) =>
    userLogin(user).then(({ data }) => {
      const { body } = data
      dispatch(setUserData(body.user))
      window.localStorage.setItem('x-access-token', body.token)
    })
  const logoutUser = () => {
    window.localStorage.removeItem('x-access-token')
    dispatch(destroyUserData())
  }

  return {
    loginUser,
    newUser,
    logoutUser,
    isLogged: Boolean(jwt),
    userData,
  }
}
