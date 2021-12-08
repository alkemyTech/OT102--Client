import React from 'react'
import { Route } from 'react-router-dom'

import PrivateRoute from '../hoc/PrivateRoute'

import AdminRoutes from './adminRoutes'

import Dashboard from '../pages/Dashboard'

import EditUserForm from '../components/forms/EditUserForm'

/* El dashboard es mi perfil de usuario.
 * En el caso de ser admin debera' tener las opciones para ir a editar news, activities, etc
 * EditUserForm debera' aceptar props con los datos del user
 */
const AuthRoutes = () => (
  <Route path="backoffice" element={<PrivateRoute />}>
    <Route index path="" element={<Dashboard />} />
    <Route path="me" element={<EditUserForm />} />
    {AdminRoutes()}
  </Route>
)

export default AuthRoutes
