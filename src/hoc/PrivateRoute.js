import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

// A wrapper for <Route> that redirects to the home
// screen if you're not yet authenticated.
export default function PrivateRoute() {
  const { isLogged } = useUser()

  if (!isLogged) {
    return <Navigate replace to="/" />
  }
  return <Outlet />
}
