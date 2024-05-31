import { CoursesCardSetSkeleton } from '@/components/global'
import { ExploreAside, PaginationButtons, SearchCourse, SearchCourseCardSet } from '@/modules/explorar/components'
import { Suspense } from 'react'
import { getTotalCoursesAction } from './actions'

export default async function ExplorePage({
  searchParams
}: {
  searchParams: { q: string; categories: string; page: string }
}) {
  const { q, categories, page } = searchParams

  const term = q || ''
  const currentPage = page || '1'
  const listCategories = categories?.split(',') || []

  const totalCourses = await getTotalCoursesAction()

  return (
    <div className="container flex items-start gap-6 py-10">
      <section className="flex w-full flex-1 flex-col gap-2 tablet:gap-6">
        <header className="flex gap-2">
          <Suspense fallback={null}>
            <SearchCourse />
            <PaginationButtons totalItems={totalCourses || 0} itemsPerPage={10} />
          </Suspense>
        </header>

        <Suspense key={`${term}-${listCategories}-${currentPage}`} fallback={<CoursesCardSetSkeleton />}>
          <SearchCourseCardSet term={term} listCategories={listCategories} currentPage={currentPage} />
        </Suspense>
      </section>

      <section className="w-[300px]">
        <Suspense fallback={null}>
          <ExploreAside className="w-full" />
        </Suspense>
      </section>
    </div>
  )
}
