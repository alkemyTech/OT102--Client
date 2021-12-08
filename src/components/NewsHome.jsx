import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import NewsHomeList from './NewsHomeList'

const NewsHome = () =>
  (
    <Container maxW="container.lg" mt="10">
      <Text textStyle="title">Novedades</Text>
      <NewsHomeList />
    </Container>

  )

export default NewsHome;
