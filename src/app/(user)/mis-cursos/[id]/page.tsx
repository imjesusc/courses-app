import { BackPrevLink } from '@/components/global'
import { SelectCourseProvider } from '@/contexts'
import { AsideListCourseItems, CoursePlayer } from '@/modules/explorar/components'
import { Metadata } from 'next'
import { getCourseDetailByIdAction, getCourseItemsByIdAction } from '../../../../actions'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params
  const courseDetail = await getCourseDetailByIdAction(id)

  return {
    title: `${courseDetail?.title} | My Courses App`,
    description: `Este es el curso de ${courseDetail?.title}`
  }
}

export default async function MiCursoSlugPage({ params }: { params: { id: string } }) {
  const { id } = params

  const courseDetail = await getCourseDetailByIdAction(id)
  const { courseItems, courseInfo } = await getCourseItemsByIdAction(id)

  if (!courseDetail || !courseItems || !courseInfo)
    return (
      <>
        <BackPrevLink />
        Not course found
      </>
    )

  return (
    <>
      <BackPrevLink className="hidden tablet:block" />
      <div className="container flex pb-10  pt-5 tablet:gap-6 laptop:gap-10">
        <SelectCourseProvider courseDetail={courseInfo} initialCourseItems={courseItems} firstCourse={courseItems[0]}>
          <div className="flex flex-1 flex-col gap-2">
            <BackPrevLink text="Volver atrás" className="relative left-0 top-0 tablet:hidden" />
            <CoursePlayer />
          </div>
          <AsideListCourseItems courseDetail={courseDetail} />
        </SelectCourseProvider>
      </div>
    </>
  )
}
