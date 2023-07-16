'use client'

import { ButtonHTMLAttributes } from 'react'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: IButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="
      text-white
      bg-blue-700
      hover:bg-blue-900
      p-4
      rounded-sm"
      {...props}
    >
      {children}
    </button>
  )
}
