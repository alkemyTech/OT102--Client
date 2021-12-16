import React from 'react'
import { Outlet } from 'react-router-dom'
import ListUsers from './backoffice/users/ListUsers'

export default function Users() {
  return (
    <>
      <h1>List of users</h1>
      <Outlet />
      <ListUsers />
    </>
  )
}
