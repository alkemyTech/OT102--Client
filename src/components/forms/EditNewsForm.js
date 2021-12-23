import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  getEntryById,
  addEntry,
  updateEntry,
} from '../../services/entriesService'
import { NewsSchema } from './ValidationSchemas'
import Alert from '../alert/Alert'
import ReturnLink from '../ReturnLink'
import imgUploadService from '../../services/imgUploadService'

const EditNewsForm = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [newsData, setNewsData] = useState({
    textButton: 'Crear',
    inputText: 'Imagen',
    id: null,
    name: '',
    image: null,
    content: '',
  })
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const loadData = async () => {
    if (id) {
      try {
        const loadedData = await getEntryById(id)
        setNewsData({
          textButton: 'Editar',
          inputText: 'Actualizar Imagen',
          id: loadedData.data.body.id,
          name: loadedData.data.body.name,
          currentImage: loadedData.data.body.image,
          content: loadedData.data.body.content,
        })
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
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line
  }, [])

  const [data, setData] = useState()

  const handlerchange = (event, editor) => {
    const dataEdited = editor.getData()
    setData({ ...newsData, content: dataEdited })
  }

  const handleUpdateSubmit = async (values) => {
    try {
      const updatedNews = await updateEntry(id, {
        name: values.name,
        content: data.content,
        image: values.image
          ? await imgUploadService(values.image)
          : newsData.currentImage,
        categoryId: '1', // Category should be hardcoded.
        type: 'News', // Category and type should be News (novedades)
      })

      if (updatedNews) {
        const successAlertProps = {
          show: true,
          title: 'Novedad actualizada!',
          message: 'Novedad actualizada exitosamente!',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertprops(successAlertProps)
        navigate('/')
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

  const handleAddSubmit = async (values) => {
    try {
      const addedNews = await addEntry({
        name: values.name,
        content: data.content,
        image: await imgUploadService(values.image),
        categoryId: '1',
        type: 'News',
      })
      if (addedNews) {
        const successAlertProps = {
          show: true,
          title: 'Novedad agregada!',
          message: 'Novedad agregada exitosamente!',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertprops(successAlertProps)
        navigate('/')
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
      <HStack justifyContent="flex-end">
        <ReturnLink />
      </HStack>
      <Alert {...alertProps} />
      <Formik
        enableReinitialize
        initialValues={{
          name: newsData.name,
          content: newsData.content,
        }}
        validationSchema={NewsSchema}
        onSubmit={(values) =>
          (id ? handleUpdateSubmit(values) : handleAddSubmit(values))}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center" bg="gray.100">
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                  <Heading fontSize="4xl" textAlign="center">
                    Novedad
                  </Heading>
                </Stack>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <Box>
                      <FormControl id="name">
                        <FormLabel>Titulo</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <small>
                          {errors.name && touched.name && errors.name}
                        </small>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="content">
                        <FormLabel>Contenido</FormLabel>
                        <CKEditor
                          name="content"
                          editor={ClassicEditor}
                          data={values.content}
                          onChange={handlerchange}
                        />
                        <small>
                          {errors.content && touched.content && errors.content}
                        </small>
                      </FormControl>
                    </Box>
                    {id && (
                      <Box>
                        <FormLabel>Imagen Actual</FormLabel>
                        <Image
                          alt={newsData.name}
                          objectFit="cover"
                          src={newsData.currentImage}
                        />
                      </Box>
                    )}
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
                        <small>
                          {errors.image && touched.image && errors.image}
                        </small>
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
                        {newsData.textButton}
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
export default EditNewsForm
