import React, { useState, useEffect } from 'react';
import { Container, Text } from '@chakra-ui/react'
import { getOrganizationById } from '../../services/organizationsService'
import Spinner from '../Spinner'

const WelcomeText = () => {
  const [ong, setOng] = useState([])
  const [error, setError] = useState(null)

  const loadData = async () => {
    getOrganizationById(1).then((organization) => {
      setOng(organization.data.body)
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
      <Container maxW="container.lg">
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          textAlign="left"
          fontWeight={300}
          maxW="3xl"
        >
          {ong.welcomeText}
        </Text>
      </Container>
    )

  const getErrorView = () =>
    (
      <Container maxW="container.lg">
        <div>
          Error al texto bienvenida!
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

export default WelcomeText;
