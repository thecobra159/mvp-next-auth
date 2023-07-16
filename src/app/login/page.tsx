'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import { ProviderList } from '@/Utils/Enums'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()

  function handlelogin(provider: ProviderList): void {
    signIn(provider)
  }

  return (
    <main
      className="
        flex
        flex-col
        min-h-screen
        items-center
        gap-3
        p-24
      "
    >
      <h1>SING IN</h1>

      <div className="flex w-full h-fit justify-center gap-3">
        <Button onClick={() => handlelogin(ProviderList.Google)}>
          Login - Google
        </Button>

        <Button onClick={() => handlelogin(ProviderList.Github)}>
          Login - Github
        </Button>
      </div>

      <div className="flex w-full h-full bg-slate-800">
        {session && (
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-2xl font-semibold">
              {session.user?.name}
            </p>

            <div className="w-[150px] h-[150px] rounded-full relative">
              <Image src={`${session.user?.image}`} alt="user image" fill />
            </div>

            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        )}
      </div>
    </main>
  )
}
