import { getCourses } from '@/app/(user)/actions'
import { CourseCard } from '@/components/global'

interface SearchCourseCardSetProps {
  term: string
  listCategories: string[]
  currentPage: string
}

export const SearchCourseCardSet = async ({ term, listCategories, currentPage }: SearchCourseCardSetProps) => {
  const courses = await getCourses({ q: term, categories: listCategories, page: currentPage })
  return (
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
  )
}
