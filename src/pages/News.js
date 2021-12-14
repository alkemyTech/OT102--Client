import React, { useState, useEffect } from 'react'
import {
  Container,
  Text,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { getAllEntries } from '../services/entriesService'
import Alert from '../components/alert/Alert'
import NewsHomeCard from '../components/news/NewsHomeCard'
import Spinner from '../components/Slider'

export default function ListNews() {
  const [allNews, setNews] = useState([])
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
      const loadedNews = await getAllEntries()
      setNews(loadedNews.data.body)
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
    return (
      <Spinner />
    )
  }

  return (
    <>
      <Alert {...alertProps} />
      <Container maxW="container.lg" mt="5">
        <Text textStyle="title">Novedades Somos Mas</Text>
        <Box p={0}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>

            { !allNews ? <Spinner /> : allNews.map((news) =>
              <NewsHomeCard {...news} key={news.id} />).reverse()}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
