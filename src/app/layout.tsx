import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Courses For You',
  description:
    'Courses Online es una plataforma web que recopila cursos gratuitos de YouTube, organizados por categorías. Permite a los usuarios buscar y filtrar cursos, facilitando el acceso a contenido educativo de calidad.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
