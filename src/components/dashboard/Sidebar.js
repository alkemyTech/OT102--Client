import React from 'react'
import PropTypes from 'prop-types';
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
  FiTool,
  FiBookOpen,
  FiRss,
  FiMessageSquare,
  FiCalendar,
  FiUser,
} from 'react-icons/fi'
import NavItem from './NavItem'

import useUser from '../../hooks/useUser'

const LinkItems = [
  { name: 'Actividades', href: 'activities', icon: FiCalendar },
  { name: 'Categorias', href: 'categories', icon: FiList },
  { name: 'Contactos', href: 'contacts', icon: FiBookOpen },
  { name: 'Organizacion', href: 'edit-organization', icon: FiTool },
  { name: 'Novedades', href: 'news', icon: FiRss },
  { name: 'Usuarios', href: 'users', icon: FiUsers },
  { name: 'Testimonios', href: 'testimonials', icon: FiMessageSquare },
  { name: 'HomePage', href: '/', icon: FiHome },
]

export default function Sidebar({ onClose, ...rest }) {
  const { userData } = useUser()

  return (
    <Box
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
        <Image
          h="45px"
          src="../../images/logo-somos-mas.png"
          objectFit="cover"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box pt={4}>
        <NavItem
          icon={FiUser}
          href={`users/${userData.userId}`}
          onClick={onClose}
        >
          Editar perfil
        </NavItem>
        {userData.userRole === 'Admin'
        && LinkItems.map((link) => (
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
    </Box>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};
