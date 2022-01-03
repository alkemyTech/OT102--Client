import React from 'react'
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
import { Link as ReactRouterLink } from 'react-router-dom'

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

      <Box p={5}>
        <Stack spacing={1} align="left" mb={5}>
          <Text textStyle="subtitle">{name}</Text>
          <Text textStyle="text">{content.length > 115 ? `${content.substring(0, 112)}...` : content}</Text>
        </Stack>
        <Button
          as={ReactRouterLink}
          to={`/novedades/${id}`}
          mt={5}
          bg={useColorModeValue('brand.yellow', 'gray.900')}
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
  id: '1',
  image: 'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_desktop/public/Unicef-Widnicky006.jpg?itok=2Du-9s5F',
  name: 'Novedades',
  content: 'Novedades Somos Mas',
};

export default SocialProfileWithImage
