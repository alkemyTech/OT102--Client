import httpService from './httpService'

const slidesEndpoint = '/slides'

/**
 * Accepts an object to send it to slides endpoint
 * @async
 * @param {object} slide
 * @param {string} slide.imageUrl
 * @param {string} slide.text
 * @param {int} slide.order
 * @returns Promise {object} represents the created slide
 */
export function addslide(slide) {
  return httpService.post(slidesEndpoint, slide)
}

/**
 * Accepts an id to delete one slide from slides endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted slide
 */
export function delslide(id) {
  return httpService.delete(`${slidesEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one slide from slides endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested slide
 */
export function getslideById(id) {
  return httpService.get(`${slidesEndpoint}/${id}`)
}

/**
 * Retrieves an array with all slides from slides endpoint
 * @async
 * @return Promise {object} all the requested slides
 */
export function getAllslides() {
  return httpService.get(slidesEndpoint)
}

/**
 * Accepts an object to send it to slides endpoint
 * @async
 * @param {object} id
 * @param {object} slide
 * @param {string} slide.imageUrl
 * @param {string} slide.text
 * @param {int} slide.order
 * @return Promise {object} the created slide
 */
export function updateSlide(id, slide) {
  return httpService.put(`${slidesEndpoint}/${id}`, slide)
}
