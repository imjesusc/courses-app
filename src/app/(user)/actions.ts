'use server'

import { courseInfoAdapter } from '@/adapters'
import { db } from '@/config'
import { GetCoursesParams, courseInfo } from '@/models'
import { getPlaylistsInfo } from '@/services'
import { hasItems } from '@/utilities'
import { revalidatePath } from 'next/cache'

export const createCourse = async () => {
  try {
    await db.courses.create({
      data: {
        title: 'Curso de prueba',
        courseId: crypto.randomUUID(),
        views: 1,
        categories: {
          connect: [{ id: '124ab277-fec8-4215-9aba-5bdfcc136901' }]
        }
      }
    })

    revalidatePath('/')
  } catch (error) {
    console.log(error)
  }
}

export const getCourses = async (params: GetCoursesParams) => {
  const { q, categories } = params

  try {
    const courses = await db.courses.findMany({
      where: {
        AND: [
          q ? { title: { contains: q } } : {},
          hasItems(categories) ? { categories: { some: { slug: { in: categories } } } } : {}
        ]
      }
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
