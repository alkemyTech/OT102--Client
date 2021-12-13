import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react'
import { getEntryById } from '../services/entriesService'
import Alert from '../components/alert/Alert'

export default function NewsDetail() {
  const { id } = useParams()
  const [alertProps, setAlertprops] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })

  const [newsData, setNewsData] = useState({
    image: '',
    name: '',
    content: '',
  })

  const loadData = async () => {
    try {
      const loadedNews = await getEntryById(id)
      setNewsData(loadedNews.data.body)
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

  useEffect(() => {
    if (id) {
      loadData()
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <Alert {...alertProps} />
      <Container maxW="container.lg" mt="5">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Image
            w="full"
            h="250px"
            src={newsData.image}
            objectFit="cover"
            objectPosition="center -100px"
          />

          <Text textStyle="title">{newsData.name}</Text>
          <Text as="p" fontSize="lg">{newsData.content}</Text>
        </VStack>
      </Container>
    </>
  )
}
