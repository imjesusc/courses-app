'use client'

import { Icons } from '@/components/global'
import { Button, Checkbox, Label } from '@/components/ui'
import { courseCategories } from '@/config'
import { cn, hasItems } from '@/utilities'
import { useState } from 'react'

interface ExploreAsideProps {
  className?: string
}
export const ExploreAside = ({ className }: ExploreAsideProps) => {
  const [field, setField] = useState<string[]>([])

  const handleReset = () => {
    setField([])
  }

  return (
    <aside className={cn('flex flex-col gap-5', className)}>
      <header className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">Categorias</h2>
        {hasItems(field) ? (
          <Button onClick={handleReset} variant="outline" size="icon">
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
                  checked={field?.includes(item.slug)}
                  onCheckedChange={(checked: boolean) => {
                    return checked
                      ? setField([...field, item.slug])
                      : setField(field?.filter((value) => value !== item.slug))
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
