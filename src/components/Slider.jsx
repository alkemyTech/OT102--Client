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
    {slides.map(({ imgUrl, text }) => (
      <div key={imgUrl}>
        <img src={imgUrl} alt={text} />
      </div>
    ))}
  </Carousel>
)

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
}

export default Slider
