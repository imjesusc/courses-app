'use client'

import { cn } from '@/utilities'
import { useRouter } from 'next/navigation'
import { Icons } from './icons'

export const BackPrevLink = ({ className, text }: { className?: string; text?: string }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className={cn('absolute left-3 top-[3.5rem] flex items-center gap-2 text-xs text-muted-foreground', className)}
    >
      <Icons.arrowLeft size={18} /> {text}
    </button>
  )
}
