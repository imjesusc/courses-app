'use client'

import { Icons } from '@/components/global'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Gauge
} from '@/components/ui'
import { cn } from '@/utilities'
import { Prisma } from '@prisma/client'
import { useMyListCourses, useSelectCourse } from '../../../hooks'
import { ListCourseItem } from './list-course-item'

export const AsideListCourseItems = ({ courseDetail }: { courseDetail: Prisma.CoursesGetPayload<{}> }) => {
  const { currentCourseItems, currentCourseItem, courseInfo, updateCurrentCourse, getMoreCurrentCourseItems } =
    useSelectCourse()
  const { myCourses, handleDeleteCourse, handleResetCourseProgress } = useMyListCourses()

  const currentCourseInfo = myCourses.find((course) => course.playlistId === currentCourseItem?.playlistId)

  return (
    <aside className="flex w-[300px] flex-col  gap-2">
      <header className="flex flex-col gap-2 rounded-md border p-2">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold">{courseDetail?.title}</h1>
            <p className="text-sm text-muted-foreground">
              Completados {currentCourseInfo?.completedCourseItems?.length || 0} de {courseInfo.totalResults}{' '}
            </p>

            <p className="text-sm text-muted-foreground">
              {courseInfo.currentItem}/{courseInfo.totalResults}
            </p>
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
          <button onClick={getMoreCurrentCourseItems} className="text-blue-500 ">
            Cargar más
          </button>
        </footer>
      </section>
    </aside>
  )
}
