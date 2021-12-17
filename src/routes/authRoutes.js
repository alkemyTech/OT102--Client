import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivateRoute from '../hoc/PrivateRoute'

import AdminRoutes from './adminRoutes'

import Dashboard from '../pages/Dashboard'

import EditUserForm from '../components/forms/EditUserForm'


/* El dentro del dashboard va mi perfil de usuario.
 * En el caso de ser admin debera' tener las opciones para ir a editar news, activities, etc
 * EditUserForm debera' aceptar props con los datos del user
 */
const AuthRoutes = () => (
  <Routes>
    <Route path="" element={<PrivateRoute />}>
      <Route path="" element={<Dashboard />}>
        <Route path="me" element={<EditUserForm />} />
        <Route path="*" element={<AdminRoutes />} />
        {/* {AdminRoutes()} */}
      </Route>
    </Route>
  </Routes>
)

export default AuthRoutes
