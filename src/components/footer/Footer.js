import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Link,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import SocialButton from './SocialButton'
import { getOrganizationById } from '../../services/organizationsService'

export default function SmallWithLogoLeft() {
  const [ong, setOng] = useState()

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
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image
          h="45px"
          src="../../images/logo-somos-mas.png"
          objectFit="cover"
        />
        <Stack direction="row" spacing={6} flexWrap="wrap">
          <Link href="nosotros">Nosotros</Link>
          <Link href="actividades">Actividades</Link>
          <Link href="novedades">Novedades</Link>
          <Link href="testimonios">Testimonios</Link>
          <Link href="contacto">Contacto</Link>
        </Stack>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Facebook" href={ong ? ong.facebook : '#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label="Linkedin" href={ong ? ong.linkedin : '#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label="Instagram" href={ong ? ong.instagram : '#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
