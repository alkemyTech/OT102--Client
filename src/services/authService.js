import httpService from './httpService'

const authEndpoint = '/auth'

/**
 * Retrieve one user data
 * @async
 * @return Promise {object} the requested auth
 */
export function getUserData() {
  return httpService.get(`${authEndpoint}/me`)
}

/**
 * Accepts an object to send it to login endpoint
 * @async
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.password
 * @returns Promise {object} represents the logged in user
 */
export function userLogin(user) {
  return httpService.post(authEndpoint, user)
}

/**
 * Accepts an object to send it to register endpoint
 * @async
 * @param {object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.email
 * @param {string} user.password
 * @return Promise {object} the created user
 */
export function registerUser(user) {
  return httpService.post(`${authEndpoint}/register`, user)
}
