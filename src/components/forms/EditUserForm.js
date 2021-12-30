import React from 'react'
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
import { useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Spinner from '../Spinner'
import Alert from '../alert/Alert'
import FormikControl from '../../pages/contact/FormikControl'

export default function EditUserForm({ user, onSubmit }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [alertProps, setAlertProps] = React.useState({})
  const navigate = useNavigate()
  const initialValues = {
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    image: user ? user.image : '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address'),
    image: Yup.string().required('Image is required'),
  })
  const handleSubmit = (values, onSubmitProps) => {
    const askAlertProps = {
      show: true,
      title: '¿Estás seguro?',
      message: '¿Estás seguro que quieres editar este usuario?',
      icon: 'warning',
      onConfirm: async () => {
        try {
          setIsLoading(true)
          onSubmit(values)
          const successAlertProps = {
            show: true,
            title: 'Usuario actualizado',
            message: 'El usuario ha sido actualizado correctamente',
            icon: 'success',
            onConfirm: () => {},
          }
          setAlertProps(successAlertProps)
          setIsLoading(false)
          onSubmitProps.resetForm()
        } catch (error) {
          const errorAlertProps = {
            show: true,
            title: 'Ooops, algo ha fallado!',
            message: error.message,
            icon: 'error',
            onConfirm: () => {
              navigate('/')
            },
          }
          setAlertProps(errorAlertProps)
        }
      },
    }
    setAlertProps(askAlertProps)
  }
  const handleCancel = () => {
    const askAlertProps = {
      show: true,
      title: '¿Estás seguro?',
      message: '¿Estás seguro que quieres cancelar?',
      icon: 'warning',
      onConfirm: () => {
        navigate('/')
      },
    }
    setAlertProps(askAlertProps)
  }

  if (isLoading) return <Spinner />
  return (
    <>
      <Alert {...alertProps} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Flex minH="100%" align="center" justify="center" bg="grey.100">
            <Stack
              spacing={4}
              w="full"
              maxW="md"
              bg="white"
              rounded="xl"
              boxShadow="lg"
              p={6}
              my={4}
            >
              <Heading as="h1" size="lg" textAlign="center">
                Editar Usuario
              </Heading>
              <FormControl id="image">
                <Stack direction={['column', 'row']}>
                  <FormLabel>Imagen</FormLabel>
                  <Center>
                    <Avatar name={initialValues.firstName} src={initialValues.image} size="xl">
                      <AvatarBadge
                        as={IconButton}
                        size="sm"
                        rounded="full"
                        top="-10px"
                        colorScheme="red"
                        aria-label="remove Image"
                        icon={<SmallCloseIcon />}
                      />
                    </Avatar>
                  </Center>
                  {/* <Center w="full">
                    <Box>
                      <FormControl id="image">
                        <FormLabel>{newsData.inputText}</FormLabel>

                        <input
                          type="file"
                          name="image"
                          id="image"
                          onChange={(event) => {
                            setFieldValue('image', event.currentTarget.files[0])
                          }}
                          value={values.file}
                          required={!id}
                        />
                        <small>{errors.image && touched.image && errors.image}</small>
                      </FormControl>
                    </Box>

                  </Center> */}
                </Stack>
              </FormControl>
              <HStack>
                <Box>
                  <FormikControl
                    control="chakraInput"
                    type="text"
                    name="firstName"
                    label="Nombre"
                    _disabled={{ opacity: 1 }}
                  />
                </Box>
                <Box>
                  <FormikControl
                    control="chakraInput"
                    type="text"
                    name="lastName"
                    label="Apellido"
                    _disabled={{ opacity: 1 }}
                  />
                </Box>
              </HStack>
              <FormikControl
                control="chakraInput"
                type="email"
                name="email"
                label="Email"
                _disabled={{ opacity: 1 }}
              />
              <HStack>
                <Button
                  type="submit"
                  bg="blue.400"
                  color="white"
                  w="full"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Guardar
                </Button>
                <Button
                  type="reset"
                  bg="red.400"
                  color="white"
                  w="full"
                  _hover={{
                    bg: 'red.500',
                  }}
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </HStack>
            </Stack>
          </Flex>
        </Form>
      </Formik>
    </>
  )
}

EditUserForm.propTypes = {
  user: PropTypes.isRequired,
  onSubmit: PropTypes.isRequired,
}
