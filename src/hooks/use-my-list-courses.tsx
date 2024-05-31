import { CourseCardModel } from '@/models'
import { useMyListStore } from '@/store'

export function useMyListCourses() {
  const myCourses = useMyListStore((state) => state.myCourses)
  const setMyCourses = useMyListStore((state) => state.setMyCourses)

  const handleUpdateMyListCourse = (data: CourseCardModel) => {
    const index = myCourses.findIndex((course) => course.id === data.id)

    //  When the course exists, remove it
    if (index > -1) {
      const updatedCourses = [...myCourses]
      updatedCourses.splice(index, 1)
      setMyCourses(updatedCourses)
      return
    }

    //  When the course doesn't exist, add it
    const newCourses = [...myCourses, data]
    setMyCourses(newCourses)
  }

  const checkCourseInList = (id: string) => myCourses.some((course) => course.id === id)

  return { myCourses, handleUpdateMyListCourse, checkCourseInList }
}
