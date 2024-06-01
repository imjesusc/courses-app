import { CourseCardModel } from '@/models'
import { useMyListStore } from '@/store'

export function useMyListCourses() {
  const { myCourses, savedCourses } = useMyListStore((state) => state)
  const { setMyCourses, setSavedCourses } = useMyListStore((state) => state)

  const handleUpdateMyListCourse = (data: CourseCardModel) => {
    const index = savedCourses.findIndex((course) => course.playlistId === data.playlistId)

    //  When the course exists, remove it
    if (index > -1) {
      const updatedCourses = [...savedCourses]
      updatedCourses.splice(index, 1)
      setSavedCourses(updatedCourses)
      return
    }

    //  When the course doesn't exist, add it
    const newCourses = [...savedCourses, data]
    setSavedCourses(newCourses)
  }

  const checkCourseIsSaved = (playlistId: string) => savedCourses.some((course) => course.playlistId === playlistId)

  return { myCourses, savedCourses, handleUpdateMyListCourse, checkCourseIsSaved }
}
