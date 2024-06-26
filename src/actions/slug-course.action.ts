'use server'

import { courseDetailsAdapter } from '@/adapters/course-details.adapter'
import { db } from '@/config'
import { CourseDetails } from '@/models'
import { getCourseDetails } from '@/services'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const getCourseDetailByIdAction = async (
  playlistId: string
): Promise<Prisma.CoursesGetPayload<{}> | undefined> => {
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

export const updateCourseViewsAction = async (playlistId: string) => {
  try {
    await db.courses.update({
      where: { courseId: playlistId },
      data: { views: { increment: 1 } }
    })

    revalidatePath('/populares')
    revalidatePath('/explorar')
  } catch (error) {
    console.error(error)
  }
}

export const getFirstsCourseItemsByIdAction = async (
  playlistId: string
): Promise<{ courseFirtsItem?: CourseDetails[]; totalResults?: number } | undefined> => {
  try {
    const courses = await getCourseDetails(playlistId, { maxResults: '2' })
    if (!courses) return

    return { courseFirtsItem: courses.items.map(courseDetailsAdapter), totalResults: courses.pageInfo.totalResults }
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const getCourseItemsByIdAction = async (
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
