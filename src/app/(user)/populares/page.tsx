import { CourseCard, Typography } from '@/components/global'
import { Metadata } from 'next'
import { getPopularCoursesAction } from '../../../actions'

export const metadata: Metadata = {
  title: 'Cursos Populares | My Courses App',
  description: 'En esta página encontraras los cursos mas populares de Vistos en está plataforma.'
}

export default async function PopularesPage() {
  const popularCourses = await getPopularCoursesAction()

  return (
    <div className="container space-y-4 py-4 tablet:py-6 tablet:pb-6 ">
      <header>
        <Typography as={'h1'} size={'4xl'} className="font-semibold">
          Cursos Populares
        </Typography>
      </header>
      <main className="grid gap-y-6 tablet:grid-cols-3 laptop:grid-cols-4">
        {popularCourses?.map((course, index) => (
          <CourseCard
            url={`/explorar/${course.playlistId}`}
            playlistId={course.playlistId}
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
