import {
  Box,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <HStack name="dashboard-stack">
      <VStack border="1px" minWidth={200}>
        <Box> my Dashboard</Box>
        <Box>mi perfil</Box>
      </VStack>
      <Stack name="dashboard-oulet" flexGrow={1}>
        <Outlet />
      </Stack>
    </HStack>
  )
}
