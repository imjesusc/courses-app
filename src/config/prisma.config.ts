import { SCHEMA } from '@/enviroments/schema'
import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

const libsql = createClient({
  url: SCHEMA.DB_URL,
  authToken: SCHEMA.DB_TOKEN
})

const adapter = new PrismaLibSQL(libsql)
export const db = new PrismaClient({ adapter })
