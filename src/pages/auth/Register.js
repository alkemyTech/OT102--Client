import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'

import useUser from '../../hooks/useUser'
import extractErrorMsg from '../../utils/extractErrorMsg'
import AlertFunction from '../../components/alert/AlertFunction'

const passwordChars = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('Nombre es Obligatorio'),
  lastName: Yup.string().required('Apellido es Obligatorio'),
  email: Yup.string().email('Formato del email inválido').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Contraseña debe tener al menos 6 caracteres')
    .max(255, 'Demasiado largo!')
    .matches(
      passwordChars,
      'The password must have one uppercase, one lowercasse, one number and one special caracter',
    ),
})

const InputPassword = ({ onChange, onBlur, password }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputGroup>
      <Input
        type={showPassword ? 'text' : 'password'}
        name="password"
        onChange={onChange}
        onBlur={onBlur}
        value={password}
      />
      <InputRightElement h="full">
        <Button variant="ghost" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

InputPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
}

const Register = () => {
  const navigate = useNavigate()
  const { newUser } = useUser()

  const onSubmit = (values, { setSubmitting }) => {
    newUser(values)
      .then(() => {
        setSubmitting(false)
        navigate('/', { replace: true })
      })
      .catch((error) => {
        AlertFunction({
          title: 'Error de registro',
          message: extractErrorMsg(error),
          icon: 'error',
          onConfirm: () => AlertFunction({ title: 'Bienvenido' }),
        })
      })
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center" bg="gray.100">
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                  <Heading fontSize="4xl" textAlign="center">
                    Registrate!
                  </Heading>
                </Stack>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <HStack>
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
                          <small>
                            {errors.firstName
                            && touched.firstName
                            && errors.firstName}
                          </small>
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
                          <small>
                            {errors.lastName
                            && touched.lastName
                            && errors.lastName}
                          </small>
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <small>
                        {errors.email && touched.email && errors.email}
                      </small>
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      {/* extract input password because showpassword re-renders all form */}
                      <InputPassword
                        onBlur={handleBlur}
                        onChange={handleChange}
                        password={values.password}
                      />
                      <small>
                        {errors.password && touched.password && errors.password}
                      </small>
                    </FormControl>
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
                        Registrarme
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align="center">
                        Ya estas registrado?
                        {' '}
                        <Link to="/login">LOGIN</Link>
                      </Text>
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

export default Register
