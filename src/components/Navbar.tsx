'use client'
import React from "react";
import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#location' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const onScroll = () => {
      let current = 'hero'
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[7%] py-4
        bg-black backdrop-blur-md border-b border-rose/20"
    >
      <span
        className="font-cormorant  text-rose text-[1.1rem] font-bold tracking-wide"
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      >
        Daily Mysteries
      </span>

      {/* <ul className="flex gap-4 list-none">
        {navLinks.map(({ label, href }) => {
          const id = href.replace('#', '')
          const isActive = active === id
          return (
            <li key={href}>
              <Link
                href={href}
                className={`font-nunito text-xs font-semibold tracking-wide transition-colors
                  ${isActive
                    ? 'text-dark underline underline-offset-4 decoration-2 decoration-rose'
                    : 'text-dark hover:text-rose'
                  }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul> */}
    </nav>
  )
}
