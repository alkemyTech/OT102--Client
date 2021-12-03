import httpService from './httpService'

const contactsEndpoint = '/contacts'

/**
 * Accepts an object to send it to contacts endpoint
 * @param {object} contact
 * { "name": {string}, "phone": {string}, "email": {string}, "message":{string} }
 * @return Promise {object} the created contact
 */
export function addContact(contact) {
  return httpService.post(contactsEndpoint, contact)
}

/**
 * Accepts an id number to delete one contact from contacts endpoint
 * @param {number} id
 * @return Promise {object} the deleted contact
 */
export function delContact(id) {
  return httpService.delete(`${contactsEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one contact from contacts endpoint
 * @param {number} id
 * @return Promise {object} the requested contact
 */
export function getContactById(id) {
  return httpService.get(`${contactsEndpoint}/${id}`)
}

/**
 * Retrieves all contacts from contacts endpoint
 *
 * @return Promise {object} all the requested contacts
 */
export function getAllContacts() {
  return httpService.get(contactsEndpoint)
}
