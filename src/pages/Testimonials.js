import React, { useState, useEffect } from 'react'
import {
  Container,
  Box,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { getAllTestimonials } from '../services/testimonialsService'
import Alert from '../components/alert/Alert'
import TestimonialCard from '../components/testimonials/CardTestimonials'
import Spinner from '../components/Spinner'
import Banner from '../components/Banner'
import PageHeader from '../components/PageHeader'

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
    return <Flex wrap="wrap" justifyContent="center" alignItems="center"><Spinner /></Flex>
  }

  return (
    <>
      <Alert {...alertProps} />
      <Banner img="/images/banner-top4.jpg" display={{ base: 'none', md: 'flex' }} />
      <PageHeader title="TESTIMONIOS" display={{ base: 'none', md: 'flex' }} />
      <Container maxW="container.lg" mt="5">
        <Box p={0}>
          <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing="20"
            mt={16}
            mx="auto"
            alignItems="flex-start"
          >
            { !allTestimonials ? <Spinner /> : allTestimonials.map((testimonial) =>
              <TestimonialCard {...testimonial} key={testimonial.id} />).reverse()}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
