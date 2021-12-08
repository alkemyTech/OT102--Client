import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Activities from './pages/Activities'
import ActivityDetail from './pages/ActivityDetail'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Donate from './pages/Donate'
import Home from './pages/Home'
import Layout from './pages/Layout'
import LoginForm from './pages/auth/LoginForm'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import NotFound from './pages/NotFound'
import PrivateRoute from './hoc/PrivateRoute'
import Register from './pages/auth/Register'
import Testimonials from './pages/Testimonials'
import TestimonialsDetail from './pages/TestimonialsDetail'
import UserProfile from './pages/UserProfile'
import Users from './pages/Users'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
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
        <Route path="contacto" element={<Contact />} />
        <Route path="donar" element={<Donate />} />

        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<Register />} />

        <Route path="backoffice" element={<PrivateRoute />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="news">
            <Route index element={<News />} />
            {/* <Route path=":id" element={<NewsDetail />} /> */}
          </Route>
          <Route path="news">
            <Route index element={<News />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
