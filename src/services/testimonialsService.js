import httpService from './httpService'

const testimonialsEndpoint = '/testimonials'

/**
 * Accepts an object to send it to testimonials endpoint
 * @param {object} testimonial { "name": {string}, "image": {string}, "content": {string} }
 * @return Promise {object} the created testimonial
 */
export function addTestimonial(testimonial) {
  return httpService.post(testimonialsEndpoint, testimonial)
}

/**
 * Accepts an id number to delete one testimonial from testimonials endpoint
 * @param {number} id
 * @return Promise {object} the deleted testimonial
 */
export function delTestimonial(id) {
  return httpService.delete(`${testimonialsEndpoint}/${id}`)
}

/**
 * Accepts an id number to retrieve one testimonial from testimonials endpoint
 * @param {number} id
 * @return Promise {object} the requested testimonial
 */
export function getTestimonialById(id) {
  return httpService.get(`${testimonialsEndpoint}/${id}`)
}

/**
 * Retrieves all testimonials from testimonials endpoint
 *
 * @return Promise {object} all the requested testimonials
 */
export function getAllTestimonials() {
  return httpService.get(testimonialsEndpoint)
}
