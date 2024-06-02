import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { db } from './config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'shadcn' },
        password: { label: 'Password', type: 'password', placeholder: '*****' }
      },
      authorize: async (credentials) => {
        try {
          const userFound = await db.user.findUnique({
            where: {
              email: credentials?.email as string
            }
          })

          if (!userFound) throw new Error('No user found')
          const matchPassword = bcrypt.compareSync(credentials?.password as string, userFound?.password)

          if (!matchPassword) throw new Error('Wrong password')

          return {
            id: userFound.id,
            email: userFound.email
          }
        } catch (error) {
          return null
        }
      }
    })
  ]
})
