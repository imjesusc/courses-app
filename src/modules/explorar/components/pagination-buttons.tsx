'use client'

import { Icons } from '@/components/global'
import { Button } from '@/components/ui'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export const PaginationButtons = ({ totalItems, itemsPerPage }: { totalItems: number; itemsPerPage: number }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  const currentPage = parseInt(params.get('page') || '1', 10)
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  params.delete('page')

  const goPrevious = useDebouncedCallback(() => {
    const prevPage = Math.max(currentPage - 1, 1)
    const prevUrl = `?${params.toString()}&page=${prevPage}`
    replace(prevUrl)
  }, 250)

  const goNext = useDebouncedCallback(() => {
    const nextPage = Math.min(currentPage + 1, totalPages)
    const nextUrl = `?${params.toString()}&page=${nextPage}`
    replace(nextUrl)
  }, 250)

  return (
    <div className="flex gap-1">
      <Button onClick={goPrevious} disabled={currentPage === 1} variant={'secondary'} size={'icon'}>
        <Icons.arrowLeft size={18} />
      </Button>
      <Button onClick={goNext} disabled={currentPage === totalPages} variant={'secondary'} size={'icon'}>
        <Icons.arrowRight size={18} />
      </Button>
    </div>
  )
}
