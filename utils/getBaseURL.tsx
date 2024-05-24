import { HOST } from "constants/urls"
import { isLocal } from "utils/isLocal"
import { isProd } from "utils/isProd"

export const getBaseURL = () => {
  if (isProd()) {
    return `https://${HOST}`
  } else if (isLocal()) {
    return `http://localhost:9090`
  }
}
