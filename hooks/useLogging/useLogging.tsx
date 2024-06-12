import { sendDiscordMessage } from "hooks/useLogging/sendDiscordMessage"
import { useInfo } from "hooks/useLogging/useInfo"
import { useEffect } from "react"
import { isServer } from "utils/isServer"

const DISCORD_WEBHOOK_URL = ``

export function useLogging() {
  const { data: info } = useInfo()

  const sendLog = (log?: string) => {
    const {
      country,
      ip,
      location,
      longitude,
      latitude,
      typeEmoji,
      type,
      vendor,
      model,
      browser,
      os,
      isBot,
    } = info!

    const { host } = window.location

    return sendDiscordMessage(DISCORD_WEBHOOK_URL, {
      avatar_url: `https://flagcdn.com/w320/${country.toLowerCase()}.webp`,
      username: `${ip} - ${host}`,
      content: `${
        log ? `${log} ` : ""
      }📍 ${location}, (${latitude}, ${longitude}) / ${typeEmoji} ${type} ${vendor} ${model} - ${browser} on ${os} ${
        isBot ? "(🤖)" : ""
      }`,
    })
  }

  useEffect(() => {
    if (isServer() || !info) {
      return
    }

    sendLog()
  }, [info])
}
