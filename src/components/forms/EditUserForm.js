import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Input,
  Box,
  Select,
  Image,
} from '@chakra-ui/react'
import Alert from '../alert/Alert'
import { getUserData } from '../../services/authService'
import { getUserById, getAllRoles, updateuser } from '../../services/usersService'
import { EditUserSchema } from './ValidationSchemas'
import imgUploadService from '../../services/imgUploadService'
import useUser from '../../hooks/useUser'

const EditUserForm = () => {
  const { userData: editor } = useUser()
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [roles, setRoles] = useState([])
  const [alertProps, setAlertProps] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })
  const initialValues = {
    userId: !id ? user.userId : user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    image: user.image,
    role: user.role,
    roleId: user.roleId,
  }
  const updateId = !id ? user.userId : user.id

  const loadData = async () => {
    if (!id) {
      try {
        const loadedData = await getUserData()
        setUser({
          userId: loadedData.data.body.userId,
          firstName: loadedData.data.body.firstName,
          lastName: loadedData.data.body.lastName,
          oldImage: loadedData.data.body.image,
          role: loadedData.data.body.userRole,
          roleId: loadedData.data.body.roleId,
          image: '',
        })
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
    } else {
      try {
        const loadedData = await getUserById(id)
        setUser({
          id: loadedData.data.body.userId,
          firstName: loadedData.data.body.firstName,
          lastName: loadedData.data.body.lastName,
          oldImage: loadedData.data.body.image,
          role: loadedData.data.body.userRole,
          roleId: loadedData.data.body.roleId,
          image: '',
        })
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
  }

  const loadRoles = async () => {
    try {
      const loadedRoles = await getAllRoles()
      setRoles(loadedRoles.data.body)
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

  useEffect(() => {
    loadData()
    loadRoles()
    // eslint-disable-next-line
  }, [])

  const handleUpdateSubmit = async (values) => {
    try {
      const updatedUser = await updateuser(updateId, {
        firstName: values.firstName,
        lastName: values.lastName,
        roleId: values.roleId ? values.roleId : user.roleId,
        image: values.image ? await imgUploadService(values.image) : user.oldImage,
      })
      if (updatedUser) {
        const successAlertProps = {
          show: true,
          title: 'Usuario actualizado!',
          message: 'Usuario actualizado exitosamente!',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertProps(successAlertProps)
        navigate('/backoffice')
      }
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

  return (
    <>
      <Alert {...alertProps} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={EditUserSchema}
        onSubmit={handleUpdateSubmit}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center" bg="gray.100">
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <Heading as="h1" size="lg" textAlign="center">
                      Editar Usuario
                    </Heading>
                    <Box>
                      <FormControl id="firstName">
                        <FormLabel>Nombre</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                        <small>{errors.firstName && touched.firstName && errors.firstName}</small>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Apellido</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                        <small>{errors.lastName && touched.lastName && errors.lastName}</small>
                      </FormControl>
                    </Box>
                    {id === 'me' && (
                    <Box>
                      <FormControl id="role">
                        <FormLabel>Rol actual</FormLabel>
                        <p>{user.role}</p>
                      </FormControl>
                    </Box>
                    )}
                    {id !== 'me' && editor.userRole === 'Admin' && (
                    <Box>
                      <FormControl id="roleId">
                        <FormLabel>Modificar rol</FormLabel>
                        <Select
                          placeholder="Seleccionar opción"
                          name="roleId"
                          id="roleId"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.roleId}
                        >
                          {roles.map((result) => (
                            <option key={result.id} value={result.id}>{result.name}</option>
                          ))}
                        </Select>
                        <small>{errors.roleId && touched.roleId && errors.roleId}</small>
                      </FormControl>
                    </Box>
                    )}
                    {id && (
                    <Box>
                      <FormLabel>Imagen actual</FormLabel>
                      <Image alt={user.firstName} objectFit="cover" src={user.oldImage} />
                    </Box>
                    )}
                    <Box>
                      <FormControl>
                        <FormLabel>Actualizar imagen</FormLabel>
                        <input
                          type="file"
                          onChange={(event) => {
                            setFieldValue('image', event.currentTarget.files[0])
                          }}
                          value={values.file}
                        />
                        <small>{errors.image && touched.image && errors.image}</small>
                      </FormControl>
                    </Box>
                    <Stack spacing={10} pt={2}>
                      <Button
                        type="submit"
                        loadingText="Submitting"
                        size="lg"
                        bg="blue.400"
                        color="white"
                        _hover={{
                          bg: 'blue.500',
                        }}
                      >
                        Modificar
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </form>
        )}
      </Formik>
    </>
  )
}
export default EditUserForm
