import { BackPrevLink, Mdx } from '@/components/global'
import { Button } from '@/components/ui'
import { CoursePreviewPlayer, ListCourseItem } from '@/modules/explorar/components'
import { formatAncorsUtilite } from '@/utilities'
import Link from 'next/link'
import { getCourseDetailByIdAction, getFirstsCourseItemsByIdAction } from '../../../../actions'

export default async function ExploreSlugPage({ params }: { params: { id: string } }) {
  const { id } = params

  const [courseDetail, firsCourseItem] = await Promise.all([
    getCourseDetailByIdAction(id),
    getFirstsCourseItemsByIdAction(id)
  ])

  if (!courseDetail || !firsCourseItem)
    return (
      <>
        <BackPrevLink />
        Not course found
      </>
    )

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
                href={`https://youtube.com/@${firsCourseItem[0]?.author}`}
              >
                @{firsCourseItem[0]?.author}
              </Link>

              <small className="text-muted-foreground">
                {courseDetail.views === 1 ? '1 view' : `${courseDetail.views} views`}
              </small>
            </div>

            <footer className="flex gap-4">
              <Button variant="outline">Iniciar Curso</Button>

              <Button variant="secondary" className="rounded-full">
                Guardar Curso
              </Button>
            </footer>

            <CoursePreviewPlayer videoId={firsCourseItem[0]?.videoId || ''} />

            <ListCourseItem
              className="m-2 cursor-not-allowed opacity-50 shadow-2xl brightness-90"
              images={firsCourseItem[1]?.images}
              title={firsCourseItem[1]?.title}
              author={firsCourseItem[1]?.author}
            />
          </section>

          <footer>
            <pre className="text-wrap font-sans text-sm">
              <Mdx>{formatAncorsUtilite(firsCourseItem[0]?.description) || ''}</Mdx>
            </pre>
          </footer>
        </main>
      </div>
    </>
  )
}
