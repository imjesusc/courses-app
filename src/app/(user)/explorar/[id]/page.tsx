import { SelectCourseProvider } from '@/contexts'
import { AsideListCourseItems, CoursePlayer } from '@/modules/explorar/components'
import { getCourseDetail, getCourseItems } from './actions'

export default async function ExploreSlugPage({ params }: { params: { id: string }; searchParams: { v: string } }) {
  const { id } = params

  const courseDetail = await getCourseDetail(id)
  const { courseItems, courseInfo } = await getCourseItems(id)

  if (!courseDetail || !courseItems || !courseInfo) return <p>Course not found</p>

  return (
    <div className="container flex pb-10  pt-5 tablet:gap-6 laptop:gap-10">
      <SelectCourseProvider courseDetail={courseInfo} initialCourseItems={courseItems} firstCourse={courseItems[0]}>
        <CoursePlayer />
        <AsideListCourseItems courseDetail={courseDetail} />
      </SelectCourseProvider>
    </div>
  )
}
