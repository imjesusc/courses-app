export const SCHEMA = {
  // Turso Database
  DB_URL: process.env.TURSO_DATABASE_URL || '',
  DB_TOKEN: process.env.TURSO_AUTH_TOKEN || '',

  // Youtube V3
  YT_V3_API_KEY: process.env.YOUTUBE_V3_API_KEY || '',
  YT_URL: process.env.YOUTUBE_API_URL || ''
}
