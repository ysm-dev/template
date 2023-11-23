import 'app/globals.css'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
