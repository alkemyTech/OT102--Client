import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

// A wrapper for <Route> that redirects to the home
// screen if you're not admin.
export default function PrivateRoute() {
  const { userData } = useUser()
  if (!userData) return <Navigate to="/" />
  return userData.userRole === 'Admin' ? <Outlet /> : <></>
}
