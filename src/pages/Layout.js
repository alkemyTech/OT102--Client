import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import WithSubnavigation from '../components/header/Header'

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <WithSubnavigation />
      <Box flexGrow="1">
        --oulet--
        <Outlet />
        --oulet--
      </Box>
      <Footer />
    </Box>
  )
}
