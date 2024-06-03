'use client'

import { Sheet, SheetContent, SheetHeader } from '@/components/ui'
import { navLinks } from '@/config'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui'
import { Icons } from './icons'

export const Nav = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="hidden h-16 tablet:block">
        <header className="container sticky left-0 top-0 flex h-full w-full items-center justify-between">
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
      {/* Mobile */}
      <div className="h-16 tablet:hidden">
        <header className="container sticky left-0 top-0 flex h-full w-full items-center justify-between">
          <Button variant={'ghost'} size={'icon'} onClick={() => setMenuOpen(true)}>
            <Icons.alignLeft size={18} />
          </Button>

          {menuOpen && (
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetContent side={'left'} className="w-full">
                <SheetHeader>
                  <nav>
                    <ul className="flex flex-col items-start gap-6 p-4">
                      {navLinks.map(({ label, href }) => (
                        <li key={label}>
                          <button
                            onClick={() => {
                              router.push(href)
                              setMenuOpen(false)
                            }}
                            className={pathname === href ? 'text-muted-foreground underline' : ''}
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          )}

          {children}
        </header>
      </div>
    </>
  )
}
