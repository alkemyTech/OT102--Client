import React, { useEffect, useState } from 'react'
import {
  Box, Table, Thead, Tbody, Tr, Th, Td, Text, Image, Button,
} from '@chakra-ui/react'
import Spinner from '../../components/Spinner'
import { newsData } from './dummyData'

const ListNews = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    new Promise((response) => {
      setTimeout(() => {
        response(newsData)
      }, 5)
    }).then((response) => {
      setNews(response)
    })
  }, [])

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
        Contactos
      </Text>
      {news.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center">Nombre</Th>
              <Th textAlign="center">Imagen</Th>
              <Th textAlign="center">Fecha de creación</Th>
            </Tr>
          </Thead>
          <Tbody>
            {news.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center">{item.name}</Td>
                <Td>
                  {' '}
                  <Image boxSize="150px" objectFit="cover" src={item.image} alt="Dan Abramov" />
                </Td>
                <Td textAlign="center">{item.createdAt}</Td>
                <Td textAlign="center">
                  {' '}
                  <Button
                    fontWeight={600}
                    bg="brand.yellow"
                    // onClick={() => }
                    _hover={{
                      bg: 'brand.gray1',
                    }}
                  >
                    Editar
                  </Button>
                </Td>
                <Td textAlign="center">
                  {' '}
                  <Button
                    fontWeight={600}
                    bg="brand.rouge"
                    // onClick={() => }
                    _hover={{
                      bg: 'brand.gray1',
                    }}
                  >
                    Eliminar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Spinner />
      )}
    </Box>
  )
}

export default ListNews
