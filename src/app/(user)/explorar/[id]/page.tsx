import { BackPrevLink } from '@/components/global'
import { SelectCourseProvider } from '@/contexts'
import { AsideListCourseItems, CoursePlayer } from '@/modules/explorar/components'
import { getCourseDetail, getCourseItems, updateCourseViews } from './actions'

export default async function ExploreSlugPage({ params }: { params: { id: string } }) {
  const { id } = params

  await updateCourseViews(id)
  const courseDetail = await getCourseDetail(id)
  const { courseItems, courseInfo } = await getCourseItems(id)

  if (!courseDetail || !courseItems || !courseInfo)
    return (
      <>
        <BackPrevLink />
        Not course found
      </>
    )

  return (
    <>
      <BackPrevLink />
      <div className="container flex pb-10  pt-5 tablet:gap-6 laptop:gap-10">
        <SelectCourseProvider courseDetail={courseInfo} initialCourseItems={courseItems} firstCourse={courseItems[0]}>
          <CoursePlayer />
          <AsideListCourseItems courseDetail={courseDetail} />
        </SelectCourseProvider>
      </div>
    </>
  )
}
