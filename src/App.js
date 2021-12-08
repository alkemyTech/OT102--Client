import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
  </BrowserRouter>
)

export default App
