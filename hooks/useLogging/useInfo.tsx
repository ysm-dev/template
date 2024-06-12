import { useQuery } from "@tanstack/react-query"
import { getGeo } from "hooks/useLogging/getGeo"
import { getInfo } from "hooks/useLogging/getInfo"
import { getUA } from "hooks/useLogging/useUA"

export const useInfo = () => {
  return useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const info = await getInfo()
      const { longitude, latitude } = info

      const geo = await getGeo({ longitude, latitude })

      const location = geo.data.city.name

      const ua = getUA()

      return {
        ...info,
        location,
        ...ua,
      }
    },
  })
}
