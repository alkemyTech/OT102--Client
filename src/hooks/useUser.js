import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, setUserData, destroyUserData } from '../app/slices/auth'
import { registerUser } from '../services/authService'

export default function useUser() {
  const userData = useSelector(selectUserData)
  const jwt = window.localStorage.getItem('x-access-token')
  const dispatch = useDispatch()

  const newUser = (user) =>
    registerUser(user).then(({ data }) => {
      const { body } = data
      dispatch(setUserData(body.user))
      window.localStorage.setItem('x-access-token', body.token)
    })

  const logoutUser = () => {
    window.localStorage.removeItem('x-access-token')
    dispatch(destroyUserData())
  }

  return {
    newUser,
    logoutUser,
    isLogged: Boolean(jwt),
    userData,
  }
}
