export const getInfo = () =>
  fetch(`https://services.home-assistant.io/whoami/v1`).then<R>((r) => r.json())

export interface R {
  ip: string
  city: string
  continent: string
  country: string
  currency: string
  latitude: string
  longitude: string
  postal_code: string
  region_code: string
  region: string
  timezone: string
  iso_time: Date
  timestamp: number
}
