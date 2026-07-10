import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/sections/PageHeader'

export const metadata: Metadata = { title: 'Contact — ECCE' }

export default function ContactPage() {
  return (
    <main>
      <PageHeader label="Get In Touch" title="Contact" />
      <section className="section section-white">
        <div className="section-inner">
          <div className="profile">
            <div className="profile-avatar">
              <Image
                src="/images/headshots/david-oneill.jpg"
                alt="David O'Neill"
                width={140}
                height={140}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="profile-body">
              <h3>David O&apos;Neill</h3>
              <p className="profile-role">
                Professor of Instruction<br />
                Michael Jaharis Director of Experiential Learning<br />
                Associate Director, Northwestern Center for Engineering Education Research (NCEER)
              </p>
              <p>
                Department of Biomedical Engineering<br />
                McCormick School of Engineering, Northwestern University<br />
                2145 Sheridan Road, Tech M335<br />
                Evanston, IL 60208
              </p>
              <p>Email: <a href="mailto:david.oneill@northwestern.edu">david.oneill@northwestern.edu</a></p>
              <p>
                <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/oneill-david.html" target="_blank" rel="noopener noreferrer">
                  Northwestern BME faculty page
                </a><br />
                <a href="https://www.mccormick.northwestern.edu/research/engineering-education-research-center/" target="_blank" rel="noopener noreferrer">
                  Northwestern Center for Engineering Education Research (NCEER)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
