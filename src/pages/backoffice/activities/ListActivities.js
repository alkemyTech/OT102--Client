import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Spinner from '../../../components/Spinner'
import {
  getAllActivities,
  delActivity,
} from '../../../services/activitiesService'
import Alert from '../../../components/alert/Alert'
import DeleteActivityButton from './deleteActivityButton/DeleteActivityButton'

const ListActivities = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [activities, setActivities] = useState([])
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
    const getActivities = async () => {
      try {
        const response = await getAllActivities()
        if (response) {
          setLoading(false)
          setActivities(response.data.body)
        }
      } catch (error) {
        setAlertProps({
          show: true,
          title: 'Oops! Algo ha salido mal!',
          message: error.message,
          icon: 'error',
          cancelbtn: false,
          onConfirm: () => {},
        })
      }
    }
    getActivities()
  }, [])

  const confirmedDelete = async (activityId) => {
    try {
      const deleteActivity = await delActivity(activityId)
      if (deleteActivity) {
        setActivities((prevActivities) => {
          const updatedActivities = prevActivities.filter(
            (activity) => activity.id !== activityId,
          )
          return updatedActivities
        })
        setAlertProps({
          show: true,
          title: 'Actividad Eliminada!',
          message: 'Actividad eliminada exitosamente!',
          icon: 'success',
          cancelbtn: false,
          onConfirm: () => {},
        })
      }
    } catch (error) {
      setAlertProps({
        show: true,
        title: 'Oops! Algo ha salido mal!',
        message: error.message,
        icon: 'error',
        cancelbtn: true,
        onConfirm: () => {},
        onCancel: () => {},
      })
    }
  }

  const deleteActivityHandler = async (activityId) => {
    setAlertProps({
      show: true,
      title: 'Estas Seguro?',
      message: 'Estas a punto de eliminar una actividad, esto es irreversible.',
      icon: 'warning',
      cancelbtn: true,
      onConfirm: () => confirmedDelete(activityId),
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
          Actividades
          <Tooltip hasArrow label="Agregar Actividad">
            <Button
              m={4}
              onClick={() => navigate('new')}
              bg="#33d9b2"
              size="sm"
              rounded="full"
              aria-label="Agregar Actividad"
              _hover={{ background: '#2DB897' }}
            >
              <AddIcon color="white" />
            </Button>
          </Tooltip>
        </Text>
        {!loading ? (
          <Table size="sm" textAlign="center">
            <Thead bg="brand.cyan">
              <Tr>
                <Th textAlign="center">Actividad</Th>
                <Th textAlign="center">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {activities.map((item) => (
                <Tr key={item.id} _hover={{ background: 'brand.gray1' }}>
                  <Td textAlign="center">{item.name}</Td>
                  <Td textAlign="center">
                    <Button
                      onClick={() => navigate(`${item.id}`)}
                      bg="brand.cyan"
                    >
                      Editar
                    </Button>
                    <DeleteActivityButton
                      id={item.id}
                      onDelete={deleteActivityHandler}
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

export default ListActivities
