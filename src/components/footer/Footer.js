import React, { useState, useEffect } from 'react'
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom'
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
  const navigate = useNavigate()
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
          onClick={() => navigate('/')}
        />
        <Stack direction="row" spacing={6} flexWrap="wrap">
          <Link as={ReactRouterLink} to="/nosotros">Nosotros</Link>
          <Link as={ReactRouterLink} to="/actividades">Actividades</Link>
          <Link as={ReactRouterLink} to="/novedades">Novedades</Link>
          <Link as={ReactRouterLink} to="/testimonios">Testimonios</Link>
          <Link as={ReactRouterLink} to="/contacto">Contacto</Link>
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
