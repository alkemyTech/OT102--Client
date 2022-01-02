import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import {
  FiUsers,
  FiList,
  FiHome,
  FiBookOpen,
  FiRss,
  FiMessageSquare,
  FiCalendar,
  FiUser,
  FiLayout,
} from 'react-icons/fi'
import NavItem from './NavItem'

import useUser from '../../hooks/useUser'

const LINKS_ITEMS = [
  { name: 'Actividades', href: 'activities', icon: FiCalendar },
  { name: 'Categorias', href: 'categories', icon: FiList },
  { name: 'Contactos', href: 'contacts', icon: FiBookOpen },
  { name: 'Editar Home', href: 'edit-home', icon: FiLayout },
  { name: 'Novedades', href: 'news', icon: FiRss },
  { name: 'Usuarios', href: 'users', icon: FiUsers },
  { name: 'Testimonios', href: 'testimonials', icon: FiMessageSquare },
  { name: 'HomePage', href: '/', icon: FiHome },
]

export default function Sidebar({ onClose, ...rest }) {
  const { userData } = useUser()

  return (
    <Box
      name="sidebar"
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/backoffice">
          <Image
            h="45px"
            src="../../images/logo-somos-mas.png"
            objectFit="cover"
          />
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {userData && (
        <Box pt={4}>
          <NavItem
            icon={FiUser}
            href="users/me"
            onClick={onClose}
          >
            Editar perfil
          </NavItem>
          {userData.userRole === 'Admin'
          && LINKS_ITEMS.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              href={link.href}
              onClick={onClose}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
      )}
    </Box>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
}
