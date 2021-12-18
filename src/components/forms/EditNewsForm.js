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
import imgUploadService from '../../services/imgUploadService'

const EditNewsForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState()
  const [newsData, setNewsData] = useState({
    textButton: 'Crear',
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
          id: loadedData.data.body.id,
          name: loadedData.data.body.name,
          image: loadedData.data.body.image,
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

  const imageUploadChangeHandler = (e) => {
    const fileData = e.target.files[0]
    setSelectedFile(fileData)
  }

  const handleUpdateSubmit = async (values) => {
    try {
      const uploadedImage = await imgUploadService(selectedFile)
      if (uploadedImage) {
        const updatedNews = await updateEntry(id, {
          name: values.name,
          content: data.content,
          image: uploadedImage,
          categoryId: '1',
          type: 'News',
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
      const uploadedImage = await imgUploadService(selectedFile)
      if (uploadedImage) {
        const addedNews = await addEntry({
          name: values.name,
          content: data.content,
          image: uploadedImage,
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
                    <Box>
                      <FormControl id="image">
                        <FormLabel>Imagen</FormLabel>

                        <Input
                          type="file"
                          name="image"
                          id="image"
                          onChange={imageUploadChangeHandler}
                          onBlur={handleBlur}
                          value={values.image}
                        />
                        <small>
                          {errors.image && touched.image && errors.image}
                        </small>
                      </FormControl>
                    </Box>
                    <Flex flex={1}>
                      <Image
                        alt="News Image"
                        objectFit="cover"
                        src={newsData.image}
                        hidden={!id}
                      />
                    </Flex>

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
