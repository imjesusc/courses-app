import { CourseCardModel, courseInfo } from '@/models'

export const courseInfoAdapter = (item: courseInfo): CourseCardModel => {
  const adapterCourse = {
    id: item?.id,
    title: item?.snippet?.title,
    author: item?.snippet?.channelTitle || 'Anonymous',
    channelId: item?.snippet?.channelId || '',
    images: {
      default: item?.snippet?.thumbnails?.default?.url || '',
      medium: item?.snippet?.thumbnails?.medium?.url || '',
      high: item?.snippet?.thumbnails?.high?.url || '',
      standard: item?.snippet?.thumbnails?.standard?.url || '',
      maxres: item?.snippet?.thumbnails?.maxres?.url || ''
    },
    views: item?.views || 0,
    publishedAt: item?.snippet?.publishedAt
  }

  return adapterCourse
}
