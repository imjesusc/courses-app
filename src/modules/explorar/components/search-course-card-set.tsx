import { getSearchCoursesAction } from '@/actions'
import { CourseCard } from '@/components/global'

interface SearchCourseCardSetProps {
  term: string
  listCategories: string[]
  currentPage: string
}

export const SearchCourseCardSet = async ({ term, listCategories, currentPage }: SearchCourseCardSetProps) => {
  const courses = await getSearchCoursesAction({ q: term, categories: listCategories, page: currentPage })
  return (
    <main className="grid grid-cols-1 gap-y-5 tablet:grid-cols-2 laptop:grid-cols-3">
      {courses?.map((course) => (
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
  )
}
