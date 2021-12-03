import httpService from './httpService'

const activitiesEndpoint = '/activities'

/**
 * Accepts an object to send it to activities endpoint
 * @param {object} activity { "name": {string}, "image":{string}, "content":{string} }
 * @return Promise {object} the created activity
 */
export function addActivity(activity) {
  return httpService.post(activitiesEndpoint, activity)
}

/**
 * Accepts an id number to delete one activity from activities endpoint
 * @param {number} id
 * @return Promise {object} the deleted activity
 */
export function delActivity(id) {
  return httpService.delete(`${activitiesEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one activity from activities endpoint
 * @param {number} id
 * @return Promise {object} the requested activity
 */
export function getActivityById(id) {
  return httpService.get(`${activitiesEndpoint}/${id}`)
}

/**
 * Retrieves all activities from activities endpoint
 *
 * @return Promise {object} all the requested activities
 */
export function getAllActivities() {
  return httpService.get(activitiesEndpoint)
}
