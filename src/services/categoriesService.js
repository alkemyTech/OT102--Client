import httpService from './httpService'

const categoriesEndpoint = '/categories'

/**
 * Accepts an object to send it to categories endpoint
 * @param {object} category { "name": {string}, "description":{string} }
 * @return Promise {object} the created category
 */
export function addCategory(category) {
  return httpService.post(categoriesEndpoint, category)
}

/**
 * Accepts an id number to delete one category from categories endpoint
 * @param {number} id
 * @return Promise {object} the deleted category
 */
export function delCategory(id) {
  return httpService.delete(`${categoriesEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one category from categories endpoint
 * @param {number} id
 * @return Promise {object} the requested category
 */
export function getCategoryById(id) {
  return httpService.get(`${categoriesEndpoint}/${id}`)
}

/**
 * Retrieves all categories from categories endpoint
 *
 * @return Promise {object} all the requested categories
 */
export function getAllCategories() {
  return httpService.get(categoriesEndpoint)
}
