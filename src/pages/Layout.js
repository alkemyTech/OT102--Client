import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
      <Header />
      --layout--
      <Outlet />
      --layout--
      <Footer />
    </div>
  )
}
