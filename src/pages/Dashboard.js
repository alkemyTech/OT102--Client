import {
  Box,
  Center,
  HStack,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Stack name="dashboard-stack" flexDir="row" flexGrow={1} minH="50vh">
      <VStack
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
      >
        <Box> my Dashboard</Box>
        <Box>mi perfil</Box>
        <Box>mis opciones</Box>
        <Box>mis opciones</Box>
      </VStack>

      <Center name="dashboard-oulet" flexGrow={1}>
        <Outlet />
      </Center>
    </Stack>
  )
}
