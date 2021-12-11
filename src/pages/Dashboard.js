import React from 'react'
import { Link as ReactRouterLink, Outlet } from 'react-router-dom'
import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  VStack,
  Link,
} from '@chakra-ui/react'

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
        <Link
          as={ReactRouterLink}
          to="users"
          fontWeight={500}
          fontFamily="Atma"
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          Users
        </Link>
      </VStack>

      <Center name="dashboard-oulet" flexGrow={1}>
        <Outlet />
      </Center>
    </Stack>
  )
}
