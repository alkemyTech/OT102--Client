import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import NewsHomeCard from './NewsHomeCard'

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        <NewsHomeCard />
        <NewsHomeCard />
        <NewsHomeCard />
        <NewsHomeCard />
      </SimpleGrid>
    </Box>
  );
}
