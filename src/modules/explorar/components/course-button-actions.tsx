'use client'

import { Button } from '@/components/ui'
import { useMyListCourses } from '@/hooks'
import { CourseCardModel } from '@/models'
import { useRouter } from 'next/navigation'

export const CourseButtonActions = ({
  totalCourseItems,
  courseItem
}: {
  totalCourseItems: number
  courseItem: CourseCardModel
}) => {
  const router = useRouter()
  const { handleUpdateSavedCourses, checkCourseIsSaved, checkCourseIsStarted, handleUpdateMyCourses } =
    useMyListCourses()

  return (
    <footer className="flex gap-4">
      {checkCourseIsStarted(courseItem?.playlistId) ? (
        <Button variant="outline" onClick={() => router.push(`/mis-cursos/${courseItem.playlistId}`)}>
          Reanudar
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            handleUpdateMyCourses({
              ...courseItem,
              totalCourseItems
            })
            router.push(`/mis-cursos/${courseItem.playlistId}`)
          }}
        >
          Empezar
        </Button>
      )}

      <Button
        variant={checkCourseIsSaved(courseItem?.playlistId) ? 'secondary' : 'outline'}
        onClick={() => handleUpdateSavedCourses(courseItem)}
        className="rounded-full"
      >
        {checkCourseIsSaved(courseItem?.playlistId) ? 'Quitar de mi lista' : 'Guardar en mi lista'}
      </Button>
    </footer>
  )
}
