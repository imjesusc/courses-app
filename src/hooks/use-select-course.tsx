'use client'

import { SelectCourseContext } from '@/contexts'
import { useContext } from 'react'

export function useSelectCourse() {
  const context = useContext(SelectCourseContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
