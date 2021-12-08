import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// A wrapper for <Route> that redirects to the home
// screen if you're not admin.
export default function PrivateRoute() {
  const isAdmin = true // TODO check if user is admin

  return isAdmin ? <Outlet /> : <Navigate replace to="/" />
}
