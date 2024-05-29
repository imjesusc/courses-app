'use client'

import { Icons } from '@/components/global'
import { Button, Checkbox, Label } from '@/components/ui'
import { courseCategories } from '@/config'
import { cn, hasItems } from '@/utilities'
import { useFilterCourses } from '../hooks/useFilterCourses'

interface ExploreAsideProps {
  className?: string
}
export const ExploreAside = ({ className }: ExploreAsideProps) => {
  const { handleReset, handleUpdateCategory, categories } = useFilterCourses()

  return (
    <aside className={cn('flex flex-col gap-5', className)}>
      <header className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">Categorias</h2>
        {hasItems(categories) ? (
          <Button type="reset" onClick={handleReset} variant="outline" size="icon">
            <Icons.x size={18} />
          </Button>
        ) : (
          <Button className="invisible" variant="outline" size="icon">
            <Icons.x size={18} />
          </Button>
        )}
      </header>
      <div>
        <ul className="flex flex-col gap-4">
          {courseCategories.map((item) => (
            <li key={item.id}>
              <Label className="flex cursor-pointer items-center gap-2">
                <Checkbox
                  defaultChecked={categories.includes(item.slug)}
                  checked={categories.includes(item.slug)}
                  onCheckedChange={() => {
                    handleUpdateCategory(item.slug)
                  }}
                />
                <span>{item.label}</span>
              </Label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
