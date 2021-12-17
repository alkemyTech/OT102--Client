import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  HStack,
  Avatar,
  Center,
  Box,
  Input,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { delUser } from '../services/usersService'
import Alert from '../components/alert/Alert'
import useUser from '../hooks/useUser'

export default function UserProfile() {
  const { userData: data } = useUser()
  const [alertProps, setAlertprops] = React.useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/backoffice/me')
  }
  const handleDelete = async (e) => {
    e.preventDefault()
    setAlertprops({
      show: true,
      title: '¿Estás seguro?',
      message: '¿Estás seguro que quieres eliminar tu cuenta?, esta acción no se puede deshacer',
      icon: 'warning',
      onConfirm: () => {
        delUser(data.id)
          .then(() => {
            navigate('/')
          })
          .catch(() => {
            setAlertprops({
              show: true,
              title: 'Error',
              message: 'No se pudo eliminar tu cuenta',
              icon: 'error',
              onConfirm: () => {
                setAlertprops({
                  show: false,
                  title: '',
                  message: '',
                  icon: '',
                  onConfirm: () => {},
                })
              },
            })
          })
      },
    })
  }

  return (
    <>
      <Alert {...alertProps} />
      <Flex minH="100%" align="center" justify="center" bg="grey.100">
        <Stack spacing={4} w="full" maxW="md" bg="white" rounded="xl" boxShadow="lg" p={6} my={4}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Mi Perfil
          </Heading>

          <FormControl id="userName">
            <Stack direction="column">
              <Center>
                <Avatar size="xl" src={data ? data.image : ''} />
              </Center>
            </Stack>
          </FormControl>
          <HStack>
            <Box>
              <FormLabel>Nombre</FormLabel>
              <Input
                name="name"
                placeholder="Nombre"
                value={data ? data.firstName : ''}
                disabled
                _disabled={{ opacity: 1 }}
              />
            </Box>
            <Box>
              <FormLabel>Apellido</FormLabel>
              <Input
                name="lastName"
                placeholder="Apellido"
                value={data ? data.lastName : ''}
                disabled
                _disabled={{ opacity: 1 }}
              />
            </Box>
          </HStack>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              placeholder="Email"
              value={data ? data.email : ''}
              disabled
              _disabled={{ opacity: 1 }}
            />
          </Box>

          <HStack>
            <Button
              onClick={handleSubmit}
              bg="blue.400"
              color="white"
              w="full"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Editar
            </Button>

            <Button
              onClick={handleDelete}
              bg="red.400"
              color="white"
              w="full"
              _hover={{
                bg: 'red.500',
              }}
            >
              Eliminar
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </>
  )
}
