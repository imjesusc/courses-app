import { auth, signOut } from '@/auth'
import { Nav } from '@/components/global'
import { Button } from '@/components/ui'
import Link from 'next/link'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await auth()
  return (
    <>
      <Nav>
        {user?.user?.email && (
          <div className="flex items-center gap-4 tablet:gap-6">
            <nav>
              <Link href="/dashboard">Dashbaord</Link>
            </nav>

            <form
              action={async () => {
                'use server'
                await signOut({ redirectTo: '/' })
              }}
            >
              <Button variant="ghost">Sign out</Button>
            </form>
          </div>
        )}
      </Nav>
      {children}
    </>
  )
}
