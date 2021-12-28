import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  Text,
  VStack,
  Image,
  Flex,
  HStack,
} from '@chakra-ui/react'
import { getEntryById } from '../services/entriesService'
import Alert from '../components/alert/Alert'
import Spinner from '../components/Spinner'
import ReturnLink from '../components/ReturnLink'

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

  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      const loadedNews = await getEntryById(id)
      setNewsData(loadedNews.data.body)
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
    return (
      <Spinner />
    )
  }

  return (
    <>
      <HStack justifyContent="flex-end">
        <ReturnLink />
      </HStack>
      <Alert {...alertProps} />
      <Container maxW="container.lg" mt="5">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start" w="full" justifyContent="space-around">
          <Image
            w="full"
            h="250px"
            src={newsData.image}
            objectFit="cover"
            objectPosition="center -100px"
          />
          <Flex w="full">
            <Text textStyle="title" maxW="100%" flexGrow="1" borderBottom="1px" borderColor="#E6E6E6" pt="15px">{newsData.name}</Text>
          </Flex>
          <Text as="p" fontSize="lg">{newsData.content}</Text>

        </VStack>
      </Container>
    </>
  );
}
