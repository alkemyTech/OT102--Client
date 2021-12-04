import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import NewsHomeList from './NewsHomeList'

const NewsHome = () =>
  (
    <Container maxW="container.lg" mt="10">
      <Heading
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign="left"
        fontWeight={600}
        fontFamily="Atma"
        maxW="3xl"
      >
        Novedades
      </Heading>
      <NewsHomeList />
    </Container>

  )

export default NewsHome
