import { CourseCard } from '@/components/global'
import { getPopularCoursesAction } from './actions'

export default async function PopularesPage() {
  const popularCourses = await getPopularCoursesAction()

  return (
    <div className="container pb-10 pt-4">
      <main className="grid gap-y-6 tablet:grid-cols-3 laptop:grid-cols-4">
        {popularCourses?.map((course, index) => (
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
    </div>
  )
}
