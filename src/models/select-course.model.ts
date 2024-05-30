import { ReactNode } from 'react'
import { CourseDetails } from './course-details.model'

// Define the context interface
export interface SelectCourseContextInterface {
  currentCourseItem: CourseDetails
  updateCurrentCourse: (videoId: string) => void
  currentCourseItems?: CourseDetails[]
  getMoreCurrentCourseItems: () => void
  courseInfo: { totalResults?: number; currentItem?: number }
  goToNextCourse: (currentCourseId: string) => void
}

export interface SelectCourseProviderProps {
  children: ReactNode
  firstCourse: CourseDetails
  courseDetail: { nextToken?: string; totalResults?: number; playlistId?: string; resultsPerPage?: number }
  initialCourseItems: CourseDetails[]
}
