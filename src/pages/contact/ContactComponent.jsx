import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  InputGroup,
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'

import FormikControl from './FormikControl'

const ContactComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('⚠ Este dato es obligatorio'),
    email: Yup.string()
      .email('❌Formato del email invalido')
      .required('⚠ Este dato es obligatorio'),
    message: Yup.string().required('⚠ Mensaje es obligatorio'),
  })

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const handleSubmit = (values) => {
    const contactData = {
      name: values.name,
      email: values.email,
      message: values.message,
    }
  }

  return (
    <Container bg="#efefef" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#8DCAFF"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap>
              <WrapItem>
                <Box>
                  <Heading>Contáctanos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500" w="80%">
                    Completa el formulario y nuestro equipo se pondrá en
                    contacto a la brevedad!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 20 }}>
                    <VStack pl={10} spacing={4} alignItems="flex-start">
                      <Button
                        size="lg"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #f8fc74' }}
                        leftIcon={<MdPhone color="#EC4C4C" size="20px" />}
                      >
                        +54-91155555
                      </Button>
                      <Button
                        size="lg"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#f8fc74" size="20px" />}
                      >
                        contacto@somosmas.com
                      </Button>
                      <Button
                        size="lg"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #EC4C4C' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Buenos Aires, Argentina
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Box
                      bg="white"
                      borderRadius="lg"
                      p={{ sm: 16, md: 20, lg: 30 }}
                    >
                      <Box m={8} color="#0B0E3F">
                        <VStack m={10} spacing={5}>
                          <InputGroup borderColor="#E0E1E7">
                            <FormikControl
                              control="chakraInput"
                              type="text"
                              label="Nombre"
                              name="name"
                              id="name"
                            />
                          </InputGroup>

                          <FormikControl
                            control="chakraInput"
                            type="email"
                            label="Email"
                            name="email"
                            id="email"
                          />

                          <FormikControl
                            control="chakraTextarea"
                            type="text"
                            label="Mensaje"
                            name="message"
                            id="message"
                            placeholder="Escribe tu mensaje"
                          />

                          <Button
                            type="submit"
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            w="100%"
                          >
                            Enviar Mensaje
                          </Button>
                        </VStack>
                      </Box>
                    </Box>
                  </Form>
                </Formik>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactComponent
