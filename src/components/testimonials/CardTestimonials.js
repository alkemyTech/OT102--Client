import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Center,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

const TestimonialCard = ({
  name,
  content,
  image,
  id,
  ...props
}) => (
  <Center {...props} key={id} marginBottom={20}>
    <Flex
      boxShadow="lg"
      maxW="640px"
      direction={{ base: 'column-reverse', md: 'row' }}
      width="full"
      rounded="xl"
      p={10}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage:
          'https://e7.pngegg.com/pngimages/264/841/png-clipart-quotation-mark-greinarmerki-punctuation-quiromasaje-signo-comillas-blue-text.png',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
      }}
    >
      <Flex direction="column" textAlign="left" justifyContent="space-between" minH={{ base: 120, md: 180, lg: 220 }}>
        <chakra.p
          fontWeight="400"
          fontSize={{ base: 13, md: 15 }}
          pb={4}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: `${content}` }}
        />
        <chakra.p fontWeight="bold" fontSize={14}>
          {name}
        </chakra.p>
      </Flex>
      <Avatar
        src={image}
        height="80px"
        width="80px"
        alignSelf="center"
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  </Center>
)

TestimonialCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
}

TestimonialCard.defaultProps = {
  id: '1',
  image:
    'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_desktop/public/Unicef-Widnicky006.jpg?itok=2Du-9s5F',
  name: 'testimonio',
  content: 'Testimonios Somos Mas',
}

export default TestimonialCard
