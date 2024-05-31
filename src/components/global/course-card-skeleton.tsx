import { Skeleton } from '../ui'

export const CourseCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Skeleton className="aspect-video rounded-lg" />
      <div className="flex flex-col gap-1">
        <Skeleton className=" text-sm font-semibold">
          <span className="invisible">skeleton title</span>
        </Skeleton>
        <Skeleton className="w-max text-[11px]">
          <span className="invisible">@skeleton author</span>
        </Skeleton>
        <Skeleton className="w-max text-sm">
          <span className="invisible">skeleton views • date</span>
        </Skeleton>
      </div>
    </div>
  )
}
