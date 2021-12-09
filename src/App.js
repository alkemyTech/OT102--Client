import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/header/Header'
import Home from './components/Home'
import News from './components/News'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
