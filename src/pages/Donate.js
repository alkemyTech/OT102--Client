import React from 'react'
import { Text, Container } from '@chakra-ui/react'
import Banner from '../components/Banner'
import PageHeader from '../components/PageHeader'

export default function Activities() {
  return (
    <>
      <Banner img="/images/banner-top6.jpg" display={{ base: 'none', md: 'flex' }} />
      <PageHeader title="DONA A SOMOS MAS" display={{ base: 'none', md: 'flex' }} />
      <Container maxW="container.lg" mt="5">
        {/* eslint-disable-next-line */}
        <Text>En Fundación Somos Mas realizamos campañas de solidaridad personalizada, para llevar infancia, dignidad y autoestima a los niñas y niñas más olvidados de nuestra sociedad.</Text>
        <Text fontWeight="500" paddingTop="25px" fontSize="25px"> ES MUY FÁCIL</Text>
        <Text fontWeight="500">ELEGÍ TU FORMA DE COLABORAR</Text>
        <Text>Podés donar por única vez o mensualmente por medio de MERCADOPAGO.</Text>
        <Text>Te pedimos algunos datos para registrar tu donación.</Text>
        <Text>Podés hacer una transferencia bancaria o pagar con tarjeta de crédito.</Text>

        <Text fontWeight="500" paddingTop="25px" fontSize="25px">¡Colaborá con nosotros!</Text>

      </Container>
    </>
  )
}
