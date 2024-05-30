export interface CourseDetails {
  videoId: string
  title: string
  author: string
  playlistId: string
  images: {
    default: string
    medium: string
    high: string
    standard: string
    maxres: string
  }
  publishedAt: string
  description: string
}
