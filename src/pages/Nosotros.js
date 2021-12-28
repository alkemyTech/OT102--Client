import React, { useEffect, useState } from 'react'
import { Flex, VStack } from '@chakra-ui/react'

import { getAllMembers } from '../services/membersService'
import MemberCard from '../components/members/MemberCard'
import Spinner from '../components/Spinner'
import Banner from '../components/Banner'
import PageHeader from '../components/PageHeader'
// import imageTop from '/images/banner.jpeg'

export default function Nosotros() {
  const [isLoading, setIsLoading] = useState(false)
  const [members, setMembers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getAllMembers()
      .then(({ data }) => {
        const { body } = data
        setMembers(body)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }, [])

  return (
    <VStack>
      <Banner img="/images/banner-top1.jpg" display={{ base: 'none', md: 'flex' }} />
      <PageHeader title="MIEMBROS" display={{ base: 'none', md: 'flex' }} />
      <Flex wrap="wrap" justifyContent="center" alignItems="center">
        {isLoading && <Spinner />}
        {members.map((member) => (
          <MemberCard member={member} />
        ))}
      </Flex>
    </VStack>
  )
}
