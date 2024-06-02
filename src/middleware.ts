import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

export async function middleware(req: NextRequest) {
  const session = await auth()
  const isLoggedIn = !!session?.user?.email
  console.log({ session })
  if (!isLoggedIn) return NextResponse.redirect(new URL('/', req.url))
}

export const config = { matcher: ['/dashboard'] }
