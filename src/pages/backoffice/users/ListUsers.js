import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
} from '@chakra-ui/react'
import { getAllUsers, delUser } from '../../../services/usersService'
import Alert from '../../../components/alert/Alert'
import DeleteUserButton from './DeleteUserButton'
import Spinner from '../../../components/Spinner'

const ListUsers = () => {
  const [users, setUsers] = useState([])
  const [alertProps, setAlertProps] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    cancelbtn: true,
    onConfirm: () => {},
    onCancel: () => {},
  })

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getAllUsers()
        setUsers(response.data.body)
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
    getUsers()
  }, [])

  const confirmedDelete = async (userId) => {
    try {
      const deleteUser = await delUser(userId)
      if (deleteUser) {
        setUsers((prevUsers) => {
          const updateUsers = prevUsers.filter(
            (user) => user.id !== userId,
          )
          return updateUsers
        })
        setAlertProps({
          show: true,
          title: 'Usuario Eliminado',
          message: 'Usuario eliminado exitosamente!',
          icon: 'success',
          cancelbtn: false,
          onConfirm: () => {},
        })
      }
    } catch (error) {
      setAlertProps({
        show: true,
        title: 'Oops! algo ha salido mal',
        message: error.message,
        icon: 'error',
        cancelbtn: true,
        onConfirm: () => {},
        onCancel: () => {},
      })
    }
  }
  const deleteUserHandler = async (userId) => {
    setAlertProps({
      show: true,
      title: '¿Estás seguro?',
      message: 'Estas a punto de eliminar una actividad, esto es irreversible',
      icon: 'warning',
      cancelbtn: true,
      onConfirm: () => confirmedDelete(userId),
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
        Usuarios
      </Text>
      <Alert {...alertProps} />
      {users.length > 0 ? (
        <Table size="sm" textAlign="center">
          <Thead bg="brand.cyan">
            <Tr>
              <Th textAlign="center">nombre / apellido</Th>
              <Th textAlign="center">email</Th>
              <Th textAlign="center">editar</Th>
              <Th textAlign="center">eliminar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.userId} _hover={{ bg: 'brand.gray1' }}>
                <Td
                  textAlign="center"
                >
                  {`${user.firstName} / ${user.lastName}`}
                </Td>
                <Td textAlign="center">
                  {user.email}
                </Td>
                <Td
                  textAlign="center"
                >
                  <Link to={`${user.userId}`}><Button bg="brand.cyan">Editar</Button></Link>
                </Td>
                <Td
                  textAlign="center"
                >
                  <DeleteUserButton
                    id={user.userId}
                    onDelete={deleteUserHandler}
                  />
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

export default ListUsers
