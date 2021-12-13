import React from 'react'
import { Route } from 'react-router-dom'

import AdminRoute from '../hoc/AdminRoute'

import Activities from '../pages/Activities'
import Categories from '../pages/Categories'
import ListContacts from '../pages/ListContacts'
import News from '../pages/News'
import Testimonials from '../pages/Testimonials'
import Users from '../pages/Users'

import EditHomeForm from '../components/forms/EditHomeForm'
import EditOrgForm from '../components/forms/EditOrgForm'
import EditUserForm from '../components/forms/EditUserForm'
import EditNewsForm from '../components/forms/EditNewsForm'
import EditActivityForm from '../components/forms/EditActivityForm'
import EditCategoryForm from '../components/forms/EditCategoryForm'
import EditTestimonialsForm from '../components/forms/EditTestimonialsForm'

const AdminRoutes = () => (
  <>
    <Route path="" element={<AdminRoute />}>
      <Route path="edit-organization" element={<EditOrgForm />} />
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
        <Route index element={<Activities />} />
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
        <Route index element={<Testimonials />} />
        <Route path=":id" element={<EditTestimonialsForm />} />
      </Route>
      <Route path="contacts">
        <Route index element={<ListContacts />} />
      </Route>
    </Route>
  </>
)

export default AdminRoutes
