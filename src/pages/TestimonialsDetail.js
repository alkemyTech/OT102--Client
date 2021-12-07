import React from 'react'
import { useParams } from 'react-router-dom'

export default function TestimonialsDetail() {
  const params = useParams()
  return (
    <>
      <h1>Testimonial Detail</h1>
      <h2>
        Testimonial id:
        {params.id}
      </h2>
    </>
  )
}
