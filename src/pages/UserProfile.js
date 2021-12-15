import React from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import FormikControl from './contact/FormikControl'
import Spinner from '../components/Spinner'
import { updateuser, delUser } from '../services/usersService'
import Alert from '../components/alert/Alert'
import useUser from '../hooks/useUser'

export default function UserProfile() {
  const params = useParams()
  const [loading, setLoading] = React.useState(false)
  const [edit, setEdit] = React.useState(false)
  const { userData: data } = useUser()
  const [alertProps, setAlertprops] = React.useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const validationSchema = Yup.object({
    firstName: Yup.string().required('⚠ Este dato es obligatorio').max(255, '⚠ Demasiado largo!'),
    lastName: Yup.string().required('⚠ Este dato es obligatorio').max(255, '⚠ Demasiado largo!'),
    email: Yup.string().email('❌ El email no es válido').required('⚠ Este dato es obligatorio'),
    image: Yup.string().required('⚠ Este dato es obligatorio'),
  })
  const initialValues = {
    id: data ? data.id : params.id,
    firstName: data ? data.firstName : '',
    lastName: data ? data.lastName : '',
    email: data ? data.email : '',
    image: data ? data.image : '',
  }
  const closeAlert = () => {
    setAlertprops({
      show: false,
      title: '',
      message: '',
      icon: '',
      onConfirm: () => {},
    })
  }
  const handleSubmit = async (values) => {
    setLoading(true)

    if (edit) {
      const { id, ...user } = values
      try {
        await updateuser(id, user)
        setAlertprops({
          show: true,
          title: '¡Éxito!',
          message: 'El usuario se ha actualizado correctamente',
          icon: 'check-circle',
          onConfirm: closeAlert,
        })
      } catch (error) {
        setAlertprops({
          show: true,
          title: '¡Error!',
          message: 'Ha ocurrido un error al actualizar el usuario',
          icon: 'warning',
          onConfirm: closeAlert,
        })
      }
    } else {
      setEdit(true)
    }
    setLoading(false)
  }
  const handleCancel = async () => {
    if (edit) {
      setEdit(false)
    } else {
      // :todo handle delet
      setAlertprops({
        show: true,
        title: '¿Seguro que quieres eliminar tu cuenta?',
        message: 'Esta acción no se puede deshacer',
        icon: 'warning',
        cancelbtn: true,
        onConfirm: async () => {
          try {
            await delUser(data.id)
            setAlertprops({
              show: true,
              title: '¡Éxito!',
              message: 'El usuario se ha eliminado correctamente',
              icon: 'check-circle',
              onConfirm: closeAlert,
            })
          } catch (error) {
            setAlertprops({
              show: true,
              title: '¡Error!',
              message: 'Ha ocurrido un error al eliminar el usuario',
              icon: 'warning',
              onConfirm: closeAlert,
            })
          }
          // console.log('delete')
        },
        onCancel: closeAlert,
      })
    }
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Alert {...alertProps} />
      <Flex minH="100%" align="center" justify="center" bg="grey.100">
        <Stack spacing={4} w="full" maxW="md" bg="white" rounded="xl" boxShadow="lg" p={6} my={4}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            {edit ? 'Editar Perfil' : 'Mi Perfil'}
          </Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form onSubmit={handleSubmit}>
              <FormControl id="userName">
                <FormLabel>User Icon</FormLabel>
                <Stack direction={edit ? ['column', 'row'] : 'column'}>
                  <Center>
                    <Avatar size="xl" src={data ? data.image : ''}>
                      {/* todo:  */}
                      {edit ? (
                        <AvatarBadge
                          as={IconButton}
                          size="sm"
                          rounded="full"
                          top="-10px"
                          colorScheme="red"
                          aria-label="remove Image"
                          icon={<SmallCloseIcon />}
                        />
                      ) : null}
                    </Avatar>
                  </Center>
                  {edit ? (
                    <Center w="full">
                      <Button w="full">Cambiar imagen</Button>
                    </Center>
                  ) : null}
                </Stack>
              </FormControl>
              <HStack>
                <Box my={4}>
                  <FormikControl
                    control="chakraInput"
                    type="text"
                    name="firstName"
                    label="Nombre"
                    _disabled={{ opacity: 1 }}
                    disabled={!edit}
                  />
                </Box>
                <Box>
                  <FormikControl
                    control="chakraInput"
                    type="text"
                    name="lastName"
                    label="Apellido"
                    _disabled={{ opacity: 1 }}
                    disabled={!edit}
                  />
                </Box>
              </HStack>
              <FormikControl
                control="chakraInput"
                type="email"
                name="email"
                label="Email"
                _disabled={{ opacity: 1 }}
                disabled={!edit}
              />

              <Button
                type="submit"
                bg="blue.400"
                color="white"
                w="full"
                _hover={{
                  bg: 'blue.500',
                }}
                mt={4}
              >
                {edit ? 'Guardar' : 'Editar'}
              </Button>
            </Form>
          </Formik>
          <Button
            bg="red.400"
            color="white"
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={handleCancel}
          >
            {edit ? 'Cancelar' : 'Eliminar'}
          </Button>
        </Stack>
      </Flex>
    </>
  )
}
