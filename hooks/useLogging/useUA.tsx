import { isbot } from "isbot"
import { UAParser } from "ua-parser-js"

const isServer = () => typeof window === "undefined"

export function useUA() {
  return getUA()
}

export const getUA = () => {
  const parser = new UAParser(!isServer() ? navigator.userAgent : undefined)
  const result = parser.getResult()

  const type = result.device.type ?? "desktop"
  const isBot = !isServer() && isbot(navigator.userAgent)

  return {
    browser: result.browser.name,
    os: result.os.name,
    type,
    typeEmoji:
      type === "desktop"
        ? "🖥️"
        : ["tablet", "mobile"].includes(type)
          ? "📱"
          : "❓",

    vendor: result.device.vendor,
    model: result.device.model,
    isBot,
  }
}
