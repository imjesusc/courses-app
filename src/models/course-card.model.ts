export interface CourseCardModel {
  id: string
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
  views: number
  publishedAt: string
}
