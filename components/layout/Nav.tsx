'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/research', label: 'RESEARCH' },
  { href: '/people', label: 'PEOPLE' },
  { href: '/publications', label: 'PUBLICATIONS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/LogoWide.png"
            alt="ECCE"
            width={120}
            height={36}
            priority
          />
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
