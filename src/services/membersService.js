import httpService from './httpService'

const membersEndpoint = '/members'

/**
 * Accepts an object to send it to members endpoint
 * @async
 * @param {object} member
 * @param {string} member.name
 * @param {string} member.image
 * @return Promise {object} the created member
 */
export function addMember(member) {
  return httpService.post(membersEndpoint, member)
}

/**
 * Accepts an id to delete one member from members endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted member
 */
export function delMember(id) {
  return httpService.delete(`${membersEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one member from members endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested member
 */
export function getMemberById(id) {
  return httpService.get(`${membersEndpoint}/${id}`)
}

/**
 * Retrieves an array with all members from members endpoint
 * @async
 * @return Promise {object} all the requested members
 */
export function getAllMembers() {
  return httpService.get(membersEndpoint)
}

/**
 * Accepts an object to send it to members endpoint
 * @async
 * @param {object} id
 * @param {object} member
 * @param {string} member.name
 * @param {string} member.image
 * @return Promise {object} the created member
 */
export function updateMember(id, member) {
  return httpService.put(`${membersEndpoint}/${id}`, member)
}
