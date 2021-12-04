import httpService from './httpService'

const entriesEndpoint = '/news'

/**
 * Accepts an object to send it to entries endpoint
 * @async
 * @param {object} entry
 * @param {string} entry.name
 * @param {string} entry.content
 * @param {string} entry.image
 * @param {string} entry.type
 * @param {int} entry.categoryId
 * @return Promise {object} the created entrie
 */
export function addEntry(entry) {
  return httpService.post(entriesEndpoint, entry)
}

/**
 * Accepts an id to delete one entry from entries endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted entry
 */
export function delEntry(id) {
  return httpService.delete(`${entriesEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one entry from entries endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested entry
 */
export function getEntryById(id) {
  return httpService.get(`${entriesEndpoint}/${id}`)
}

/**
 * Retrieves an array with all entries from entries endpoint
 * @async
 * @return Promise {object} all the requested entries
 */
export function getAllEntries() {
  return httpService.get(entriesEndpoint)
}

/**
 * Accepts an object to send it to entries endpoint
 * @async
 * @param {int} id
 * @param {object} entry
 * @param {string} entry.name
 * @param {string} entry.content
 * @param {string} entry.image
 * @param {string} entry.type
 * @param {int} entry.categoryId
 * @return Promise {object} the created entry
 */
export function updateEntry(id, entry) {
  return httpService.put(`${entriesEndpoint}/${id}`, entry)
}
