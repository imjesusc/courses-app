'use client'

import { cn } from '@/utilities'
import { Prisma } from '@prisma/client'
import { useSelectCourse } from '../../../hooks'
import { ListCourseItem } from './list-course-item'

export const AsideListCourseItems = ({ courseDetail }: { courseDetail: Prisma.CoursesGetPayload<{}> }) => {
  const { currentCourseItems, courseInfo, updateCurrentCourse, getMoreCurrentCourseItems } = useSelectCourse()

  return (
    <aside className="flex w-[300px] flex-col  gap-2">
      <header className="rounded-md border p-2">
        <h1 className="text-lg font-semibold">{courseDetail?.title}</h1>
        <p className="text-sm text-muted-foreground">
          {courseInfo.currentItem}/{courseInfo.totalResults}
        </p>
      </header>

      <section className="flex h-[calc(100vh-200px)] flex-col gap-2 overflow-x-hidden overflow-y-scroll pr-2">
        {currentCourseItems?.map((item) => (
          <ListCourseItem
            className={cn(courseInfo.currentItem === item.position ? 'bg-secondary/50' : '')}
            key={item.videoId}
            onClick={() => updateCurrentCourse(item.videoId)}
            author={item.author}
            title={item.title}
            images={item.images}
          />
        ))}

        <footer>
          <button onClick={getMoreCurrentCourseItems} className="text-blue-500 ">
            Cargar más
          </button>
        </footer>
      </section>
    </aside>
  )
}
