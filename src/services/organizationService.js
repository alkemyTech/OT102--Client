import httpService from './httpService'

const organizationsEndpoint = '/organizations'

/**
 * Accepts an object to send it to organizations endpoint
 * @param {object} organization
 * { "name": {string}, "facebook": {string}, "linkedin": {string}, "instagram": {string} }
 * @return Promise {object} the created organization
 */
export function addOrganization(organization) {
  return httpService.post(organizationsEndpoint, organization)
}

/**
 * Accepts an id number to delete one organization from organizations endpoint
 * @param {number} id
 * @return Promise {object} the deleted organization
 */
export function delOrganization(id) {
  return httpService.delete(`${organizationsEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one organization from organizations endpoint
 * @param {number} id
 * @return Promise {object} the requested organization
 */
export function getOrganizationById(id) {
  return httpService.get(`${organizationsEndpoint}/${id}`)
}

/**
 * Retrieves all organizations from organizations endpoint
 *
 * @return Promise {object} all the requested organizations
 */
export function getAllOrganizations() {
  return httpService.get(organizationsEndpoint)
}
