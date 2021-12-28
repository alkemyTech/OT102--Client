import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
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
  // Checkbox,
  Stack,
  InputRightElement,
  Button,
  Text,
} from '@chakra-ui/react'

import useUser from '../../hooks/useUser'
import extractErrorMsg from '../../utils/extractErrorMsg'
import AlertFunction from '../../components/alert/AlertFunction'

const passwordChars = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato del email inválido')
    .max(255, 'Demasiado largo!')
    .required('Email Obligatorio'),
  password: Yup.string()
    .required('Password Obligatorio')
    .min(8, 'Credenciales Invalidas')
    .max(255, 'Demasiado largo!')
    .matches(
      passwordChars,
      'Credenciales Invalidas',
    ),
})
// INPUT PASSWORD
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
// hasta INPUT PASSWORD
const LoginForm = () => {
  // ver
  const navigate = useNavigate()
  const { loginUser } = useUser()

  const onSubmit = (values, { setSubmitting }) => {
    loginUser(values)
      .then(() => {
        setSubmitting(false)
        navigate('/', { replace: true })
      })
      .catch((error) => {
        AlertFunction({
          title: 'Error de ingreso',
          message: extractErrorMsg(error),
          icon: 'error',
        })
      })
  }
  // hasta aca ver
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
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
                  <Text textStyle="title"> Acceso Login</Text>
                </Stack>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <Text color="brand.rouge">
                        {errors.email && touched.email && errors.email}
                      </Text>
                    </FormControl>

                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputPassword
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <Text color="brand.rouge">
                        {errors.password && touched.password && errors.password}
                      </Text>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align="start"
                        justify="space-between"
                      >
                        {/* <Checkbox>Recordarme</Checkbox> */}
                        {/* <Link color="blue.400">Forgot password?</Link> */}
                      </Stack>
                      <Button
                        type="submit"
                        bg="brand.cyan"
                        color="black"
                        fontFamily="atma"
                        size="lg"
                        _hover={{
                          bg: 'brand.blue',
                        }}
                      >
                        Iniciar Sesión
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

export default LoginForm
