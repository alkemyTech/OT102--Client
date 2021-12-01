import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
  const formValues = []
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255, 'Too long').required('Required'),
    password: Yup.string().min(6, 'Password must have at least 6 caracters').max(255, 'Too long').required('Required'),
  })

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          formValues.push({
            email: values.email,
            password: values.password,
          })
          setSubmitting(false)
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            <p>{errors.email && touched.email && errors.email}</p>

            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
            <p>{errors.password && touched.password && errors.password}</p>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando' : 'Enviar'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
