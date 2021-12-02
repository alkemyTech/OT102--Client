import axios from 'axios'
import { apiUrl } from '../config.json'

const token = window.localStorage.getItem('x-access-token')

const httpService = axios.create({
  baseURL: apiUrl,
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
      // console.error('An unexpected error ocurred', error)
    }
    // console.log('interceptor-error:', error.response.data)
    return Promise.reject(error.response.data)
  },
)

export default httpService
