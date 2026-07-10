import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

// next/font loads the font files optimally. globals.css references these fonts
// by name ('DM Serif Display', 'Inter') via --serif and --sans tokens — that
// still works because next/font makes the fonts available in the browser.
const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ECCE — Engineering Cognition, Culture & Education',
  description:
    'The ECCE group studies how engineers develop professional identity, how doctoral students navigate high-stakes milestones, and how mentorship and assessment cultures shape both.',
  icons: { icon: '/ecce-website/images/LogoSquare.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.className} ${inter.className}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
