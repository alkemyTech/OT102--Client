import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminRoute from '../hoc/AdminRoute'

import Categories from '../pages/Categories'
import ListContacts from '../pages/backoffice/ListContacts'
import News from '../pages/backoffice/news/ListNews'
import Users from '../pages/Users'

import EditHomeForm from '../components/forms/home/EditHomeForm'
import EditSlideForm from '../components/forms/home/EditSlideForm'
import EditUserForm from '../components/forms/EditUserForm'
import EditNewsForm from '../components/forms/EditNewsForm'
import EditActivityForm from '../components/forms/EditActivityForm'
import EditCategoryForm from '../components/forms/EditCategoryForm'
import EditTestimonialsForm from '../components/forms/EditTestimonialsForm'
import ListActivities from '../pages/backoffice/activities/ListActivities'
import EditHomePage from '../pages/backoffice/home/EditHomePage'
import ListTestimonials from '../pages/backoffice/ListTestimonials'

const AdminRoutes = () => (
  <Routes>
    <Route path="" element={<AdminRoute />}>
      <Route path="edit-home">
        <Route index element={<EditHomePage />} />
        <Route path=":id" element={<EditHomeForm />} />
        <Route path="slide/:id" element={<EditSlideForm />} />
      </Route>
      <Route path="home" element={<EditHomeForm />} />
      <Route path="users">
        <Route index element={<Users />} />
        {/* EditUserForm debera' aceptar props con los datos del user */}
        <Route path=":id" element={<EditUserForm />} />
      </Route>
      <Route path="news">
        <Route index element={<News />} />
        <Route path=":id" element={<EditNewsForm />} />
      </Route>
      <Route path="activities">
        <Route index element={<ListActivities />} />
        <Route path=":id" element={<EditActivityForm />} />
      </Route>
      <Route path="categories">
        <Route index element={<Categories />} />
        <Route path=":id" element={<EditCategoryForm />} />
      </Route>
      <Route path="contacts">
        <Route index element={<ListContacts />} />
      </Route>
      <Route path="testimonials">
        <Route index element={<ListTestimonials />} />
        <Route path=":id" element={<EditTestimonialsForm />} />
      </Route>
      <Route path="contacts">
        <Route index element={<ListContacts />} />
      </Route>
    </Route>
  </Routes>
)

export default AdminRoutes
