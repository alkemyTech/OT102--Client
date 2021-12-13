import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react'
import { getEntryById } from '../services/entriesService'
import Spinner from '../components/Spinner'

const NewsDetail = () => {
  const { id } = useParams()
  const [newsData, setNewsData] = useState({
    image: '',
    name: '',
    content: '',
  })
  const [error, setError] = useState(null)

  const loadData = async () => {
    getEntryById(id).then((entry) => {
      setNewsData(entry.data.body)
      setError(null)
    }).catch((err) =>
      setError(err))
  }

  // run on load
  useEffect(() => {
    loadData()
    // eslint-disable-next-line
  }, [])

  const getNews = () =>
    (
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
    )

  const getErrorView = () =>
    (
      <div>
        Error al cargar la novedad!
        { error.message }
        <Spinner />
      </div>
    )

  return (
    <div>
      <ul>
        { error ? getErrorView() : getNews() }
      </ul>
    </div>
  )
}

export default NewsDetail;
