import { Text, Link } from '@chakra-ui/react'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function ReturnLink() {
  return (
    <Link as={ReactRouterLink} to=".." display="flex" my={2} mx={4}>
      {/* This ".." links to the parent route */}
      <FiChevronLeft size={30} />
      <Text>Regresar</Text>
    </Link>
  )
}
