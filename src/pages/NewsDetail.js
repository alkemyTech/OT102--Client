import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewsDetail() {
  const params = useParams()
  return (
    <>
      <h1>NewsDetail page</h1>
      <h2>
        news:
        {params.id}
      </h2>
    </>
  )
}
