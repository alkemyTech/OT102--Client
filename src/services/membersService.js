import httpService from './httpService'

const membersEndpoint = '/members'

/**
 * Accepts an object to send it to members endpoint
 * @param {object} member { "name": {string}, "image": {string} }
 * @return Promise {object} the created member
 */
export function addMember(member) {
  return httpService.post(membersEndpoint, member)
}

/**
 * Accepts an id number to delete one member from members endpoint
 * @param {number} id
 * @return Promise {object} the deleted member
 */
export function delMember(id) {
  return httpService.delete(`${membersEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one member from members endpoint
 * @param {number} id
 * @return Promise {object} the requested member
 */
export function getMemberById(id) {
  return httpService.get(`${membersEndpoint}/${id}`)
}

/**
 * Retrieves all members from members endpoint
 *
 * @return Promise {object} all the requested members
 */
export function getAllMembers() {
  return httpService.get(membersEndpoint)
}
