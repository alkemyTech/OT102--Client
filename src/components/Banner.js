import { Image } from '@chakra-ui/react'
import React from 'react'
import { PropTypes } from 'prop-types'

export default function Banner({ img, ...rest }) {
  return (
    <Image
      h="213px"
      w="full"
      objectFit="cover"
      objectPosition="center -10px"
      src={img}
      alt="Picture of banner"
      // fallbackSrc="/images/logo-somos-mas.png"
      {...rest}
    />
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
}
