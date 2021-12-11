import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading,
} from '@chakra-ui/react'
import { addCategory, getCategoryById, updateCategory } from '../../services/categoriesService'

const EditCategoryForm = () => {
  const id = null
  const [categoryData, setCategoryData] = useState({
    textButton: 'Crear',
    name: '',
    description: '',
  })

  const registerSchema = Yup.object().shape({
    categoryName: Yup.string().required('Nombre es Obligatorio'),
  })

  const loadData = async () => {
    await getCategoryById(id)
      .then((response) => response.data.body)
      .then((result) =>
        setCategoryData({
          textButton: 'Editar',
          name: result.name,
          description: result.description,
        }))
      .catch((error) => error)
  }

  useEffect(() => {
    if (id) {
      loadData()
    }
  }, [])

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          categoryName: categoryData.name,
          description: categoryData.description,
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          if (id) {
            updateCategory(id, {
              name: values.categoryName,
              description: values.description,
            })
          } else {
            addCategory({
              name: values.categoryName,
              description: values.description,
            })
          }
        }}
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
