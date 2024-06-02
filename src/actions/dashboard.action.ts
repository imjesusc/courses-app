'use server'

import { db } from '@/config'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const createCourseAction = async ({
  title,
  courseId,
  categories
}: {
  title: string
  courseId: string
  categories: { slug: string }[]
}): Promise<{ message: string; status: number } | undefined> => {
  try {
    const isCourseFound = await db.courses.findUnique({
      where: { courseId }
    })

    if (isCourseFound) {
      throw new Error('El curso ya existe.')
    }

    const newCourse = await db.courses.create({
      data: {
        title,
        courseId,
        categories: {
          connect: categories
        }
      }
    })

    revalidatePath('/explore')
    revalidatePath('/populares')
    if (newCourse) return { message: 'Curso creado con éxito.', status: 200 }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { message: error.message, status: 400 }
    }

    if (error instanceof Error) {
      return { message: error.message, status: 500 }
    }
  }
}
