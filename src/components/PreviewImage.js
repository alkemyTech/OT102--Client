import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/react'

export default function PreviewImage({ file, ...props }) {
  const [preview, setPreview] = useState(null)

  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    setPreview(reader.result)
  }

  return <Image src={preview} alt="preview" {...props} />
}

PreviewImage.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
