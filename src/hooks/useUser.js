import { useSelector } from 'react-redux'
import { selectUserData, setUserData } from '../app/slices/auth'
import { registerUser } from '../services/authService'

export default function useUser() {
  const userData = useSelector(selectUserData)
  const jwt = window.localStorage.getItem('x-access-token')

  const newUser = (data) =>
    registerUser(data).then(({ body }) => {
      setUserData(body)
      window.localStorage.set('x-access-token', body.token)
    })

  return {
    newUser,
    isLogged: Boolean(jwt),
    userData,
  }
}
