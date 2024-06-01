import { CourseCardModel } from '@/models'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface MyListCourseProgress extends CourseCardModel {
  totalCourseItems?: number
  completedCourseItems?: {
    position: number
    videoId: string
  }[]
}

interface myListStoreInterface {
  myCourses: MyListCourseProgress[]
  savedCourses: CourseCardModel[]
  setMyCourses: (data: MyListCourseProgress[]) => void
  setSavedCourses: (data: CourseCardModel[]) => void
}

export const useMyListStore = create<myListStoreInterface>()(
  persist(
    (set) => ({
      myCourses: [],
      savedCourses: [],

      setMyCourses: (data) => set({ myCourses: data }),
      setSavedCourses: (data) => set({ savedCourses: data })
    }),
    {
      name: '_my-courses-list-store_'
    }
  )
)
