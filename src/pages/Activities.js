import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Activities() {
  return (
    <>
      <h1>All Activities page</h1>
      <Outlet />
    </>
  )
}
