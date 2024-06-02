import { BackPrevLink, Mdx } from '@/components/global'
import { CourseButtonActions, CoursePreviewPlayer, ListCourseItem } from '@/modules/explorar/components'
import { formatAncorsUtilite } from '@/utilities'
import Link from 'next/link'
import { getCourseDetailByIdAction, getFirstsCourseItemsByIdAction, updateCourseViewsAction } from '../../../../actions'

export default async function ExploreSlugPage({ params }: { params: { id: string } }) {
  const { id } = params

  const [courseDetail, courseItems] = await Promise.all([
    getCourseDetailByIdAction(id),
    getFirstsCourseItemsByIdAction(id)
  ])
  updateCourseViewsAction(id)

  if (!courseDetail || !courseItems)
    return (
      <>
        <BackPrevLink />
        Not course found
      </>
    )

  const [firsCourseItem, secondCourseItem] = courseItems?.courseFirtsItem || []

  return (
    <>
      <BackPrevLink />
      <div className="container space-y-10  pb-10 pt-5 ">
        <main className="grid items-start gap-4 tablet:grid-cols-2 tablet:gap-6 laptop:gap-10">
          <section className="flex flex-col gap-4">
            <header>
              <h2 className="laptop:6xl text-2xl font-bold tablet:text-4xl">{courseDetail.title}</h2>
            </header>

            <div>
              <Link
                className="block text-sm text-muted-foreground"
                href={`https://youtube.com/@${firsCourseItem?.author}`}
              >
                @{firsCourseItem?.author}
              </Link>

              <small className="text-muted-foreground">
                {courseDetail.views === 1 ? '1 view' : `${courseDetail.views} views`}
              </small>
            </div>

            <CourseButtonActions
              totalCourseItems={courseItems?.totalResults || 0}
              courseItem={{
                playlistId: firsCourseItem.playlistId,
                id: firsCourseItem.playlistId,
                title: firsCourseItem.title,
                author: firsCourseItem.author,
                images: firsCourseItem?.images,
                views: courseDetail?.views,
                publishedAt: firsCourseItem?.publishedAt
              }}
            />

            <CoursePreviewPlayer videoId={firsCourseItem?.videoId || ''} />

            <ListCourseItem
              className="m-2 cursor-not-allowed opacity-50 shadow-2xl brightness-90"
              images={secondCourseItem?.images}
              title={secondCourseItem?.title}
              author={secondCourseItem?.author}
            />
          </section>

          <footer>
            <pre className="text-wrap font-sans text-sm">
              <Mdx>{formatAncorsUtilite(firsCourseItem?.description) || ''}</Mdx>
            </pre>
          </footer>
        </main>
      </div>
    </>
  )
}
