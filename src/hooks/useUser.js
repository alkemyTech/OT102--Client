import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, destroyUserData } from '../app/slices/auth'

export default function useUser() {
  const userData = useSelector(selectUserData)

  const jwt = window.localStorage.getItem('x-access-token')
  const dispatch = useDispatch()

  const handleLogout = (user) => {
    dispatch(destroyUserData(user))
    window.localStorage.removeItem('jwt')
  }

  return {
    isLogged: Boolean(jwt),
    userData,
    handleLogout,
  }
}
