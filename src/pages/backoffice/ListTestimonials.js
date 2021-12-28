import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box, Table, Thead, Tbody, Tr, Th, Td, Text, Image, Button,
} from '@chakra-ui/react'
import Spinner from '../../components/Spinner'
import { getAllTestimonials, delTestimonial } from '../../services/testimonialsService'
import Alert from '../../components/alert/Alert'

const ListTestimonials = () => {
  const [isLoading, setIsloading] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [deletedNew, setDeletedNew] = useState([])
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  useEffect(() => {
    setIsloading(true)
    const getTestimonials = async () => {
      try {
        const response = await getAllTestimonials()
        setTestimonials(response.data.body)
        setIsloading(false)
      } catch (error) {
        const errorAlertProps = {
          show: true,
          title: 'Ooops, algo ha fallado!',
          message: error.message,
          icon: 'error',
          onConfirm: () => {},
        }
        setAlertprops(errorAlertProps)
        setIsloading(false)
      }
    }
    getTestimonials()
  }, [deletedNew])

  function createMarkup(content) {
    return { __html: `${content}` };
  }

  const handleDelete = (id) => {
    try {
      delTestimonial(id)
      setDeletedNew(id)
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
      <Box
        mt="30px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        p="5px"
        flexDirection="column"
        textAlign="center"
      >
        <Text fontSize="2xl" mb="30px">
          Testimonios
        </Text>
        {isLoading ? (
          <Spinner />
        ) : (
          <Table size="sm" textAlign="center">
            <Thead bg="brand.cyan">
              <Tr>
                <Th textAlign="center">Nombre</Th>
                <Th textAlign="center">Imagen</Th>
                <Th textAlign="center">Contenido</Th>
                <Th textAlign="center">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {testimonials.map((item) => (
                <Tr key={item.id}>
                  <Td textAlign="center">{item.name}</Td>
                  <Td align="center">
                    {' '}
                    <Image boxSize="100px" objectFit="cover" src={item.image} alt={item.name} />
                  </Td>
                  <Td textAlign="center" dangerouslySetInnerHTML={createMarkup(item.content)} />
                  <Td textAlign="center">
                    {' '}
                    <Link to={`${item.id}`}>
                      <Button
                        fontWeight={600}
                        bg="brand.cyan"
                        _hover={{
                          bg: 'brand.gray1',
                        }}
                      >
                        Editar
                      </Button>
                    </Link>
                    {' '}
                    <Button
                      fontWeight={600}
                      bg="brand.rouge"
                      onClick={() => handleDelete(item.id)}
                      _hover={{
                        bg: 'brand.gray1',
                      }}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) }
      </Box>
    </>
  )
}

export default ListTestimonials
