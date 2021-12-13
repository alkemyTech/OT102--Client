import React from 'react'
// import { useParams } from 'react-router-dom'
import {
  Container,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';

const NewsDetail = () =>
// const { id } = useParams()
  (
    <>
      <Container maxW="container.lg" mt="5">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Image
            w="full"
            h="250px"
            src="https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/press_release_feature/public/DeclaracioHenrietta.jpg?itok=j4DT4DR_"
            objectFit="cover"
            objectPosition="center -100px"
          />

          <Text textStyle="title">Titulo de la Novedad</Text>
          <Text as="p" fontSize="lg">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos deesde el año
          </Text>
        </VStack>
      </Container>
    </>
  )

export default NewsDetail;
