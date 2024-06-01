'use client'

import { Checkbox } from '@/components/ui'
import { useMyListCourses } from '@/hooks'
import { CourseDetails } from '@/models'
import { cn } from '@/utilities'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface ListCourseItemProps {
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  className?: string
  playlistId?: string
  videoId?: string
  title: string
  author: string
  images: CourseDetails['images']
  variant?: 'default' | 'secondary'
  position?: number
}

export const ListCourseItem = ({
  onClick,
  className,
  playlistId,
  videoId,
  title,
  author,
  images,
  position,
  variant = 'default'
}: ListCourseItemProps) => {
  const { checkIfCourseItemIsCompleted, handleCompleteCourseClass } = useMyListCourses()
  return (
    <div className={cn('relative flex w-full items-center gap-2 rounded-sm p-1', className)}>
      {variant === 'secondary' && (
        <Checkbox
          onCheckedChange={() => handleCompleteCourseClass(playlistId || '', videoId || '', position || 0)}
          checked={checkIfCourseItemIsCompleted(playlistId || '', videoId || '')}
        />
      )}
      <button onClick={onClick} className={cn('relative grid w-full grid-cols-2 items-center gap-4 rounded-sm')}>
        <footer className="flex flex-col items-start gap-1">
          <h2 className="line-clamp-2 text-start text-xs  font-medium">{title}</h2>
          <p className="text-start text-[10px] text-muted-foreground">@{author}</p>
        </footer>

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
      </button>
    </div>
  )
}
