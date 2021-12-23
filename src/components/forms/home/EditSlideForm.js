import React, { useState, useEffect, useRef } from 'react'
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { Form, Formik } from 'formik'
import { FiChevronLeft } from 'react-icons/fi'
import {
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  HStack,
  Box,
  Link,
  Input,
  Image,
} from '@chakra-ui/react'

import AlertFunction from '../../alert/AlertFunction'
import extractErrorMsg from '../../../utils/extractErrorMsg'
import Spinner from '../../Spinner'
import { slideSchema } from '../ValidationSchemas'
import { getslideById, updateSlide } from '../../../services/slidesService'
import imgUploadService from '../../../services/imgUploadService'
import PreviewImage from '../../PreviewImage'

export default function EditSlideForm() {
  const imageRef = useRef(null)
  const navigate = useNavigate()
  const { id: slideId } = useParams()
  const [slide, setSlide] = useState({
    imageUrl: '',
    text: '',
    order: '',
  })

  useEffect(() => {
    getslideById(slideId)
      .then(({ data }) => {
        setSlide(data.body)
      })
      .catch((error) => {
        AlertFunction({
          show: true,
          title: 'Ooops, algo ha fallado!',
          icon: 'error',
          message: extractErrorMsg(error),
          onConfirm: () => {},
        })
      })
    // eslint-disable-next-line
  }, [])

  const onSubmit = async (values, { setSubmitting }) => {
    const URL = await imgUploadService(values.image)
    values.imageUrl = URL

    const { data } = await updateSlide(slideId, values)
    AlertFunction({
      show: true,
      title: '',
      icon: 'success',
      message: data.message,
      onConfirm: () => navigate('/backoffice/edit-home'),
    })
    setSubmitting(false)
  }

  return (
    <>
      <HStack justifyContent="flex-end">
        <Link as={ReactRouterLink} to="/backoffice/edit-home" display="flex">
          <FiChevronLeft size={30} />
          <Box>Regresar</Box>
        </Link>
      </HStack>
      <Formik
        enableReinitialize
        initialValues={{ ...slide, image: null }}
        validationSchema={slideSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
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
                Editar slide
              </Heading>
              <Stack spacing={4} rounded="lg" bg="white" boxShadow="lg" p={8}>
                {/* SLIDE ORDER */}
                <Input type="hidden" name="order" value={values.order} />
                {/* SLIDE IMAGE URL */}
                <Input type="hidden" name="imageUrl" value={values.imageUrl} />
                {/* SLIDE TEXT */}
                <FormControl id="text">
                  <FormLabel>Ingrese el texto</FormLabel>
                  <Input
                    type="text"
                    value={values.text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <small>{errors.text && touched.text && errors.text}</small>
                </FormControl>
                {/* SLIDE IMAGE */}
                <FormControl id="image">
                  <FormLabel>Imagen para slide</FormLabel>
                  <Box p={4}>
                    {values.image ? (
                      <PreviewImage file={values.image} maxW={300} maxH={300} />
                    ) : (
                      <Image src={slide.imageUrl} />
                    )}
                  </Box>
                  <Input
                    ref={imageRef}
                    hidden
                    accept="image/*"
                    type="file"
                    name="image"
                    id="image"
                    onChange={async (event) => {
                      setFieldValue('image', event.target.files[0])
                    }}
                  />
                  <Button onClick={() => imageRef.current.click()}>
                    Cargar imagen
                  </Button>
                  <small>{errors.image && touched.image && errors.image}</small>
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
