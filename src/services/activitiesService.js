import httpService from './httpService'

import { apiUrl } from '../config.json'

const activitiesEndpoint = `${apiUrl}/activities`

export function addActivity(data) {
  return httpService.post(activitiesEndpoint, data)
}

export function getActivityById(id) {
  return httpService.get(`${activitiesEndpoint}/${id}`)
}

export function getAllActivities() {
  return httpService.get(activitiesEndpoint)
}

// router.get('/', get)
// router.get('/:id', getActivity)
// router.post('/', [isAdmin, validateRequest(activitySchema)], post)
