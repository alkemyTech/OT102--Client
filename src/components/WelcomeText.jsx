import React from 'react'
import { Container, Text } from '@chakra-ui/react'

const WelcomeText = () =>
  (
    <Container maxW="container.lg">
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        textAlign="left"
        fontWeight={300}
        maxW="3xl"
      >
        Con tu ayuda más chicos podrán estudiar y alimentarse.
        Las donaciones son destinadas a albergues, material escolar, abrigo y comedores.
      </Text>
    </Container>
  )

export default WelcomeText
