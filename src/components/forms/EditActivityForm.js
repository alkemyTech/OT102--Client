import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading,
} from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { getActivityById, addActivity, updateActivity } from '../../services/activitiesService'
import { ActivitySchema } from './ValidationSchemas'
import Alert from '../alert/Alert'

const EditActivitiesForm = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [activityData, setActivityData] = useState({
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
        const loadedData = await getActivityById(id)
        setActivityData({
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
    setData({ ...activityData, content: dataEdited })
  }

  const handleUpdateSubmit = async (values) => {
    try {
      const updatedActivity = await updateActivity(id, {
        name: values.name,
        content: data.content,
      })

      if (updatedActivity) {
        const successAlertProps = {
          show: true,
          title: 'Actividad actualizada con éxito',
          message: '',
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
      const addedActivity = await addActivity({
        name: values.name,
        content: data.content,
      })

      if (addedActivity) {
        const successAlertProps = {
          show: true,
          title: 'Actividad registrada éxito',
          message: '',
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
      <Alert {...alertProps} />
      <Formik
        enableReinitialize
        initialValues={{ name: activityData.name, content: activityData.content }}
        validationSchema={ActivitySchema}
        onSubmit={(values) => (id ? handleUpdateSubmit(values) : handleAddSubmit(values))}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center" bg="gray.100">
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                  <Heading fontSize="4xl" textAlign="center">
                    Actividad
                  </Heading>
                </Stack>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <Box>
                      <FormControl id="name">
                        <FormLabel>Nombre de la Actividad</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <small>{errors.name && touched.name && errors.name}</small>
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
                        <small>{errors.content && touched.content && errors.content}</small>
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
                        {activityData.textButton}
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
export default EditActivitiesForm
