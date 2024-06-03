'use client'

import { Mdx, Typography } from '@/components/global'
import { useMyListCourses } from '@/hooks'
import { formatAncorsUtilite } from '@/utilities'
import ReactPlayer from 'react-player'
import { useSelectCourse } from '../../../hooks/use-select-course'

export const CoursePlayer = () => {
  const { currentCourseItem, goToNextCourse } = useSelectCourse()
  const { completedCourseClass } = useMyListCourses()

  return (
    <main className="flex flex-col gap-4">
      <figure className="relative aspect-video h-full w-full overflow-hidden rounded-xl bg-background">
        <ReactPlayer
          style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
          width={'100%'}
          height={'100%'}
          onEnded={() => {
            completedCourseClass(currentCourseItem?.playlistId, currentCourseItem?.videoId, currentCourseItem?.position)
            goToNextCourse(currentCourseItem?.videoId)
          }}
          controls
          url={`https://www.youtube.com/watch?v=${currentCourseItem?.videoId}`}
        />
      </figure>

      <section className="grid gap-4">
        <header>
          <Typography as={'h1'} size={'2xl'} className="font-semibold">
            {currentCourseItem?.title}
          </Typography>
        </header>

        <pre className="text-wrap font-sans text-sm">
          <Mdx className="text-sm">{formatAncorsUtilite(currentCourseItem?.description)}</Mdx>
        </pre>
      </section>
    </main>
  )
}
