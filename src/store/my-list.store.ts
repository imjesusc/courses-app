import { CourseCardModel } from '@/models'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface myListStoreInterface {
  myCourses: CourseCardModel[]
  savedCourses: CourseCardModel[]
  setMyCourses: (data: CourseCardModel[]) => void
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
