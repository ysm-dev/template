import { HOST } from "constants/urls"
import { isServer } from "utils/isServer"

export const isProd = () => {
  if (isServer()) {
    return process.env.NODE_ENV === "production"
  }

  return globalThis.location.host === HOST
}
