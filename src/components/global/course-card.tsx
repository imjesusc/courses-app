'use client'

import { useMyListCourses } from '@/hooks'
import { CourseCardModel } from '@/models'
import { cn, timeago } from '@/utilities'
import Image from 'next/image'
import Link from 'next/link'
import fallback from '../../assets/images/image.png'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui'
import { Icons } from './icons'

export const CourseCard = ({ id, title, channelId, views, publishedAt, author, images }: CourseCardModel) => {
  const { handleUpdateMyListCourse, checkCourseInList } = useMyListCourses()

  return (
    <article className={cn('group relative overflow-hidden rounded-xl p-2 duration-100 hover:bg-secondary/20')}>
      <div className="flex flex-col gap-2">
        <Link href={`/explorar/${id}`}>
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

        <footer className="flex items-start">
          <div className="grid flex-1 gap-0.5">
            <h3 className="line-clamp-2 text-sm font-semibold">{title}</h3>
            <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/@${author.replaceAll(' ', '')}`}>
              <small className="line-clamp-2 text-[11px] text-muted-foreground">@{author}</small>
            </a>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <small>
                {views} {views === 1 ? 'vista' : 'vistas'}
              </small>
              <span className="text-[10px] text-muted">•</span>
              <small>{timeago(publishedAt, 'es_ES')}</small>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={() => handleUpdateMyListCourse({ id, title, channelId, author, images, views, publishedAt })}
                className={cn(
                  'flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full',
                  'opacity-0 transition-opacity duration-200 group-hover:opacity-100'
                )}
              >
                <Icons.star
                  className={cn(
                    'h-5 w-5',
                    checkCourseInList(id) ? 'fill-muted-foreground text-muted-foreground' : 'text-muted-foreground'
                  )}
                  size={18}
                />
              </TooltipTrigger>
              <TooltipContent>{checkCourseInList(id) ? 'Quitar de mi lista' : 'Agregar a mi lista'}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </footer>
      </div>
    </article>
  )
}
