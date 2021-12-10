import axios from 'axios'

const token = window.localStorage.getItem('x-access-token')

const httpService = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL_PRODUCTION,
  timeout: 1000,
  headers: { 'x-access-token': token },
})

httpService.interceptors.response.use(
  (response) =>
    // deberia responder con response.data  ??
    response,
  (error) => {
    const expectedError = error.response
    && error.response.status >= 400
    && error.response.status < 500

    if (!expectedError) {
      // eslint-disable-next-line no-console
      console.error('interceptor-error:', error.response.data)
      // return Promise.reject(new Error('Unexpected Error Ocurred'))
    }
    return Promise.reject(error.response.data)
  },
)

export default httpService
