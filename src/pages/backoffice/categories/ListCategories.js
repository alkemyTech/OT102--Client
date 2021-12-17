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
import Spinner from '../../../components/Spinner'
import Alert from '../../../components/alert/Alert'
import { getAllCategories } from '../../../services/categoriesService'

const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [alertProps, setAlertProps] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await getAllCategories()
        setCategories(response.data.body)
      } catch (error) {
        const errorAlertProps = {
          show: true,
          title: 'Ooops, algo ha fallado!',
          message: error.message,
          icon: 'error',
          onConfirm: () => {},
        }
        setAlertProps(errorAlertProps)
      }
    }
    getCategories()
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
        Categorias
      </Text>
      <Alert {...alertProps} />
      {categories.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center">nombre</Th>
              <Th textAlign="center">Descripcion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center">{item.name}</Td>
                <Td textAlign="center">{item.description}</Td>
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

export default ListCategories
