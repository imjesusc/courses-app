'use server'

import { courseInfoAdapter } from '@/adapters'
import { db } from '@/config'
import { courseInfo } from '@/models'
import { getPlaylistsInfo } from '@/services'

export const getPopularCoursesAction = async () => {
  try {
    const courses = await db.courses.findMany({
      orderBy: {
        views: 'desc'
      },
      take: 10
    })

    const courseIds = courses.map((course) => course.courseId)
    const items = await getPlaylistsInfo(courseIds)

    const updatedCourses = courses.map((course) => {
      const itemCourse = items?.find((item) => item.id === course.courseId) as courseInfo

      if (itemCourse) {
        itemCourse.snippet.title = course?.title
        itemCourse.views = course?.views
      }

      return courseInfoAdapter(itemCourse)
    })

    return updatedCourses
  } catch (error) {
    console.log(error)
  }
}
