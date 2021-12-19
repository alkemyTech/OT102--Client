import React, { useEffect, useState } from 'react'
import {
  Box, Table, Thead, Tbody, Tr, Th, Td, Text, Button,
} from '@chakra-ui/react'
import Spinner from '../../../components/Spinner'
import Alert from '../../../components/alert/Alert'
import { getAllCategories, delCategory } from '../../../services/categoriesService'

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

  const confirmDelete = async (id) => {
    try {
      const deletedCategory = await delCategory(id)
      if (deletedCategory) {
        setCategories((prevCategories) => {
          const updatedCategories = prevCategories.filter(
            (category) => category.id !== id,
          )
          return updatedCategories
        })
        setAlertProps({
          show: true,
          title: 'Actividad Eliminada!',
          message: 'Actividad eliminada exitosamente!',
          icon: 'success',
          cancelbtn: false,
          onConfirm: () => {},
        })
      }
    } catch (error) {
      setAlertProps({
        show: true,
        title: 'Oops! Algo ha salido mal!',
        message: error.message,
        icon: 'error',
        cancelbtn: true,
        onConfirm: () => {},
        onCancel: () => {},
      })
    }
  }

  const handleDelete = (id) => {
    setAlertProps({
      show: true,
      title: 'Estas Seguro?',
      message: 'Estas a punto de eliminar una actividad, esto es irreversible.',
      icon: 'warning',
      cancelbtn: true,
      onConfirm: () => confirmDelete(id),
      onCancel: () => {},
    })
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
        Categorias
      </Text>
      <Alert {...alertProps} />
      {categories.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center">nombre</Th>
              <Th textAlign="center">Descripcion</Th>
              <Th textAlign="center">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center">{item.name}</Td>
                <Td textAlign="center">{item.description}</Td>
                <Td textAlign="center">
                  <Button
                    fontWeight={600}
                    bg="brand.rouge"
                    onClick={() => handleDelete(item.id)}
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

export default ListCategories
