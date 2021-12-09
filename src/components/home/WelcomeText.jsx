import React, { useState, useEffect } from 'react';
import { Container, Text } from '@chakra-ui/react'
import { getOrganizationById } from '../../services/organizationsService'

const WelcomeText = () => {
  const [ong, setOng] = useState([])

  useEffect(() => {
    getOrganizationById(1).then((organization) => {
      setOng(organization.data.body)
      // eslint-disable-next-line no-console
    }).catch((error) => console.log(error))
  }, [])

  return (
    <Container maxW="container.lg">
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        textAlign="left"
        fontWeight={300}
        maxW="3xl"
      >
        {ong.welcomeText}
      </Text>
    </Container>
  )
}

export default WelcomeText;
