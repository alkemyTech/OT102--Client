import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, destroyUserData } from '../app/slices/auth'

export default function useUser() {
  const userData = useSelector(selectUserData)

  const jwt = window.localStorage.getItem('x-access-token')
  const dispatch = useDispatch()

  const logoutUser = () => {
    window.localStorage.removeItem('x-access-token')
    dispatch(destroyUserData())
  }

  return {
    logoutUser,
    isLogged: Boolean(jwt),
    userData,
  }
}
