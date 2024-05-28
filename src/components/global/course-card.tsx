'use client'

import { cn } from '@/utilities'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../assets/images/image.png'
import { Icons } from './icons'

export const CourseCard = () => {
  return (
    <article
      className={cn('group relative overflow-hidden rounded-2xl duration-100 hover:bg-secondary hover:opacity-100')}
    >
      <button
        className={cn(
          'absolute right-3 top-3 z-50 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full',
          'opacity-0 transition-opacity duration-200 hover:bg-accent group-hover:opacity-100'
        )}
      >
        <Icons.star size={18} />
      </button>

      <Link href="" className="grid gap-4 rounded-lg p-2">
        <div className="flex flex-col gap-1">
          <header>
            <figure className="h-full w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt="Cursos en línea"
                className="aspect-video h-full w-full rounded-lg bg-background object-cover"
              />
            </figure>
          </header>

          <footer className="grid gap-1">
            <h3 className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus vfacilis tempore.
            </h3>
            <small className="text-muted-foreground">canal</small>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <small>4 vistas</small>
              <span>•</span>
              <small>2 horas</small>
            </div>
          </footer>
        </div>
      </Link>
    </article>
  )
}
