import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import WithSubnavigation from '../components/header/Header'

export default function Layout() {
  return (
    <Stack name="layout-stack" minHeight="100vh">
      <WithSubnavigation />
      <HStack name="layout-oulet" flexGrow={1}>
        <Outlet />
      </HStack>
      <Footer />
    </Stack>
  )
}
