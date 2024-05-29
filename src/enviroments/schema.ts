export const SCHEMA: Record<string, string> = {
  // Turso Database
  DB_TOKEN: process.env.TURSO_AUTH_TOKEN || '',
  DB_URL: process.env.TURSO_DATABASE_URL || '',

  // Youtube V3
  YT_V3_API_KEY: process.env.NEXT_YOUTUBE_V3_API_KEY || ''
}
