import React from 'react'
import PropTypes from 'prop-types'
import {
  Link as ReactRouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'
import {
  Flex,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const MobileNavItem = ({
  label,
  href,
  onToggle,
  ...rest
}) => {
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
        {...rest}
      >
        <Link
          as={ReactRouterLink}
          to={href}
          borderBottom={
            match ? 'solid 2px var(--chakra-colors-brand-rouge)' : null
          }
          fontWeight={500}
          fontFamily="Atma"
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Link>
      </Flex>
    </Stack>
  )
}

MobileNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
}

MobileNavItem.defaultProps = {
  onToggle: () => {},
}
export default MobileNavItem
