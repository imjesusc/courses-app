export interface CourseDetails {
  videoId: string
  title: string
  author: string
  playlistId: string
  position: number
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
