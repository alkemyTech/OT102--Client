import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Spinner,
  HStack,
} from '@chakra-ui/react'

import {
  getOrganizationById,
  updateOrganization,
} from '../../../services/organizationsService'

import AlertFunction from '../../alert/AlertFunction'
import extractErrorMsg from '../../../utils/extractErrorMsg'
import { welcomeTextSchema } from '../ValidationSchemas'
import ReturnLink from '../../ReturnLink'

export default function EditHomeForm() {
  const { id: orgId } = useParams()
  const [welcomeText, setWelcomeText] = useState('Bienvenido')
  const navigate = useNavigate()

  const alertProps = {
    show: false,
    title: 'Ooops, algo ha fallado!',
    message: '',
    icon: 'error',
    onConfirm: () => {},
  }

  useEffect(() => {
    getOrganizationById(orgId)
      .then(({ data }) => {
        setWelcomeText(data.body.welcomeText)
      })
      .catch((error) => {
        AlertFunction({
          ...alertProps,
          show: true,
          message: extractErrorMsg(error),
        })
      })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <HStack justifyContent="flex-end">
        <ReturnLink />
      </HStack>
      <Formik
        enableReinitialize
        initialValues={{ welcomeText }}
        validationSchema={welcomeTextSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const { data } = await updateOrganization(orgId, values)
          AlertFunction({
            ...alertProps,
            show: true,
            title: '',
            icon: 'success',
            message: data.message,
            onConfirm: () => navigate('/backoffice/edit-home'),
          })
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form
            onSubmit={handleSubmit}
            align="center"
            justify="center"
            bg="gray.100"
          >
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
              <Heading fontSize="4xl" textAlign="center">
                Editar welcome text
              </Heading>
              <Stack spacing={4} rounded="lg" bg="white" boxShadow="lg" p={8}>
                {/* WELCOME TEXT */}
                <FormControl id="welcomeText">
                  <FormLabel>Ingrese el texto de Bienvenida</FormLabel>
                  <CKEditor
                    name="welcomeText"
                    editor={ClassicEditor}
                    data={values.welcomeText}
                    onChange={(event, editor) => {
                      setFieldValue('welcomeText', editor.getData())
                    }}
                  />
                  <small>
                    {errors.welcomeText
                    && touched.welcomeText
                    && errors.welcomeText}
                  </small>
                </FormControl>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  loadingText="Enviando"
                  spinner={isSubmitting ? <Spinner /> : null}
                  size="lg"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Enviar
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  )
}
