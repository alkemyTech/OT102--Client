import React from 'react'

import WelcomeText from '../components/WelcomeText'
import NewsHome from '../components/NewsHome'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <h1>Hola Home</h1>
      <Slider />
      <WelcomeText />
      <NewsHome />
    </>
  )
}
