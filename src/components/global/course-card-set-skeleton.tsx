import { CourseCardSkeleton } from './course-card-skeleton'

export const CoursesCardSetSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5 tablet:grid-cols-2 laptop:grid-cols-3">
      {Array(7)
        .fill(0)
        .map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
    </div>
  )
}
