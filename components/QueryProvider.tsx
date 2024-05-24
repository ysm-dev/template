"use client"

import {
  QueryClient,
  type QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { type ComponentProps, useState } from "react"
import { toast } from "sonner"

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      onError: (e: any) => {
        const msg = e.shortMessage || e.details || e.name
        toast.error(msg)
      },
    },
  },
}

type Props = {} & Omit<ComponentProps<typeof QueryClientProvider>, "client">

export const QueryProvider = ({ children, ...props }: Props) => {
  const [client] = useState(() => new QueryClient(config))

  return (
    <QueryClientProvider {...props} client={client}>
      {children}
      {/* {!isProd() && <ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>
  )
}
