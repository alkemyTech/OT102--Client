import React from 'react'
import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const DeleteUserButton = (props) => {
  const { onDelete, id } = props

  const deleteHandler = () => {
    onDelete(id)
  }

  return (
    <Button bg="brand.rouge" colorScheme="brand.rouge" onClick={deleteHandler}>
      Eliminar
    </Button>
  )
}

DeleteUserButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteUserButton
