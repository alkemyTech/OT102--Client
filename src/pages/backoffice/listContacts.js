import React, { useEffect, useState } from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react'
import Spinner from '../../components/Spinner'
import { getAllContacts } from '../../services/contactsService'

const ListContacts = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await getAllContacts()
        setContacts(response.data.body)
      } catch (error) {
        // agregar  alert mas adelante
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
    getContacts()
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
      <Text fontSize="2xl" mb="30px">Contactos</Text>
      {contacts.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center">
                nombre
              </Th>
              <Th textAlign="center">
                telefono
              </Th>
              <Th textAlign="center">
                email
              </Th>
              <Th textAlign="center">
                mensaje
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center">
                  {item.name}
                </Td>
                <Td textAlign="center">
                  {item.phone}
                </Td>
                <Td textAlign="center">
                  {item.email}
                </Td>
                <Td textAlign="center">
                  {item.message}
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

export default ListContacts
