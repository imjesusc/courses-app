'use client'

import { CourseCard, Typography } from '@/components/global'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui'
import { useMyListStore } from '@/store'
import { cn } from '@/utilities'
import { useEffect, useState } from 'react'

export const MyCoursesSet = () => {
  const myCourses = useMyListStore((state) => state.myCourses)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api, myCourses])

  useEffect(() => {
    setCount(myCourses.length)
    setCurrent(myCourses.length)
  }, [myCourses])

  return (
    <section className="grid gap-4">
      <header>
        <Typography as={'h2'} size={'2xl'} className="font-semibold">
          Mis Cursos
        </Typography>
      </header>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
      >
        <div className="mb-2 flex gap-2">
          <CarouselPrevious variant={'secondary'} />
          <CarouselNext variant={'secondary'} />
          <div className={cn('py-2 text-start text-sm text-muted-foreground', count < 5 && 'hidden')}>
            Curso {current} de {count}
          </div>
        </div>

        <CarouselContent>
          {myCourses?.map((course) => (
            <CarouselItem key={course.id} className={cn('mobile:basis-1/2 tablet:basis-1/3 laptop:basis-1/4')}>
              <CourseCard
                variant={'secondary'}
                url={`/mis-cursos/${course.playlistId}`}
                playlistId={course.playlistId}
                id={course.id}
                title={course.title}
                author={course.author}
                images={course.images}
                views={course.views}
                publishedAt={course.publishedAt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
