'use client'

import { useMyListCourses } from '@/hooks'
import { CourseCardModel } from '@/models'
import { cn, timeago } from '@/utilities'
import Image from 'next/image'
import Link from 'next/link'
import fallback from '../../assets/images/image.png'
import { Gauge, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui'
import { Icons } from './icons'

interface CourseCardProps extends CourseCardModel {
  url: string
  variant?: 'default' | 'secondary'
}

export const CourseCard = ({
  id,
  title,
  variant = 'default',
  playlistId,
  views,
  publishedAt,
  author,
  images,
  url
}: CourseCardProps) => {
  const { handleUpdateSavedCourses, checkCourseIsSaved, myCourses } = useMyListCourses()
  const currentCourse = myCourses.find((course) => course.playlistId === playlistId)

  return (
    <article className={cn('group relative overflow-hidden rounded-xl p-2 duration-100 hover:bg-secondary/20')}>
      <div className="flex flex-col gap-2">
        <Link href={url} className="relative">
          {variant === 'secondary' && (
            <span className="absolute bottom-0.5 right-0.5 z-50 rounded-sm bg-background px-2 py-1 text-xs text-primary opacity-0 backdrop-blur-xl transition-opacity group-hover:opacity-100">
              Reanudar
            </span>
          )}
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
            {variant === 'default' && (
              <>
                <a
                  target="_blank"
                  className="w-max"
                  rel="noreferrer"
                  href={`https://www.youtube.com/@${author.replaceAll(' ', '')}`}
                >
                  <small className="line-clamp-2 w-max text-[11px] text-muted-foreground">@{author}</small>
                </a>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <small>
                    {views} {views === 1 ? 'vista' : 'vistas'}
                  </small>
                  <span className="text-[10px] text-muted">•</span>
                  <small>{timeago(publishedAt, 'es_ES')}</small>
                </div>
              </>
            )}
          </div>

          {variant === 'default' ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onClick={() =>
                    handleUpdateSavedCourses({ id, title, playlistId, author, images, views, publishedAt })
                  }
                  className={cn(
                    'flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full group-hover:opacity-100',
                    'opacity-0 transition-opacity duration-200 '
                  )}
                >
                  <Icons.star
                    className={cn(
                      'h-5 w-5',
                      checkCourseIsSaved(playlistId)
                        ? 'fill-muted-foreground text-muted-foreground'
                        : 'text-muted-foreground'
                    )}
                    size={18}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {checkCourseIsSaved(playlistId) ? 'Quitar de mi lista' : 'Agregar a mi lista'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Gauge
              value={currentCourse?.completedCourseItems?.length || 0}
              maxValue={currentCourse?.totalCourseItems}
              size="small"
              showValue={false}
            />
          )}
        </footer>
      </div>
    </article>
  )
}
