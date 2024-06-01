import { CourseCardModel } from '@/models'
import { MyListCourseProgress, useMyListStore } from '@/store'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useMyListCourses() {
  const { myCourses, savedCourses } = useMyListStore((state) => state)
  const { setMyCourses, setSavedCourses } = useMyListStore((state) => state)
  const router = useRouter()

  // Reset course progress
  const handleResetCourseProgress = (playlistId: string) => {
    const index = myCourses.findIndex((course) => course.playlistId === playlistId)

    if (index === -1) return

    const updatedCourses = structuredClone(myCourses)
    updatedCourses[index] = {
      ...myCourses[index],
      completedCourseItems: []
    }
    setMyCourses(updatedCourses)
    toast.success('Progreso de curso reiniciado')
  }

  // Delete course
  const handleDeleteCourse = (playlistId: string) => {
    const index = myCourses.findIndex((course) => course.playlistId === playlistId)

    if (index === -1) return

    const updatedCourses = structuredClone(myCourses)
    updatedCourses.splice(index, 1)
    setMyCourses(updatedCourses)
    toast.success('Curso eliminado de la lista')
    router.push('/mi-lista')
  }

  // Complete course class
  const completedCourseClass = (playlistId: string, videoId: string, position: number) => {
    const index = myCourses.findIndex((course) => course.playlistId === playlistId)

    if (index === -1) return

    const currentVideoIndex = myCourses[index].completedCourseItems?.findIndex((item) => item?.videoId === videoId)

    if (currentVideoIndex !== undefined && currentVideoIndex > -1) return
    const updatedCourses = structuredClone(myCourses)

    updatedCourses[index] = {
      ...myCourses[index],
      completedCourseItems: [...(myCourses[index].completedCourseItems || []), { position, videoId }]
    }

    setMyCourses(updatedCourses)
    toast.success(`Clase ${position} completada`)
  }

  // Handle completing courses classes
  const handleCompleteCourseClass = (playlistId: string, videoId: string, position: number) => {
    const index = myCourses.findIndex((course) => course.playlistId === playlistId)

    if (index === -1) return

    const currentVideoIndex = myCourses[index].completedCourseItems?.findIndex((item) => item?.videoId === videoId)

    if (currentVideoIndex !== undefined && currentVideoIndex > -1) {
      // When the video is already completed, remove it
      const updatedCourses = structuredClone(myCourses)
      updatedCourses[index] = {
        ...myCourses[index],
        completedCourseItems: myCourses[index].completedCourseItems?.filter((item) => item?.videoId !== videoId)
      }
      setMyCourses(updatedCourses)
      return
    }

    const updatedCourses = structuredClone(myCourses)

    updatedCourses[index] = {
      ...myCourses[index],
      completedCourseItems: [...(myCourses[index].completedCourseItems || []), { position, videoId }]
    }

    setMyCourses(updatedCourses)
    toast.success(`Clase ${position} completada`)
  }

  // Handle starting courses
  const handleUpdateMyCourses = (data: MyListCourseProgress) => {
    const index = myCourses.findIndex((course) => course.playlistId === data.playlistId)

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

  // Handle saving courses
  const handleUpdateSavedCourses = (data: CourseCardModel) => {
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
  const checkCourseIsStarted = (playlistId: string) => myCourses.some((course) => course.playlistId === playlistId)
  const checkIfCourseItemIsCompleted = (playlistId: string, videoId: string) => {
    const index = myCourses.findIndex((course) => course.playlistId === playlistId)

    if (index > -1) {
      return myCourses[index].completedCourseItems?.some((item) => item.videoId === videoId)
    }
  }

  return {
    myCourses,
    savedCourses,
    handleDeleteCourse,
    checkCourseIsStarted,
    handleUpdateMyCourses,
    handleUpdateSavedCourses,
    handleCompleteCourseClass,
    checkCourseIsSaved,
    checkIfCourseItemIsCompleted,
    handleResetCourseProgress,
    completedCourseClass
  }
}
