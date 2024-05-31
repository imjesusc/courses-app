import { CourseCardModel } from '@/models'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface myListStoreInterface {
  myCourses: CourseCardModel[]
  setMyCourses: (data: CourseCardModel[]) => void
}

export const useMyListStore = create<myListStoreInterface>()(
  persist(
    (set) => ({
      myCourses: [],
      setMyCourses: (data) => set({ myCourses: data })
    }),
    {
      name: '_my-courses-list-store_'
    }
  )
)
