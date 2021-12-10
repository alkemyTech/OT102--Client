import React from 'react'
import PropTypes from 'prop-types'
import ChakraInput from './formComponents/ChakraInput'
import ChakraTextarea from './formComponents/ChakraTextarea'

const FormikControl = (props) => {
  const { control, ...rest } = props

  switch (control) {
    case 'chakraInput':
      return <ChakraInput {...rest} />
    case 'chakraTextarea':
      return <ChakraTextarea {...rest} />
    default:
      return null
  }
}

FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
}

export default FormikControl
