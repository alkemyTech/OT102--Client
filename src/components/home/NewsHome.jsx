import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'
import NewsHomeList from './NewsHomeList'

const NewsHome = () => {
  const navigate = useNavigate()
  return (
    <Container maxW="container.lg" mt="10">
      <HStack
        name="PageHeader"
        w="full"
        px="10"
        justifyContent="space-around"
        borderBottom="1px"
        borderColor="#E6E6E6"
      >
        <Heading
          fontFamily="atma"
          fontStyle="normal"
          fontWeight="normal"
          flexGrow="1"
        >
          Novedades
        </Heading>
        <Button
          backgroundColor="var(--chakra-colors-brand-yellow)"
          py="4"
          px="10"
          borderRadius={5}
          onClick={() => navigate('/novedades')}
        >
          <Text
            textAlign="center"
            fontSize="xl"
            fontStyle="normal"
            fontFamily="atma"
            fontWeight="normal"
            // color="white"
          >
            ver todas
          </Text>
        </Button>
      </HStack>
      <NewsHomeList />
    </Container>
  )
}

export default NewsHome
