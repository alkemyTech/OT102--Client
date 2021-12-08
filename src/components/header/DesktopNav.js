import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@chakra-ui/react'

import DesktopNavItem from './DesktopNavItem'

const DesktopNav = ({ navItems }) => (
  <Stack direction="row" alignItems="center" spacing={0}>
    {navItems.map(DesktopNavItem)}
  </Stack>
)

DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
}

export default DesktopNav
