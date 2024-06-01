'use client'

import { Button } from '@/components/ui'
import { useMyListCourses } from '@/hooks'
import { CourseCardModel } from '@/models'

export const CourseButtonActions = ({ courseItem }: { courseItem: CourseCardModel }) => {
  const { handleUpdateMyListCourse, checkCourseIsSaved } = useMyListCourses()

  return (
    <footer className="flex gap-4">
      <Button variant="outline">Iniciar Curso</Button>

      <Button
        variant={checkCourseIsSaved(courseItem?.playlistId) ? 'secondary' : 'outline'}
        onClick={() => handleUpdateMyListCourse(courseItem)}
        className="rounded-full"
      >
        {checkCourseIsSaved(courseItem?.playlistId) ? 'Quitar de mi lista' : 'Agregar a mi lista'}
      </Button>
    </footer>
  )
}
