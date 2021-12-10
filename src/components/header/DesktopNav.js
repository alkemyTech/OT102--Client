import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@chakra-ui/react'

import DesktopNavItem from './DesktopNavItem'

const DesktopNav = ({ navItems, isLogged }) => (
  <Stack direction="row" alignItems="center" spacing={0}>
    {navItems.map(DesktopNavItem)}
    {isLogged ? <DesktopNavItem href="backoffice" label="Backoffice" /> : null}
  </Stack>
)

DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
  isLogged: PropTypes.bool,
}

DesktopNav.defaultProps = {
  isLogged: false,
}

export default DesktopNav
