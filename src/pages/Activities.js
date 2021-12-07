import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Activities() {
  return (
    <>
      <h1>All Activities</h1>
      <Outlet />
    </>
  )
}
