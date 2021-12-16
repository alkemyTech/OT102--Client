import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthRoutes from './authRoutes'

import Activities from '../pages/Activities'
import ActivityDetail from '../pages/ActivityDetail'
import ContactComponent from '../pages/contact/ContactComponent'
import Donate from '../pages/Donate'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import LoginForm from '../pages/auth/LoginForm'
import News from '../pages/News'
import NewsDetail from '../pages/NewsDetail'
import NotFound from '../pages/NotFound'
import Register from '../pages/auth/Register'
import Testimonials from '../pages/Testimonials'
import TestimonialsDetail from '../pages/TestimonialsDetail'
import Nosotros from '../pages/Nosotros'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="actividades">
        <Route index element={<Activities />} />
        <Route path=":id" element={<ActivityDetail />} />
      </Route>
      <Route path="novedades">
        <Route index element={<News />} />
        <Route path=":id" element={<NewsDetail />} />
      </Route>
      <Route path="testimonios">
        <Route index element={<Testimonials />} />
        <Route path=":id" element={<TestimonialsDetail />} />
      </Route>
      <Route path="contacto" element={<ContactComponent />} />
      <Route path="donar" element={<Donate />} />

      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="backoffice/*" element={<AuthRoutes />} />
    <Route path="*" element={<NotFound />} />
    {/* {AuthRoutes()} */}
  </Routes>
)

export default AppRoutes
