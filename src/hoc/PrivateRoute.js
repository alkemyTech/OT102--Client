import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// A wrapper for <Route> that redirects to the home
// screen if you're not yet authenticated.
export default function PrivateRoute() {
  const isLogged = true // TODO check if user is logged in

  return isLogged ? <Outlet /> : <Navigate replace to="/" />
}
