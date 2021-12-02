import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react'

const LoginForm = () => {
  const formValues = []
  console.log(formValues)
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255, 'Too long').required('Required'),
    password: Yup.string()
      .min(6, 'Password must have at least 6 caracters')
      .max(255, 'Too long')
      .required('Required'),
  })

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          formValues.push({
            email: values.email,
            password: values.password,
          })
          setSubmitting(false)
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex
              minH="100vh"
              align="center"
              justify="center"
            >
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                  <Heading fontSize="4xl">Sign in to your account</Heading>
                </Stack>
                <Box rounded="lg" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p>{errors.email && touched.email && errors.email}</p>
                    </FormControl>

                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <p>{errors.password && touched.password && errors.password}</p>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align="start"
                        justify="space-between"
                      >
                        <Checkbox>Remember me</Checkbox>
                        {/* <Link color="blue.400">Forgot password?</Link> */}
                      </Stack>
                      <Button
                        type="submit"
                        bg="blue.400"
                        color="white"
                        _hover={{
                          bg: 'blue.500',
                        }}
                      >
                        Sign in
                      </Button>
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

export default LoginForm
