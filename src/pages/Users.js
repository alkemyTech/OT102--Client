import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <h1>List of users</h1>
      <Outlet />
    </>
  )
}
