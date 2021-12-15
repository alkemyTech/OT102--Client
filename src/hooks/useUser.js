import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserData, destroyUserData } from '../app/slices/auth'

export default function useUser() {
  const userData = useSelector(selectUserData)
  const navigate = useNavigate();

  const jwt = window.localStorage.getItem('x-access-token')
  const dispatch = useDispatch()

  const handleLogout = (user) => {
    dispatch(destroyUserData(user))
    window.localStorage.removeItem('jwt')
    navigate('/', { replace: true })
  }

  return {
    isLogged: Boolean(jwt),
    userData,
    handleLogout,
  }
}
