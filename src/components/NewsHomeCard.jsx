import React from 'react'
// import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

// const navigate = useNavigate()
const SocialProfileWithImage = ({
  id,
  image,
  name,
  content,
  ...props
}) => (

  <Center py={6} {...props} key={id}>
    <Box
      columns={{ base: 1, md: 4 }}
      spacing={5}
      maxW="270px"
      w="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="sm"
      rounded="md"
      overflow="hidden"
    >
      <Image
        h="120px"
        w="full"
        src={image}
        objectFit="cover"
      />

      <Box p={6}>
        <Stack spacing={1} align="left" mb={5}>
          <Text textStyle="subtitle">{name}</Text>
          <Text textStyle="text">{content}</Text>
        </Stack>
        <Button
          mt={5}
          bg={useColorModeValue('brand.yellow', 'gray.900')}
          // onClick={() => navigate('news/:id')}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          }}
        >
          Leer +
        </Button>
      </Box>
    </Box>
  </Center>
)

SocialProfileWithImage.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
};

SocialProfileWithImage.defaultProps = {
  id: '50',
  image: '50',
  name: '50',
  content: '50',
};

export default SocialProfileWithImage
