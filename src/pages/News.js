import React from 'react'
import { Outlet } from 'react-router-dom'

export default function News() {
  return (
    <>
      <div>
        <h1>List of news page</h1>
      </div>
      <Outlet />
    </>
  )
}
