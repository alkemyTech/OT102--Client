import React, { useState, useEffect } from 'react'
import {
  Container, Box, SimpleGrid, Flex,
} from '@chakra-ui/react'
import { getAllActivities } from '../../services/activitiesService'
import Alert from '../alert/Alert'
import ActivityCard from './ActivityCard'
import Spinner from '../Spinner'

const ListActivities = () => {
  const [allActivities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const loadData = async () => {
    try {
      setLoading(true)
      const loadedActivities = await getAllActivities()
      setActivities(loadedActivities.data.body)
      setLoading(false)
    } catch (error) {
      setLoading(false)
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

  // run on load
  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return <Flex wrap="wrap" justifyContent="center" alignItems="center"><Spinner /></Flex>
  }

  return (
    <>
      <Alert {...alertProps} />
      <Container maxW="container.lg" mt="5">
        <Box p={0}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} alignItems="flex-start">
            {!allActivities ? (
              <Spinner />
            ) : (
              allActivities
                .map((activity) => (
                  <ActivityCard {...activity} key={activity.id} />
                ))
                .reverse()
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  )
}

export default ListActivities
