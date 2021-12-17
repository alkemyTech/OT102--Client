import React, { useState, useEffect } from 'react'
import { Container, Text } from '@chakra-ui/react'
import { getOrganizationById } from '../../services/organizationsService'

const WelcomeText = () => {
  const [ong, setOng] = useState({ welcomeText: 'Bienvenido' })

  useEffect(() => {
    getOrganizationById(1)
      .then((organization) => {
        setOng(organization.data.body)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }, [])

  return (
    <div>
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
    </div>
  )
}

export default WelcomeText
