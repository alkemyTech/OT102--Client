import React from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

export default function MemberCard({ member }) {
  return (
    <Flex
      m="9"
      w="50"
      alignItems="flex-start"
      justifyContent="center"
      direction="column"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        // rounded="lg"
        shadow="lg"
        rounded="lg"
        position="relative"
      >
        <Image
          w="240px"
          h="180px"
          objectFit="cover"
          src={member.image}
          alt={`Picture of ${member.name}`}
          rounded="lg"
          fallbackSrc="/images/user-account-avatar.png"
        />
      </Box>
      <Box p="2">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {member.name}
        </Box>
      </Box>
    </Flex>
  )
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}
