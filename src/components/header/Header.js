import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import useUser from '../../hooks/useUser'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Nosotros',
    href: 'nosotros',
  },
  {
    label: 'Actividades',
    href: 'actividades',
  },
  {
    label: 'Novedades',
    href: 'novedades',
  },
  {
    label: 'Testimonios',
    href: 'testimonios',
  },
  {
    label: 'Contacto',
    href: 'contacto',
  },
]

export default function WithSubnavigation() {
  const navigate = useNavigate()
  const { isLogged } = useUser()
  const { isOpen, onToggle } = useDisclosure()
  const { logoutUser } = useUser()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 0, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex
          minWidth="85px"
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Link to="/">
            <Image
              h="45px"
              src="/images/logo-somos-mas.png"
              objectFit="cover"
            />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav isLogged={isLogged} navItems={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={2}
        >
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontWeight={600}
            bg="brand.rouge"
            onClick={() => navigate('donar')}
            _hover={{
              bg: 'brand.gray1',
            }}
          >
            Dona!
          </Button>
          {isLogged ? (
            <>
              <Button
                display={{ base: '1', md: 'inline-flex' }}
                px={{ base: '15px', md: '25px' }}
                fontWeight={400}
                bg="brand.gray1"
                onClick={handleLogout}
                _hover={{
                  bg: 'brand.cyan',
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                display={{ base: '1', md: 'inline-flex' }}
                px={{ base: '15px', md: '25px' }}
                fontWeight={400}
                bg="brand.gray1"
                onClick={() => navigate('login')}
                _hover={{
                  bg: 'brand.cyan',
                }}
              >
                Login
              </Button>

              <Button
                display={{ base: '1', md: 'inline-flex' }}
                px={{ base: '15px', md: '25px' }}
                fontWeight={400}
                bg="brand.gray1"
                onClick={() => navigate('register')}
                _hover={{
                  bg: 'brand.yellow',
                }}
              >
                Registracion
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          isLogged={isLogged}
          onToggle={onToggle}
          navItems={NAV_ITEMS}
        />
      </Collapse>
    </Box>
  )
}
