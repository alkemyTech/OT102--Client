import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Container, Text } from '@chakra-ui/react'
import { getOrganizationById } from '../services/organizationsService'

const WelcomeText = ({
  welcomeText, ...props
}) => {
  const [ong, setOng] = useState([])

  useEffect(() => {
    getOrganizationById(1).then((organization) => {
      setOng(organization.data.body)
      // console.log(organization.data.body)
    })
  }, [])

  return (
    <Container maxW="container.lg" {...props}>
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
}

WelcomeText.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default WelcomeText;
