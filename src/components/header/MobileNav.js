import React from 'react'
import { Stack, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import MobileNavItem from './MobileNavItem'

const MobileNav = ({ navItems, onToggle }) => (
  <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={2}
    display={{ md: 'none' }}
  >
    {navItems.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle} />
    ))}
  </Stack>
)

MobileNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default MobileNav
