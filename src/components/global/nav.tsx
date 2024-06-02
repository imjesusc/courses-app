'use client'

import { navLinks } from '@/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Nav = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <div className="h-16">
      <header className="container sticky left-0 top-0 flex h-full w-full  items-center justify-between">
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link className={pathname === href ? 'text-muted-foreground' : ''} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </header>
    </div>
  )
}
