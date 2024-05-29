'use client'

import { Input } from '@/components/ui'
import { cn } from '@/utilities'
import { SearchIcon } from 'lucide-react'
import { useFilterCourses } from '../hooks'
export const SearchCourse = () => {
  const { searchParams, handleSearch } = useFilterCourses()

  return (
    <div className={cn('relative w-full')}>
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform text-secondary" size={16} />
      <Input
        type="search"
        defaultValue={searchParams.get('q')?.toString()}
        placeholder="Search courses"
        className="pl-8"
        onChange={(e) => handleSearch(e.target.value.toLocaleLowerCase())}
      />
    </div>
  )
}
