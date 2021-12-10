import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import WithSubnavigation from '../components/header/Header'

export default function Layout() {
  return (
    <Stack name="layout-stack" minHeight="100vh">
      <WithSubnavigation />
      <Box name="layout-oulet" flexGrow={1} style={{ margin: 0 }}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  )
}
