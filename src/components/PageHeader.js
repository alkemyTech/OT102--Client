import { Button, HStack, Text } from '@chakra-ui/react'
import { PropTypes } from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageHeader({ title, ...rest }) {
  const navigate = useNavigate()

  return (
    <HStack
      name="PageHeader"
      w="full"
      p="10"
      justifyContent="space-around"
      {...rest}
    >
      <Text
        p="4"
        maxW="60%"
        fontSize="xl"
        fontFamily="atma"
        fontStyle="normal"
        borderBottom="1px"
        fontWeight="extrabold"
        borderColor="#E6E6E6"
        flexGrow="1"
      >
        {title}
      </Text>
      <Button
        backgroundColor="var(--chakra-colors-brand-rouge)"
        pt="7"
        pb="6"
        px="4"
        borderRadius={10}
        _hover={{
          bg: 'blue.500',
        }}
        onClick={() => navigate('/donar')}
      >
        <Text
          textAlign="center"
          fontSize="2xl"
          fontStyle="normal"
          fontFamily="atma"
          fontWeight="normal"
          color="white"
        >
          DONA AHORA!
        </Text>
      </Button>
    </HStack>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
