import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import News from './components/News'
import ContactComponent from './pages/contact/ContactComponent'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
    </Routes>
    <ChakraProvider>
      <ContactComponent />
    </ChakraProvider>
  </BrowserRouter>
)

export default App
