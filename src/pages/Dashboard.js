import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'

import Sidebar from '../components/dashboard/Sidebar'
import MobileNav from '../components/dashboard/MovileNav'

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />

      <Drawer
        placement="top"
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  )
}
