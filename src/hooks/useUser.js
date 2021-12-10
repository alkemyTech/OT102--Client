import { useSelector } from 'react-redux'
import { selectUserData } from '../app/slices/auth'

export default function useUser() {
  const userData = useSelector(selectUserData)

  const jwt = window.localStorage.getItem('x-access-token')

  return {
    isLogged: Boolean(jwt),
    userData,
  }
}
