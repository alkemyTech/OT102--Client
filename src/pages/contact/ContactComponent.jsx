import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  InputGroup,
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'
import { addContact } from '../../services/contactsService'
import FormikControl from './FormikControl'
import Alert from '../../components/alert/Alert'
import Banner from '../../components/Banner'
import PageHeader from '../../components/PageHeader'

const ContactComponent = () => {
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

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

  const handleSubmit = async (values, onSubmitProps) => {
    const contactData = {
      name: values.name,
      email: values.email,
      message: values.message,
    }
    try {
      const contact = await addContact(contactData)

      if (contact) {
        const successAlertProps = {
          show: true,
          title: 'Mensaje enviado!',
          message: 'Gracias por contactarnos, le responderemos a la brevedad',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertprops(successAlertProps)
        onSubmitProps.resetForm()
      }
    } catch (error) {
      const errorAlertProps = {
        show: true,
        title: 'Ooops, algo ha fallado!',
        message: error.message,
        icon: 'error',
        onConfirm: () => {},
      }
      setAlertprops(errorAlertProps)
    }
  }

  return (
    <>
      <Alert {...alertProps} />
      <Banner img="/images/banner-top5.jpg" display={{ base: 'none', md: 'flex' }} />
      <PageHeader title="CONTACTANOS" display={{ base: 'none', md: 'flex' }} />
      <Container
        bg="#efefef"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="brand.blue"
            color="black"
            borderRadius="lg"
            m={{
              base: 4,
              sm: 4,
              md: 10,
              lg: 6,
            }}
            p={{
              base: 5,
              sm: 5,
              md: 5,
              lg: 6,
            }}
          >
            <Box p={2}>
              <Wrap>
                <WrapItem w="50%">
                  <Box>
                    <Text textStyle="title" color="white" fontWeight="400">Dejanos tu mensaje</Text>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white" w="98%">
                      Completa el formulario y nuestro equipo
                      se pondrá en
                      contacto a la brevedad!
                    </Text>
                    <Box
                      py={{
                        base: 5,
                        sm: 5,
                        md: 8,
                        lg: 10,
                      }}
                    >
                      <VStack pl={0} spacing={6} alignItems="flex-start">
                        <Button
                          size="md"
                          variant="link"
                          color="white"
                          fontWeight="400"
                          _hover={{ border: 'none' }}
                          _active={{ border: 'none' }}
                          leftIcon={<MdPhone color="#EC4C4C" size="20px" />}
                        >
                          +54-91155555
                        </Button>
                        <Button
                          size="md"
                          variant="link"
                          color="white"
                          fontWeight="400"
                          _hover={{ border: 'none' }}
                          _active={{ border: 'none' }}
                          leftIcon={<MdEmail color="#f8fc74" size="20px" />}
                        >
                          contacto@somosmas.com
                        </Button>
                        <Button
                          size="md"
                          variant="link"
                          color="white"
                          fontWeight="400"
                          _hover={{ border: 'none' }}
                          _active={{ border: 'none' }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Buenos Aires, Argentina
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem justifyContent="center" alignItems="center">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <Box
                        bg="white"
                        borderRadius="lg"
                        w="full"
                        p={{ base: 10, md: 5, lg: 30 }}
                      >
                        <Box m={5} color="#0B0E3F">
                          <VStack spacing={5}>
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
                              bg="brand.yellow"
                              fontFamily="atma"
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
    </>
  )
}

export default ContactComponent
