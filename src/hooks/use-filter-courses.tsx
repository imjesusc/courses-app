import { hasItems } from '@/utilities'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export function useFilterCourses() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  // Categories state
  const [categories, setCategories] = useState<string[]>(() => {
    const params = new URLSearchParams(searchParams)
    const categories = params.get('categories')
    return categories ? categories.split(',') : []
  })

  // Update categories state and categories params
  const handleUpdateCategory = useDebouncedCallback((category: string) => {
    const params = new URLSearchParams(searchParams)
    const prevTerm = params.get('q')
    const currentPage = params.get('page')

    params.delete('q')
    params.delete('categories')
    params.delete('page')

    prevTerm && params.set('q', prevTerm)

    // Check if category already exists
    if (!categories.includes(category)) {
      const newCategories = [...categories, category]
      params.set('categories', newCategories.join(','))
      setCategories(newCategories)

      // If page already exists, set the same page
      currentPage && params.set('page', currentPage)
      return replace(`${pathname}?${params.toString()}`)
    }

    // If category already exists, remove it
    const updatedCategories = categories.filter((c) => c !== category)
    hasItems(updatedCategories) && params.set('categories', updatedCategories.join(','))
    setCategories(updatedCategories || [])

    // If page already exists, set the same page
    currentPage && params.set('page', currentPage)

    return replace(`${pathname}?${params.toString()}`)
  }, 250)

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    const prevCategories = params.get('categories')
    const currentPage = params.get('page')

    params.delete('q')
    params.delete('categories')
    params.delete('page')

    // Check if category already exists and if category already exists set the previous categories
    if (term) params.set('q', term)
    prevCategories && params.set('categories', prevCategories)

    // If page already exists, set the same page
    currentPage && params.set('page', currentPage)

    return replace(`${pathname}?${params.toString()}`)
  }, 250)

  const handleReset = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('categories')
    replace(`${pathname}?${params.toString()}`)
    setCategories([])
  }

  return {
    categories,
    handleReset,
    handleUpdateCategory,
    searchParams,
    handleSearch
  }
}
