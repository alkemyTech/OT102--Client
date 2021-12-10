import React from 'react'
import { useParams } from 'react-router-dom'

export default function ActivityDetail() {
  const params = useParams()
  return (
    <>
      <h1>Activity page</h1>
      <h2>
        activity id:
        {params.id}
      </h2>
    </>
  )
}
