import React from 'react'
import ListUsers from './backoffice/users/ListUsers'
// import { Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <h1>List of users</h1>
      <ListUsers />
      {/* <Outlet /> */}
    </>
  )
}
