import httpService from './httpService'

const organizationsEndpoint = '/organizations'

/**
 * Accepts an object to send it to organizations endpoint
 * @async
 * @param {object} organization
 * @param {string} organization.name
 * @param {string} organization.facebook
 * @param {string} organization.linkedin
 * @param {string} organization.instagram
 * @return Promise {object} the created organization
 */
export function addOrganization(organization) {
  return httpService.post(organizationsEndpoint, organization)
}

/**
 * Accepts an id to delete one organization from organizations endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted organization
 */
export function delOrganization(id) {
  return httpService.delete(`${organizationsEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one organization from organizations endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested organization
 */
export function getOrganizationById(id) {
  return httpService.get(`${organizationsEndpoint}/${id}`)
}

/**
 * Retrieves an array with all organizations from organizations endpoint
 * @async
 * @return Promise {object} all the requested organizations
 */
export function getAllOrganizations() {
  return httpService.get(organizationsEndpoint)
}

/**
 * Accepts an object to send it to organizations endpoint
 * @async
 * @param {object} id
 * @param {object} organization
 * @param {string} organization.name
 * @param {string} organization.facebook
 * @param {string} organization.linkedin
 * @param {string} organization.instagram
 * @return Promise {object} the created organization
 */
export function updateOrganization(id, organization) {
  return httpService.put(`${organizationsEndpoint}/${id}`, organization)
}
