import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, var(--chakra-colors-brand-cyan), var(--chakra-colors-brand-blue))"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        {`The page you're looking for does not seem to exist${''}`}
      </Text>

      <Button
        colorScheme="yellow"
        bgGradient="linear(to-r, var(--chakra-colors-brand-cyan), var(--chakra-colors-brand-blue))"
        color="white"
        variant="solid"
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  )
}
