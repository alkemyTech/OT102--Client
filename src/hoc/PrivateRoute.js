import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute() {
  const isLogged = false

  if (isLogged) {
    return <Outlet />
  }
  return <Navigate replace to="/login" />
}
