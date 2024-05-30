import { CourseDetails } from '@/models'
import { cn } from '@/utilities'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface ListCourseItemProps
  extends Omit<CourseDetails, 'playlistId' | 'videoId' | 'publishedAt' | 'description' | 'position'> {
  onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  className: string
}

export const ListCourseItem = ({ onClick, className, title, author, images }: ListCourseItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn('relative grid w-full grid-cols-2 items-center gap-4 rounded-sm', className)}
    >
      <figure className="aspect-video overflow-hidden rounded-sm">
        <Image
          loading="lazy"
          className="aspect-video h-full w-full object-cover"
          width={700}
          height={400}
          src={images.standard || images.medium}
          alt={title}
        />
      </figure>

      <footer className="flex flex-col items-start gap-1">
        <h2 className="line-clamp-2 text-start text-xs  font-medium">{title}</h2>
        <p className="text-start text-[10px] text-muted-foreground">@{author}</p>
      </footer>
    </button>
  )
}
