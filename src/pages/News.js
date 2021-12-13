import React, { useState, useEffect } from 'react';
import {
  Container,
  Text,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { getAllEntries } from '../services/entriesService'
import NewsHomeCard from '../components/news/NewsHomeCard'
import Spinner from '../components/Slider'

const ListNews = () => {
  const [allNews, setNews] = useState([])
  const [error, setError] = useState(null)

  const loadData = async () => {
    getAllEntries().then((entries) => {
      setNews(entries.data.body)
      setError(null)
    }).catch((err) =>
      setError(err))
  }

  // run on load
  useEffect(() => {
    loadData()
  }, [])

  const getListItems = () =>
    (
      <Container maxW="container.lg" mt="5">
        <Text textStyle="title">Novedades Somos Mas</Text>
        <Box p={0}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>

            { !allNews ? <Spinner /> : allNews.map((news) =>
              <NewsHomeCard {...news} key={news.id} />).reverse()}
          </SimpleGrid>
        </Box>
      </Container>
    )

  const getErrorView = () =>
    (
      <Container maxW="container.lg" mt="5">
        <div>
          Error al cargar las novedades!
          { error.message }
          <Spinner />
        </div>
      </Container>
    )

  return (
    <div>
      <ul>
        { error ? getErrorView() : getListItems() }
      </ul>
    </div>
  )
}

export default ListNews;
