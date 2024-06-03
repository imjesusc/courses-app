import { CoursesCardSetSkeleton, Typography } from '@/components/global'
import { ExploreAside, PaginationButtons, SearchCourse, SearchCourseCardSet } from '@/modules/explorar/components'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { getTotalCoursesAction } from '../../../actions'

export const metadata: Metadata = {
  title: 'Explorar Cursos | My Courses App',
  description: 'En esta página podras buscar y filtrar cursos, por nombre o categoría.'
}

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
    <div className="container flex flex-col gap-4 py-4 tablet:gap-6  tablet:py-6">
      <header>
        <Typography as={'h1'} size={'4xl'} className="font-semibold">
          Explorar Cursos
        </Typography>
      </header>

      <div className="flex items-start gap-6">
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

        <section className="hidden tablet:block tablet:w-[250px] laptop:w-[300px]">
          <Suspense fallback={null}>
            <ExploreAside className="w-full" />
          </Suspense>
        </section>
      </div>
    </div>
  )
}
