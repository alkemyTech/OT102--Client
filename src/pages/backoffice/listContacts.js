import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react'
import { getContacts } from '../../features/contacts/contactsSlice'
import Spinner from '../../components/Spinner'

const ListContacts = () => {
  const contacts = useSelector((state) => state.contacts.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Box
      mt="30px"
      d="flex"
      justifyContent="center"
      alignItems="center"
      p="5px"
      fontFamily="Atma"
      flexDirection="column"
      textAlign="center"
    >
      <Text fontSize="2xl" mb="10px">Contacts</Text>
      {contacts.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center" fontFamily="Atma">
                name
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                phone
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                email
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                message
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center" fontSize="sm">
                  {item.name}
                </Td>
                <Td textAlign="center" fontSize="sm">
                  {item.phone}
                </Td>
                <Td textAlign="center" fontSize="sm">
                  {item.email}
                </Td>
                <Td textAlign="center" fontSize="sm">
                  {item.message}
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot bg="brand.cyan">
            <Tr>
              <Th textAlign="center" fontFamily="Atma">
                name
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                phone
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                email
              </Th>
              <Th textAlign="center" fontFamily="Atma">
                message
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      ) : (
        <Spinner />
      )}
    </Box>
  )
}

export default ListContacts
