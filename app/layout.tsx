import "app/globals.css"

import { cn } from "@/lib/utils"
import { Providers } from "components/Providers"
import { HOST } from "constants/urls"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import type { ReactNode } from "react"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

type Props = {
  children: ReactNode
}

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Template"
  const description = "A Next.js template"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${HOST}`,
      siteName: title,
    },
  }
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn("dark", geistSans.variable, geistMono.variable)}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
