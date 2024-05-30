'use client'

import { getCourseItems } from '@/app/(user)/explorar/[id]/actions'
import { CourseDetails, SelectCourseContextInterface, SelectCourseProviderProps } from '@/models'
import { createContext, useCallback, useState } from 'react'

// Provide a default value for the context
const defaultContextValue: SelectCourseContextInterface = {
  currentCourseItem: {} as CourseDetails,
  currentCourseItems: [],
  updateCurrentCourse: () => {},
  getMoreCurrentCourseItems: () => {},
  courseInfo: {},
  goToNextCourse: () => {}
}

// Create the context with the default value
export const SelectCourseContext = createContext<SelectCourseContextInterface>(defaultContextValue)

export function SelectCourseProvider({
  children,
  courseDetail,
  initialCourseItems,
  firstCourse
}: SelectCourseProviderProps) {
  // Course lists states
  const [courseInfo, setCourseInfo] = useState(courseDetail)
  const [currentCourseItem, setCurrentCourseItem] = useState(firstCourse)
  const [currentCourseItems, setCurrentCourseItems] = useState(initialCourseItems || [])

  // Update current course
  const updateCurrentCourse = (videoId: string) => {
    const findedCourse = currentCourseItems?.find((course) => course.videoId === videoId)
    if (!findedCourse) return

    // Update current course with the found course
    setCurrentCourseItem(findedCourse)
  }

  // Get more current course items
  const getMoreCurrentCourseItems = useCallback(async () => {
    if (!courseInfo?.playlistId || !courseInfo?.nextToken || !courseInfo?.totalResults) return
    if (currentCourseItems?.length >= courseInfo?.totalResults || 0) return

    const newItems = await getCourseItems(courseInfo.playlistId, {
      pageToken: courseInfo.nextToken,
      maxResults: '10'
    })

    // Update current course items
    setCurrentCourseItems((prev) => [...prev, ...(newItems?.courseItems || [])])
    setCourseInfo((prev) => ({ ...prev, nextToken: newItems?.courseInfo?.nextToken }))
  }, [courseInfo, currentCourseItems.length])

  // Go to next course when current course ends
  const goToNextCourse = (currentCourseId: string) => {
    if (!currentCourseItems) return
    const nextCourse = currentCourseItems.findIndex((course) => course.videoId === currentCourseId)
    if (nextCourse === -1) return

    if (nextCourse < currentCourseItems.length - 1) {
      setCurrentCourseItem(currentCourseItems[nextCourse + 1])
    }
  }

  return (
    <SelectCourseContext.Provider
      value={{
        courseInfo: {
          totalResults: courseInfo?.totalResults,
          currentItem: currentCourseItem.position
        },
        currentCourseItem,
        currentCourseItems,
        updateCurrentCourse,
        getMoreCurrentCourseItems,
        goToNextCourse
      }}
    >
      {children}
    </SelectCourseContext.Provider>
  )
}
