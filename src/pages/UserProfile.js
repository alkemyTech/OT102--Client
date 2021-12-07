import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const params = useParams()
  return (
    <>
      <h1>UserProfile</h1>
      <h2>
        user id:
        {params.id}
      </h2>
    </>
  )
}
