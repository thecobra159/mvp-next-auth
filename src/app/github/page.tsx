'use client'

import { Button } from '@/components/Button'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

export default function Github() {
  const { data: session } = useSession({ required: true })

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
      <div
        className="
        flex
        justify-center
        items-center
        w-full
        h-full
        bg-slate-800
        "
      >
        {session && (
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-white text-2xl font-semibold">
              {session.user?.name}
            </p>

            <div
              className="
                w-[150px]
                h-[150px]
                rounded-full
                relative
                overflow-hidden"
            >
              <Image src={`${session.user?.image}`} alt="user image" fill />
            </div>

            <Button onClick={() => signOut()}>Sign Out</Button>
          </div>
        )}
      </div>
    </main>
  )
}
