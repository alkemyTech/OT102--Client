import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading,
} from '@chakra-ui/react'
import { CategorySchema } from './ValidationSchemas'
import { addCategory, getCategoryById, updateCategory } from '../../services/categoriesService'
import Alert from '../alert/Alert'

const EditCategoryForm = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const [categoryData, setCategoryData] = useState({
    textButton: 'Crear',
    name: '',
    description: '',
  })

  const loadData = async () => {
    try {
      const loadedCategory = await getCategoryById(id)
      setCategoryData({
        textButton: 'Editar',
        name: loadedCategory.data.body.name,
        description: loadedCategory.data.body.description,
      })
    } catch (error) {
      // no me acuerdo cual era el errorhandler que estabamos utiizando para esto,
      // asi que le deje el alert como para que muestre algo
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

  useEffect(() => {
    if (id) {
      loadData()
    }
  // eslint-disable-next-line
  }, [])

  const handleUpdateSubmit = async (values, onSubmitProps) => {
    try {
      const updatedCategory = await updateCategory(id, {
        name: values.categoryName,
        description: values.description,
      })

      if (updatedCategory) {
        const successAlertProps = {
          show: true,
          title: 'Categoria actualizada con éxito',
          message: '',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertprops(successAlertProps)
        onSubmitProps.resetForm()
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

  const handleAddSubmit = async (values, onSubmitProps) => {
    try {
      const addedCategory = await addCategory({
        name: values.categoryName,
        description: values.description,
      })

      if (addedCategory) {
        const successAlertProps = {
          show: true,
          title: 'Categoria registrada éxito',
          message: '',
          icon: 'success',
          onConfirm: () => {},
        }
        setAlertprops(successAlertProps)
        onSubmitProps.resetForm()
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
        initialValues={{
          categoryName: categoryData.name,
          description: categoryData.description,
        }}
        validationSchema={CategorySchema}
        onSubmit={id ? handleUpdateSubmit : handleAddSubmit}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center" bg="gray.100">
              <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                  <Heading fontSize="4xl" textAlign="center">
                    Categoria
                  </Heading>
                </Stack>
                <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
                  <Stack spacing={4}>
                    <Box>
                      <FormControl id="categoryName">
                        <FormLabel>Nombre de la categoria</FormLabel>
                        <Input
                          type="text"
                          name="categoryName"
                          id="categoryName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.categoryName}
                        />
                        <small>
                          {errors.categoryName && touched.categoryName && errors.categoryName}
                        </small>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="description">
                        <FormLabel>Descripción</FormLabel>
                        <Input
                          type="text"
                          name="description"
                          id="description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                        />
                        <small>
                          {errors.description && touched.description && errors.description}
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
                        {categoryData.textButton}
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

export default EditCategoryForm
