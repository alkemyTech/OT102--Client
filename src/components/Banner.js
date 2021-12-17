import { Image } from '@chakra-ui/react'
import React from 'react'

export default function Banner({ ...rest }) {
  return (
    <Image
      h="180px"
      w="full"
      objectFit="cover"
      src="/images/banner.jpeg"
      alt="Picture of banner"
      // fallbackSrc="/images/logo-somos-mas.png"
      {...rest}
    />
  )
}
