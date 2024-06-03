'use client'

import { CourseCard, Typography } from '@/components/global'
import { useMyListStore } from '@/store'

export const SavedCoursesSet = () => {
  const savedCourses = useMyListStore((state) => state.savedCourses)
  return (
    <div className="grid gap-4">
      <header>
        <Typography as={'h2'} size={'2xl'} className="font-semibold">
          Cursos guardados
        </Typography>
      </header>

      <main className="grid gap-y-6 tablet:grid-cols-3 laptop:grid-cols-4">
        {savedCourses?.map((course) => (
          <CourseCard
            url={`/explorar/${course.playlistId}`}
            playlistId={course.playlistId}
            id={course.id}
            key={course.id}
            title={course.title}
            author={course.author}
            images={course.images}
            views={course.views}
            publishedAt={course.publishedAt}
          />
        ))}
      </main>
    </div>
  )
}
