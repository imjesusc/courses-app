'use client'

import { CourseCard } from '@/components/global'
import { useMyListStore } from '@/store'

export const MyCoursesSet = () => {
  const myCourses = useMyListStore((state) => state.myCourses)
  return (
    <main className="grid gap-y-6 tablet:grid-cols-3 laptop:grid-cols-4">
      {myCourses?.map((course, index) => (
        <CourseCard
          channelId={course.channelId}
          id={course.id}
          key={index}
          title={course.title}
          author={course.author}
          images={course.images}
          views={course.views}
          publishedAt={course.publishedAt}
        />
      ))}
    </main>
  )
}
