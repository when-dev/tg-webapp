import { apiEndpoint, mockApiResponse } from '../../shared/constants'
import { ApiResponse, BarId, EventId, TEvent } from '../../shared/types'

export type TFetchApiResponse = (barId?: BarId) => Promise<ApiResponse>
export const fetchApiResponse: TFetchApiResponse = async (barId = 1) => {
  return fetch(`${apiEndpoint}/${barId}/events`, {
    method: 'GET',
  }).then((res) => res.json())
}

export type TFetchEventDataById = (
  eventId?: EventId | string,
) => Promise<TEvent>
export const fetchEventDataById: TFetchEventDataById = async (eventId) => {
  return fetch(`${apiEndpoint}/event/${eventId}`, {
    method: 'GET',
  }).then((res) => res.json())
}
