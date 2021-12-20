import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import useUser from '../../hooks/useUser'

export default function MobileNav({ onOpen, ...rest }) {
  const { userData } = useUser()

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <Flex
        flex={{ base: 0, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="Toggle Navigation"
          icon={<HamburgerIcon w={5} h={5} />}
        />
      </Flex>
      <Link to="/backoffice">
        <Image
          display={{ base: 'flex', md: 'none' }}
          h="45px"
          src="../../images/logo-somos-mas.png"
          objectFit="cover"
        />
      </Link>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems="center">
          <Avatar size="sm" src={userData && userData.image} />
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            <Text fontSize="sm">{userData && userData.firstName}</Text>
            <Text fontSize="xs" color="gray.600">
              {userData && userData.userRole}
            </Text>
          </VStack>
        </Flex>
      </HStack>
    </Flex>
  )
}

MobileNav.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
