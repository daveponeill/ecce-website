import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/images/LogoWide_Words.png"
            alt="ECCE"
            width={90}
            height={28}
            className="footer-logo"
          />
          <p>
            Engineering Cognition, Culture &amp; Education<br />
            Department of Biomedical Engineering<br />
            <Link href="https://www.mccormick.northwestern.edu/" target="_blank" rel="noopener">
              McCormick School of Engineering
            </Link><br />
            Northwestern University<br />
            2145 Sheridan Road, Tech M335 &middot; Evanston IL 60208
          </p>
        </div>
        <nav className="footer-nav">
          <h4>Pages</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/people">People</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 ECCE Lab, Northwestern University</span>
        <span>Built with <Link href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</Link></span>
      </div>
    </footer>
  )
}
