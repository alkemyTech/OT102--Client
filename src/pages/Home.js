import React, { useEffect, useState } from 'react'

import { getAllslides } from '../services/slidesService'
// import WelcomeText from '../components/home/WelcomeText'
import NewsHome from '../components/home/NewsHome'
import Slider from '../components/Slider'

export default function Home() {
  // there is not slides endpoint.  it should return slides orderBy 'order' column.
  const [slides, setSlides] = useState([
    { imgUrl: '/images/slide-1.jpg', text: 'Somos mas' },
    { imgUrl: '/images/slide-2.jpg', text: 'Dona' },
    { imgUrl: '/images/slide-3.jpg', text: 'Escuela' },
  ])

  useEffect(() => {
    getAllslides()
      .then(({ data }) => setSlides(data.body))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Slider slides={slides} />
      {/* <WelcomeText /> */}
      <NewsHome />
    </>
  )
}
