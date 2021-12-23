import React from 'react'
import PropTypes from 'prop-types'
import {
  Link as ReactRouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'
import {
  Flex,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react'

export default function NavItem({
  icon,
  children,
  href,
  ...rest
}) {
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link as={ReactRouterLink} to={href} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'var(--chakra-colors-brand-cyan)',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text
          borderBottom={
            match ? 'solid 2px var(--chakra-colors-brand-rouge)' : null
          }
        >
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

NavItem.propTypes = {
  icon: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}
