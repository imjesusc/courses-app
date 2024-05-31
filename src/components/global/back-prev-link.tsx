'use client'

import { useRouter } from 'next/navigation'
import { Icons } from './icons'

export const BackPrevLink = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="absolute left-3 top-3 text-xs text-muted-foreground">
      <Icons.arrowLeft size={18} />
    </button>
  )
}
