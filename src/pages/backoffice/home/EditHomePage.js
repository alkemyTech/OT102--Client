import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Image,
  Text,
  Table,
  Tr,
  Td,
  Tbody,
  Thead,
} from '@chakra-ui/react'

import { getOrganizationById } from '../../../services/organizationsService'
import { getAllslides } from '../../../services/slidesService'

import AlertFunction from '../../../components/alert/AlertFunction'
import Spinner from '../../../components/Spinner'
import extractErrorMsg from '../../../utils/extractErrorMsg'

export default function EditHomePage() {
  const orgId = '1'
  const navigate = useNavigate()
  const [isLoading, setIsloading] = useState(false)
  const [welcomeText, setWelcomeText] = useState('Bienvenido')
  const [slides, setSlides] = useState([])

  const alertProps = {
    show: false,
    title: 'Ooops, algo ha fallado!',
    message: '',
    icon: 'error',
    onConfirm: () => {},
  }

  useEffect(() => {
    setIsloading(true)
    Promise.all([getAllslides(), getOrganizationById(orgId)])
      .then(([slideData, orgData]) => {
        setIsloading(false)
        const allSlides = slideData.data.body
        const org = orgData.data.body
        setWelcomeText(org.welcomeText)
        setSlides(allSlides)
      })
      .catch((error) => {
        setIsloading(false)
        AlertFunction({
          ...alertProps,
          show: true,
          message: extractErrorMsg(error),
        })
      })
    // eslint-disable-next-line
  }, [])

  function createMarkup() {
    return { __html: `${welcomeText}` };
  }

  return (
    <Box
      mt="30px"
      d="flex"
      justifyContent="center"
      alignItems="center"
      p="5px"
      flexDirection="column"
      textAlign="center"
    >
      <Text fontSize="2xl" mb="30px">
        Edit Home
      </Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Td textAlign="center">Campo</Td>
              <Td textAlign="center">Texto</Td>
              <Td textAlign="center">Imagen</Td>
              <Td textAlign="center">Editar</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Welcome Text</Td>
              <Td><Box dangerouslySetInnerHTML={createMarkup()} /></Td>
              <Td />
              <Td>
                <Button onClick={() => navigate(orgId)}>edit</Button>
              </Td>
            </Tr>

            {slides
            && slides.map((slide) => (
              <Tr
                key={slide.id}
                justifyContent="space-between"
                flexDir={{ base: 'column', md: 'row' }}
              >
                <Td>{`Slide ${slide.id}`}</Td>
                <Td flexGrow="1">{slide.text}</Td>
                <Td>
                  <Image maxW="300px" src={slide.imageUrl} />
                </Td>
                <Td>
                  <Button onClick={() => navigate(`slide/${slide.id}`)}>
                    edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  )
}
