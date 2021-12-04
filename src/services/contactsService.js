import httpService from './httpService'

const contactsEndpoint = '/contacts'

/**
 * Accepts an object to send it to contacts endpoint
 * @async
 * @param {object} contact
 * @param {string} contact.name
 * @param {string} contact.phone
 * @param {string} contact.email
 * @param {string} contact.message
 * @return Promise {object} the created contact
 */
export function addContact(contact) {
  return httpService.post(contactsEndpoint, contact)
}

/**
 * Accepts an id to delete one contact from contacts endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted contact
 */
export function delContact(id) {
  return httpService.delete(`${contactsEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one contact from contacts endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested contact
 */
export function getContactById(id) {
  return httpService.get(`${contactsEndpoint}/${id}`)
}

/**
 * Retrieves an array with all contacts from contacts endpoint
 * @async
 * @return Promise {object} all the requested contacts
 */
export function getAllContacts() {
  return httpService.get(contactsEndpoint)
}

/**
 * Accepts an object to send it to contacts endpoint
 * @async
 * @param {int} id
 * @param {object} contact
 * @param {string} contact.name
 * @param {string} contact.phone
 * @param {string} contact.email
 * @param {string} contact.message
 * @return Promise {object} the created contact
 */
export function updateContact(id, contact) {
  return httpService.put(`${contactsEndpoint}/${id}`, contact)
}
