import httpService from './httpService'

const usersEndpoint = '/users'
const rolesEndpoint = '/users/roles'

/**
 * Accepts an object to send it to users endpoint
 * @async
 * @param {object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.email
 * @param {string} user.password
 * @param {string} user.image
 * @param {int} user.roleId
 * @returns Promise {object} represents the created user
 */
export function addUser(user) {
  return httpService.post(usersEndpoint, user)
}

/**
 * Accepts an id to delete one user from users endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted user
 */
export function delUser(id) {
  return httpService.delete(`${usersEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one user from users endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested user
 */
export function getUserById(id) {
  return httpService.get(`${usersEndpoint}/${id}`)
}

/**
 * Retrieves an array with all users from users endpoint
 * @async
 * @return Promise {object} all the requested users
 */
export function getAllUsers() {
  return httpService.get(usersEndpoint)
}

/**
 * Retrieves an array with all roles from users endpoint
 * @async
 * @return Promise {object} all the requested users
 */
export function getAllRoles() {
  return httpService.get(rolesEndpoint)
}

/**
 * Accepts an object to send it to users endpoint
 * @async
 * @param {object} id
 * @param {object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.email
 * @param {string} user.password
 * @param {string} user.image
 * @param {int} user.roleId
 * @return Promise {object} the created user
 */
export function updateuser(id, user) {
  return httpService.put(`${usersEndpoint}/${id}`, user)
}
