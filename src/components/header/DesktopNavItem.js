import React from 'react'
import PropTypes from 'prop-types'
import {
  Link as ReactRouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'

import { Link, useColorModeValue } from '@chakra-ui/react'

const DesktopNavItem = ({ href, label }) => {
  // https://reactrouter.com/docs/en/v6/examples/custom-link
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true })

  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('brand.blue', 'white')

  return (
    <Link
      key={label}
      as={ReactRouterLink} // https://chakra-ui.com/docs/navigation/link#usage-with-routing-library
      to={href}
      p={2}
      borderBottom={match ? 'solid 2px var(--chakra-colors-brand-rouge)' : null}
      fontSize="md"
      fontFamily="Atma"
      fontWeight={500}
      color={linkColor}
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}
    >
      {label}
    </Link>
  )
}

DesktopNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
export default DesktopNavItem
