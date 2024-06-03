import { MyCoursesSet, SavedCoursesSet } from '@/modules/mi-lista/components'

export default function MiListaPage() {
  return (
    <div className="container py-4 tablet:pb-10">
      <main className="grid gap-y-6">
        <MyCoursesSet />
        <SavedCoursesSet />
      </main>
    </div>
  )
}
