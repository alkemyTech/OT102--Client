import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { getAllEntries } from '../services/entriesService'
import NewsHomeCard from './NewsHomeCard';

const ListNews = () => {
  const [newss, setNews] = useState([])

  useEffect(() => {
    getAllEntries().then((entries) => {
      setNews(entries.data.body)
      // console.log(entries.data.body)
    })
  }, [])

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>

        {
        newss.map((news) =>
          <NewsHomeCard {...news} key={news.id} />).reverse().slice(0, 4)
        }
      </SimpleGrid>
    </Box>
  )
}

export default ListNews;
