import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Slider = ({ slide, height, ...props }) =>
  (
    <Carousel
      {...props}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      {
        slide.map(({ imgUrl, text }) => (
          <div>
            <img src={imgUrl} alt={text} height={height} />
          </div>
        ))
      }
    </Carousel>
  )

Slider.propTypes = {
  slide: PropTypes.shape([]),
  height: PropTypes.number,
}

Slider.defaultProps = {
  slide: [],
  height: 300,
}

export default Slider
