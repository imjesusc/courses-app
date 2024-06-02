import { CreateCourseForm } from '@/modules/dashboard/components'

export default function DashboardPage() {
  return (
    <main className="container space-y-5 pb-10 pt-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <CreateCourseForm />
    </main>
  )
}
