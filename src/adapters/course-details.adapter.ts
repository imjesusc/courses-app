import { CourseDetails, ytPlaylistItemsItemModel } from '@/models'

export const courseDetailsAdapter = (data: ytPlaylistItemsItemModel): CourseDetails => {
  const adapterCourse = {
    videoId: data?.snippet?.resourceId?.videoId || '',
    title: data?.snippet?.title,
    author: data?.snippet?.channelTitle || 'Anonymous',
    playlistId: data?.snippet?.playlistId || '',
    position: data?.snippet?.position + 1 || 0,
    images: {
      default: data?.snippet?.thumbnails?.default?.url || '',
      medium: data?.snippet?.thumbnails?.medium?.url || '',
      high: data?.snippet?.thumbnails?.high?.url || '',
      standard: data?.snippet?.thumbnails?.standard?.url || '',
      maxres: data?.snippet?.thumbnails?.maxres?.url || ''
    },
    publishedAt: data?.snippet?.publishedAt,
    description: data?.snippet?.description || ''
  }

  return adapterCourse
}
