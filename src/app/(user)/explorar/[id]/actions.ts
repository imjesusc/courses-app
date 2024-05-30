'use server'

import { courseDetailsAdapter } from '@/adapters/course-details.adapter'
import { db } from '@/config'
import { CourseDetails } from '@/models'
import { getCourseDetails } from '@/services'
import { Prisma } from '@prisma/client'

export const getCourseDetail = async (playlistId: string): Promise<Prisma.CoursesGetPayload<{}> | undefined> => {
  try {
    const course = await db.courses.findUnique({
      where: { courseId: playlistId }
    })

    if (!course) return

    return course
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const getCourseItems = async (
  playlistId: string,
  params?: { maxResults?: string; pageToken?: string }
): Promise<{
  courseItems?: CourseDetails[]
  courseInfo?: { nextToken?: string; playlistId?: string; totalResults?: number; resultsPerPage?: number }
}> => {
  try {
    const course = await getCourseDetails(playlistId, params)
    const courseItems = course?.items?.map(courseDetailsAdapter)

    return {
      courseItems,
      courseInfo: {
        playlistId: playlistId,
        nextToken: course?.nextPageToken,
        ...course?.pageInfo
      }
    }
  } catch (error) {
    console.error(error)
    // Add a return statement here to handle the error case
    return {
      courseItems: undefined,
      courseInfo: undefined
    }
  }
}
