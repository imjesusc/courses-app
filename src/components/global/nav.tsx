'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Populares',
    href: '/populares'
  },
  {
    label: 'Explorar',
    href: '/explorar'
  },
  {
    label: 'Mi lista',
    href: '/mi-lista'
  }
]

export const Nav = () => {
  const pathname = usePathname()
  return (
    <div className="h-16">
      <header className="container sticky left-0 top-0 flex h-full w-full  items-center justify-start">
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link className={pathname === href ? 'text-primary' : ''} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
