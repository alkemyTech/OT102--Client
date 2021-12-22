import React, { useState, useEffect } from 'react'
import {
  Container,
  Text,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import { getAllTestimonials } from '../services/testimonialsService'
import Alert from '../components/alert/Alert'
import TestimonialCard from '../components/testimonials/CardTestimonials'
import Spinner from '../components/Spinner'

export default function ListTestimonials() {
  const [allTestimonials, setTestimonials] = useState([])
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
      const loadedTestimonials = await getAllTestimonials()
      setTestimonials(loadedTestimonials.data.body)
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
        <Text textStyle="title">Testimonios Somos Mas</Text>
        <Box p={0}>
          <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing="20"
            mt={16}
            mx="auto"
          >
            { !allTestimonials ? <Spinner /> : allTestimonials.map((testimonial) =>
              <TestimonialCard {...testimonial} key={testimonial.id} />).reverse()}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
