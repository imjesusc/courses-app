import { CourseCard } from '@/components/global'
import { ExploreAside, SearchCourse } from '@/modules/explorar/components'
import { Suspense } from 'react'
import { getCourses } from '../actions'

export default async function ExplorePage({ searchParams }: { searchParams: { q: string; categories: string } }) {
  const { q, categories } = searchParams

  const term = q || ''
  const listCategories = categories?.split(',') || []

  const courses = await getCourses({ q: term, categories: listCategories })

  return (
    <div className="container flex items-start gap-6 py-10">
      <section className="flex w-full flex-1 flex-col gap-2 tablet:gap-6">
        <header>
          <Suspense fallback={null}>
            <SearchCourse />
          </Suspense>
        </header>

        <main className="grid grid-cols-1 gap-y-5 tablet:grid-cols-2 laptop:grid-cols-3">
          {courses?.map((course, index) => (
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
      </section>

      <div className="w-[300px]">
        <Suspense fallback={null}>
          <ExploreAside className="w-full" />
        </Suspense>
      </div>
    </div>
  )
}
