import React, { useState } from 'react'
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const formValues = []

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('Nombre es Obligatorio'),
    lastName: Yup.string().required('Apellido es Obligatorio'),
    email: Yup.string()
      .email('Formato del email inválido')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Contraseña debe tener al menos 6 caracteres')
      .max(255, 'Demasiado largo!'),
  })

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          formValues.push({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          })

          setSubmitting(false)
        }}
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
            <Flex minH="100vh" align="center" justify="center" bg="gray.100">
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
                      <InputGroup>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <InputRightElement h="full">
                          <Button
                            variant="ghost"
                            onClick={() =>
                              // eslint-disable-next-line no-shadow
                              setShowPassword((showPassword) => !showPassword)}
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
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
                      <Text align="center">Ya estas registrado? LOGIN</Text>
                      {/* TODO LINK TO LOGIN */}
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Register
