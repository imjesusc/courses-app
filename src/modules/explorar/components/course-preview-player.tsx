'use client'

import ReactPlayer from 'react-player'

export const CoursePreviewPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <figure className="relative aspect-video h-full w-full overflow-hidden rounded-xl bg-background">
      <ReactPlayer
        style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
        width={'100%'}
        height={'100%'}
        controls
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </figure>
  )
}
