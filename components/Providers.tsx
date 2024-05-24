import { QueryProvider } from "components/QueryProvider"
import type { PropsWithChildren } from "react"

type Props = PropsWithChildren

export const Providers = ({ children }: Props) => {
  return <QueryProvider>{children}</QueryProvider>
}
