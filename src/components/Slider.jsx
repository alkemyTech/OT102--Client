import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

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
      <div key={imageUrl}>
        <img src={imageUrl} alt={text} />
      </div>
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
