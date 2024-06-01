import { MyCoursesSet, SavedCoursesSet } from '@/modules/mi-lista/components'

export default function MiListaPage() {
  return (
    <div className="container pb-10 pt-4">
      <main className="grid gap-y-6">
        <MyCoursesSet />
        <SavedCoursesSet />
      </main>
    </div>
  )
}
