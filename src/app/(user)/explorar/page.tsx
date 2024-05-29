import { CourseCard } from '@/components/global'
import { ExploreAside, SearchCourse } from '@/modules/explorar/components'
import { Suspense } from 'react'

export default function ExplorePage() {
  return (
    <div className="container flex items-start gap-6 py-10">
      <section className="tablet:gap-6 flex w-full flex-1 flex-col gap-2">
        <header>
          <Suspense fallback={null}>
            <SearchCourse />
          </Suspense>
        </header>

        <main className="tablet:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid gap-y-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <CourseCard key={index} />
          ))}
        </main>
      </section>

      <ExploreAside className="w-[300px]" />
    </div>
  )
}
