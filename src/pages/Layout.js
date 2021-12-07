import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import WithSubnavigation from '../components/Header'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <WithSubnavigation />
      --oulet--
      <Outlet />
      --oulet--
      <Footer />
    </div>
  )
}
