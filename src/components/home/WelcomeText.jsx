import React, { useState, useEffect } from 'react'
import { Box, Container } from '@chakra-ui/react'
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

  function createMarkup() {
    return { __html: `${ong.welcomeText}` };
  }

  return (
    <div>
      <Container maxW="container.lg" justifyContent="center" p={{ base: 2, md: 8 }} mt={8}>
        <Box
          fontSize={{ base: 'lg', md: '2xl' }}
          textAlign="left"
          fontWeight={300}
          maxW="3xl"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </Container>
    </div>
  )
}

export default WelcomeText
