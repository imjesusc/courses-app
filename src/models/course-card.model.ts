export interface CourseCardModel {
  id: string
  title: string
  author: string
  images: {
    default: string
  }
  views: number
  createdAt: string
}
