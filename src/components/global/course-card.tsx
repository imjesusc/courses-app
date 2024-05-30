'use client'

import { CourseCardModel } from '@/models'
import { cn } from '@/utilities'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'timeago.js'
import fallback from '../../assets/images/image.png'

export const CourseCard = ({ id, title, views, publishedAt, author, images }: CourseCardModel) => {
  return (
    <article className={cn('group relative overflow-hidden rounded-xl p-2 duration-100 hover:bg-secondary/20')}>
      {/* <button
        className={cn(
          'absolute right-3 top-3 z-50 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full',
          'opacity-0 transition-opacity duration-200 hover:bg-accent group-hover:opacity-100'
        )}
      >
        <Icons.star size={18} />
      </button> */}

      <div className="flex flex-col gap-2">
        <Link href="">
          <figure className="h-full w-full overflow-hidden rounded-lg">
            <Image
              src={images.standard || fallback}
              alt="Cursos en línea"
              className="aspect-video h-full w-full rounded-lg bg-background object-cover"
              width={800}
              height={800}
            />
          </figure>
        </Link>

        <footer className="grid gap-0.5">
          <h3 className="text-sm font-semibold">{title}</h3>
          <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/@${author}`}>
            <small className="line-clamp-2 text-xs text-muted-foreground">@{author}</small>
          </a>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <small>
              {views} {views === 1 ? 'view' : 'views'}
            </small>
            <span>•</span>
            <small>{format(publishedAt)}</small>
          </div>
        </footer>
      </div>
    </article>
  )
}
