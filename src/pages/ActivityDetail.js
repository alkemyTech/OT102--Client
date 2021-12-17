import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container, Text, VStack, Image,
} from '@chakra-ui/react'
import { getActivityById } from '../services/activitiesService'
import Alert from '../components/alert/Alert'
import Spinner from '../components/Spinner'

export default function ActivityDetail() {
  const { id } = useParams()
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const [activityData, setActivityData] = useState({
    image: '',
    name: '',
    content: '',
  })

  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      const loadedActivity = await getActivityById(id)
      setActivityData(loadedActivity.data.body)
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

  useEffect(() => {
    if (id) {
      loadData()
    }
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Alert {...alertProps} />
      <Container maxW="container.lg" mt="5">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Image
            w="full"
            h="250px"
            src={activityData.image}
            objectFit="cover"
            objectPosition="center -100px"
          />

          <Text textStyle="title">{activityData.name}</Text>
          <Text as="p" fontSize="lg">
            {activityData.content}
          </Text>
        </VStack>
      </Container>
    </>
  )
}
