import httpService from './httpService'

const testimonialsEndpoint = '/testimonials'

/**
 * Accepts an object to send it to testimonials endpoint
 * @async
 * @param {object} testimonial
 * @param {string} testimonial.name
 * @param {string} testimonial.image
 * @param {string} testimonial.content
 * @return Promise {object} the created testimonial
 */
export function addTestimonial(testimonial) {
  return httpService.post(testimonialsEndpoint, testimonial)
}

/**
 * Accepts an id to delete one testimonial from testimonials endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted testimonial
 */
export function delTestimonial(id) {
  return httpService.delete(`${testimonialsEndpoint}/${id}`)
}

/**
 * Accepts an id to retrieve one testimonial from testimonials endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested testimonial
 */
export function getTestimonialById(id) {
  return httpService.get(`${testimonialsEndpoint}/${id}`)
}

/**
 * Retrieves an array with all testimonials from testimonials endpoint
 * @async
 * @return Promise {object} all the requested testimonials
 */
export function getAllTestimonials() {
  return httpService.get(testimonialsEndpoint)
}

/**
 * Accepts an object to send it to testimonials endpoint
 * @async
 * @param {int} id
 * @param {object} testimonial
 * @param {string} testimonial.name
 * @param {string} testimonial.image
 * @param {string} testimonial.content
 * @return Promise {object} the created testimonial
 */
export function updateTestimonial(id, testimonial) {
  return httpService.put(`${testimonialsEndpoint}/${id}`, testimonial)
}
