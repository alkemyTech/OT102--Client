import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { HStack, Image } from '@chakra-ui/react'

const Slider = ({ slides, ...rest }) => (
  <Carousel
    infiniteLoop
    useKeyboardArrows
    autoPlay
    showThumbs={false}
    showStatus={false}
    showArrows={false}
    {...rest}
  >
    {slides.map(({ imageUrl, text }) => (
      <HStack key={imageUrl}>
        <Image src={imageUrl} alt={text} maxH={{ base: 120, md: 420 }} objectFit="scale-down" />
      </HStack>
    ))}
  </Carousel>
)

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
}

export default Slider
