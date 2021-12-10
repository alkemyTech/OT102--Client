import React, { useState, useEffect } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { getAllEntries } from '../../services/entriesService'
import NewsHomeCard from '../news/NewsHomeCard'
import Spinner from '../Spinner'

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
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>

          { !allNews ? <Spinner /> : allNews.map((news) =>
            <NewsHomeCard {...news} key={news.id} />).reverse().slice(0, 4)}
        </SimpleGrid>
      </Box>
    )

  const getErrorView = () =>
    (
      <div>
        Error al cargar las novedades!
        { error.message }
        <Spinner />
      </div>
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
