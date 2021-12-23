import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Image,
  Button,
} from '@chakra-ui/react'
import Spinner from '../../../components/Spinner'
import { getAllEntries, delEntry } from '../../../services/entriesService'
import Alert from '../../../components/alert/Alert'
import DeleteNewsButton from './deleteNewsButton/DeleteNewsButton'

const ListNews = () => {
  const [news, setNews] = useState([])
  const [alertProps, setAlertProps] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    cancelbtn: true,
    onConfirm: () => {},
    onCancel: () => {},
  })

  useEffect(() => {
    const getEntries = async () => {
      try {
        const response = await getAllEntries()
        setNews(response.data.body)
      } catch (error) {
        setAlertProps({
          show: true,
          title: 'Ooops, algo ha fallado!',
          message: error.message,
          icon: 'error',
          onConfirm: () => {},
        })
      }
    }
    getEntries()
  }, [])

  const confirmedDelete = async (entryId) => {
    try {
      const deleteNews = await delEntry(entryId)
      if (deleteNews) {
        setNews((prevNews) => {
          const updateNews = prevNews.filter(
            (entry) => entry.id !== entryId,
          )
          return updateNews
        })
        setAlertProps({
          show: true,
          title: 'Novedad Eliminada',
          message: 'Novedad eliminada exitosamente!',
          icon: 'success',
          cancelbtn: false,
          onConfirm: () => {},
        })
      }
    } catch (error) {
      setAlertProps({
        show: true,
        title: 'Oops! algo ha salido mal',
        message: error.message,
        icon: 'error',
        cancelbtn: true,
        onConfirm: () => {},
        onCancel: () => {},
      })
    }
  }
  const deleteNewsHandler = (newsId) => {
    setAlertProps({
      show: true,
      title: '¿Estás seguro?',
      message: 'Estas a punto de eliminar una novedad, esto es irreversible',
      icon: 'warning',
      cancelbtn: true,
      onConfirm: () => confirmedDelete(newsId),
      onCancel: () => {},
    })
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
          Novedades
        </Text>
        {news.length > 0 ? (
          <Table size="sm" textAlign="center">
            <Thead bg="brand.cyan">
              <Tr>
                <Th textAlign="center">Nombre</Th>
                <Th textAlign="center">Imagen</Th>
                <Th textAlign="center">Fecha de creación</Th>
                <Th textAlign="center">Acciones</Th>

              </Tr>
            </Thead>
            <Tbody>
              {news.map((item) => (
                <Tr key={item.id} _hover={{ background: 'brand.gray1' }}>
                  <Td textAlign="center">{item.name}</Td>
                  <Td>
                    {' '}
                    <Image
                      boxSize="85px"
                      objectFit="cover"
                      src={item.image}
                      alt="Dan Abramov"
                    />
                  </Td>
                  <Td textAlign="center">{item.createdAt}</Td>
                  <Td textAlign="center">
                    {' '}
                    <Link to={`${item.id}`}>
                      <Button
                        fontWeight={600}
                        marginRight="15px"
                        bg="brand.cyan"
                        _hover={{
                          bg: 'brand.gray1',
                        }}
                      >
                        Editar
                      </Button>
                    </Link>
                    <DeleteNewsButton
                      id={item.id}
                      onDelete={deleteNewsHandler}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  )
}

export default ListNews
