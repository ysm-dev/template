const token = `95966e131afdfa946efb6258e38f5b8ee6fc1f92`

type Params = {
  latitude: string
  longitude: string
}

export const getGeo = ({ latitude, longitude }: Params) =>
  fetch(
    `https://api.waqi.info/feed/geo:${latitude};${longitude}?token=${token}`,
  ).then<R>((r) => r.json())

interface R {
  status: string
  data: Data
}

interface Data {
  aqi: number
  idx: number
  attributions: Attribution[]
  city: City
  dominentpol: string
  iaqi: { [key: string]: Iaqi }
  time: Time
  forecast: Forecast
  debug: Debug
}

interface Attribution {
  url: string
  name: string
  logo?: string
}

interface City {
  geo: number[]
  name: string
  url: string
  location: string
}

interface Debug {
  sync: Date
}

interface Forecast {
  daily: Daily
}

interface Daily {
  o3: O3[]
  pm10: O3[]
  pm25: O3[]
}

interface O3 {
  avg: number
  day: Date
  max: number
  min: number
}

interface Iaqi {
  v: number
}

interface Time {
  s: Date
  tz: string
  v: number
  iso: Date
}
