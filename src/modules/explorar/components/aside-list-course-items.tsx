'use client'

import { Icons, Typography } from '@/components/global'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Gauge,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '@/components/ui'
import { cn } from '@/utilities'
import { Prisma } from '@prisma/client'
import { useMyListCourses, useSelectCourse } from '../../../hooks'
import { ListCourseItem } from './list-course-item'
export const AsideListCourseItems = ({
  courseDetail,
  className
}: {
  courseDetail: Prisma.CoursesGetPayload<{}>
  className?: string
}) => {
  const { currentCourseItems, currentCourseItem, courseInfo, updateCurrentCourse, getMoreCurrentCourseItems } =
    useSelectCourse()
  const { myCourses, handleDeleteCourse, handleResetCourseProgress } = useMyListCourses()

  const currentCourseInfo = myCourses.find((course) => course.playlistId === currentCourseItem?.playlistId)

  return (
    <>
      <div className="tablet:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="fixed bottom-4 right-4 z-20" size={'icon'}>
              <Icons.arrowLeft size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full tablet:w-auto">
            <SheetHeader>
              <aside className={cn('flex flex-col gap-2 mobile:max-w-[300px]', className)}>
                <header className="flex flex-col gap-2 rounded-md border p-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-2">
                      <Typography className="line-clamp-2 text-lg font-semibold">{courseDetail?.title}</Typography>
                      <Typography size={'sm'} className="text-muted-foreground">
                        Completados {currentCourseInfo?.completedCourseItems?.length || 0} de {courseInfo.totalResults}{' '}
                      </Typography>

                      <Typography size={'sm'} className="text-muted-foreground">
                        {courseInfo.currentItem}/{courseInfo.totalResults}
                      </Typography>
                    </div>

                    <div className="flex flex-col  gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="self-end" variant="ghost" size={'icon'}>
                            <Icons.ellipsis />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => handleResetCourseProgress(currentCourseInfo?.playlistId || '')}
                          >
                            Resetear progreso
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteCourse(currentCourseInfo?.playlistId || '')}>
                            Quitar de mi lista
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Gauge
                        showValue
                        value={currentCourseInfo?.completedCourseItems?.length || 0}
                        maxValue={courseInfo.totalResults}
                        size="medium"
                      />
                    </div>
                  </div>
                </header>

                <section className="flex h-[calc(100vh-200px)] flex-col gap-2 overflow-x-hidden overflow-y-scroll pr-2">
                  {currentCourseItems?.map((item) => (
                    <ListCourseItem
                      key={item.videoId}
                      position={item.position}
                      playlistId={item.playlistId}
                      videoId={item.videoId}
                      className={cn(courseInfo.currentItem === item.position ? 'bg-secondary/50' : '')}
                      onClick={() => updateCurrentCourse(item.videoId)}
                      author={item.author}
                      title={item.title}
                      images={item.images}
                      variant="secondary"
                    />
                  ))}

                  <footer>
                    <button onClick={getMoreCurrentCourseItems} className="text-sm text-[deeppink]">
                      Cargar más
                    </button>
                  </footer>
                </section>
              </aside>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <aside className={cn('hidden w-[300px] flex-col gap-2  tablet:flex', className)}>
        <header className="flex flex-col gap-2 rounded-md border p-2">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Typography className="line-clamp-2 text-lg font-semibold">{courseDetail?.title}</Typography>
              <Typography size={'sm'} className="text-muted-foreground">
                Completados {currentCourseInfo?.completedCourseItems?.length || 0} de {courseInfo.totalResults}{' '}
              </Typography>

              <Typography size={'sm'} className="text-muted-foreground">
                {courseInfo.currentItem}/{courseInfo.totalResults}
              </Typography>
            </div>

            <div className="flex flex-col  gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="self-end" variant="ghost" size={'icon'}>
                    <Icons.ellipsis />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleResetCourseProgress(currentCourseInfo?.playlistId || '')}>
                    Resetear progreso
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDeleteCourse(currentCourseInfo?.playlistId || '')}>
                    Quitar de mi lista
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Gauge
                showValue
                value={currentCourseInfo?.completedCourseItems?.length || 0}
                maxValue={courseInfo.totalResults}
                size="medium"
              />
            </div>
          </div>
        </header>

        <section className="flex h-[calc(100vh-200px)] flex-col gap-2 overflow-x-hidden overflow-y-scroll pr-2">
          {currentCourseItems?.map((item) => (
            <ListCourseItem
              key={item.videoId}
              position={item.position}
              playlistId={item.playlistId}
              videoId={item.videoId}
              className={cn(courseInfo.currentItem === item.position ? 'bg-secondary/50' : '')}
              onClick={() => updateCurrentCourse(item.videoId)}
              author={item.author}
              title={item.title}
              images={item.images}
              variant="secondary"
            />
          ))}

          <footer>
            <button onClick={getMoreCurrentCourseItems} className="text-sm text-[deeppink]">
              Cargar más
            </button>
          </footer>
        </section>
      </aside>
    </>
  )
}
