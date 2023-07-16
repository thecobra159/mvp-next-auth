'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface IProvider {
  children: ReactNode
}

export function Provider({ children }: IProvider): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>
}
