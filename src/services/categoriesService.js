import httpService from './httpService'

const categoriesEndpoint = '/categories'

/**
 * Accepts an object to send it to categories endpoint
 * @async
 * @param {object} category
 * @param {string} category.name
 * @param {string} category.description
 * @return Promise {object} the created category
 */
export function addCategory(category) {
  return httpService.post(categoriesEndpoint, category)
}

/**
 * Accepts an id to delete one category from categories endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted category
 */
export function delCategory(id) {
  return httpService.delete(`${categoriesEndpoint}/${id}`)
}

/**
 * Accepts an id  to retrieve one category from categories endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested category
 */
export function getCategoryById(id) {
  return httpService.get(`${categoriesEndpoint}/${id}`)
}

/**
 * Retrieves an array with all the categories from categories endpoint
 * @async
 * @return Promise {object} all the requested categories
 */
export function getAllCategories() {
  return httpService.get(categoriesEndpoint)
}

/**
 * Accepts an object to send it to categories endpoint
 * @async
 * @param {int} id
 * @param {object} category
 * @param {string} category.name
 * @param {string} category.description
 * @return Promise {object} the created category
 */
export function updateCategory(id, category) {
  return httpService.put(`${categoriesEndpoint}/${id}`, category)
}
