import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/sections/PageHeader'
import Profile from '@/components/sections/Profile'
import CollaboratorItem from '@/components/sections/CollaboratorItem'
import PastMember from '@/components/sections/PastMember'
import SectionLabel from '@/components/primitives/SectionLabel'
import SocialIcon from '@/components/primitives/SocialIcon'

export const metadata: Metadata = { title: 'People — ECCE' }

export default function PeoplePage() {
  return (
    <main>
      <PageHeader label="The team" title="People" />

      <section className="section section-white">
        <div className="section-inner">

          {/* Principal Investigator */}
          <div className="people-tier" id="dave">
            <SectionLabel>Principal Investigator</SectionLabel>
            <Profile
              name="David O'Neill"
              credentials="M.Eng., D.Phil."
              pronouns="(he/him)"
              role="Professor of Instruction · Michael Jaharis Director of Experiential Learning"
              affiliation="Department of Biomedical Engineering, McCormick School of Engineering, Northwestern University"
              imageSrc="/images/headshots/david-oneill.jpg"
              linkedin="https://www.linkedin.com/in/davidponeill/"
              publicationsHref="/publications#engineering-education"
              bio={
                <>
                  <p>David read Engineering Science at Oxford (University College), earning an M.Eng. in 2008 and a D.Phil. in 2012. He completed postdoctoral work in the <Link href="https://www.dpag.ox.ac.uk/research/robbins-group">Robbins Group</Link> (Dept. of Physiology, Anatomy &amp; Genetics, Oxford), developing novel respiratory monitoring technology and computational models of blood gas transport, before joining the Department of Biomedical Engineering at Northwestern University in 2018.</p>
                  <p>His research examines engineering and research scientist identity, doctoral student wellbeing, and the cultures of mentorship and assessment that shape engineering education. He is the Associate Director of the <Link href="https://www.mccormick.northwestern.edu/research/engineering-education-research-center/">Northwestern Center for Engineering Education Research (NCEER)</Link>.</p>
                  <p>David teaches across the BME curriculum, including core courses in Fluid Mechanics, Signals and Systems, and the Senior &quot;Capstone&quot; Design Sequence. In service roles, he oversees undergraduate research, runs the Department Honors program, and manages teaching operations for the BME department.</p>
                </>
              }
            />
          </div>

          {/* Postdoctoral Fellow */}
          <div className="people-tier" id="johan">
            <SectionLabel>Postdoctoral Fellow</SectionLabel>
            <Profile
              name="Johan Tabora"
              credentials="Ph.D."
              pronouns="(he/him)"
              role="Postdoctoral Research Fellow"
              affiliation="Dept. BME, McCormick School of Engineering, Northwestern University"
              imageSrc="/images/headshots/johan-tabora.png"
              linkedin="https://www.linkedin.com/in/jntabora/"
              bio={
                <>
                  <p>Research interests: the intersection of race, power, and STEM education; experiences of underrepresented Asian American populations in STEM.</p>
                  <p>Ph.D. Science Education, Dept. Curriculum &amp; Instruction, University of Illinois Chicago. Ed.M. and M.S. Teacher Education, Harvard Graduate School of Education. B.S. Aerospace Engineering, Florida Institute of Technology. Before Johan&apos;s postdoc, Johan taught high school physics for 20 years in Chicago Public Schools.</p>
                  <p>At ECCE, Johan leads the longitudinal study of BME doctoral students&apos; wellbeing and identity development through qualifying examinations.</p>
                  <p>Selected publications:</p>
                  <ul>
                    <li><Link href="/publications#tabora-manion-oneill-2026-perma-v">Reliability of PERMA-V(N) (ASEE 2026)</Link></li>
                    <li><Link href="/publications#tabora-manion-oneill-2026-wellbeing-identity">Similar on Paper, Different in Practice (ASEE 2026)</Link></li>
                    <li><Link href="/publications#tabora-oneill-2025-asee-wip">Exploring Qualifying Exam Experiences (ASEE 2025)</Link></li>
                  </ul>
                </>
              }
            />
          </div>

          {/* Undergraduate Researchers */}
          <div className="people-tier" id="kate">
            <SectionLabel>Undergraduate Researchers</SectionLabel>
            <Profile
              name="Kate Manion"
              credentials=""
              pronouns="(she/her)"
              role="Undergraduate Researcher, 2024–present"
              affiliation=""
              imageSrc="/images/headshots/kate-manion.png"
              linkedin="https://www.linkedin.com/in/kate-manion-a1273a290/"
              bio={
                <>
                  <p>Kate contributes to the Office Hours project and the doctoral student engineering identity and wellbeing project. Kate is a co-author on three papers accepted to the 2026 ASEE Annual Conference.</p>
                  <p>Selected publications:</p>
                  <ul>
                    <li><Link href="/publications#tabora-manion-oneill-2026-perma-v">Reliability of PERMA-V(N) (ASEE 2026)</Link></li>
                    <li><Link href="/publications#tabora-manion-oneill-2026-wellbeing-identity">Similar on Paper, Different in Practice (ASEE 2026)</Link></li>
                    <li><Link href="/publications#manion-tabora-oneill-2026-interview-prompts">Comparing Broad and Focused Interview Prompts (ASEE 2026)</Link></li>
                    <li><Link href="/publications#manion-denzler-strong-oneill-2025-office-hours">Post-Pandemic Motivations and Barriers for Office Hours (ASEE 2025) 🏆</Link></li>
                  </ul>
                </>
              }
            />
          </div>

          {/* Collaborators */}
          <div className="people-tier" id="ethan">
            <SectionLabel>Collaborators</SectionLabel>
            <Profile
              name="Ethan Cisneros"
              credentials=""
              role="PhD Candidate Collaborator, 2024–present"
              affiliation=""
              imageSrc="/images/headshots/ethan-cisneros.png"
              linkedin="https://www.linkedin.com/in/ecisneros501/"
              bio={
                <>
                  <p>Ethan works on implicit and explicit measures of engineering and research science identities in doctoral students.</p>
                  <p>Selected publications:</p>
                  <ul>
                    <li><Link href="/publications#cisneros-oneill-2025-asee">Comparing Implicit and Explicit Measurements of Identity (ASEE 2025)</Link></li>
                  </ul>
                </>
              }
            />
            <ul className="collab-list">
              <CollaboratorItem
                name="Casey Ankeny"
                affiliation="Dept. of Biomedical Engineering, Northwestern University"
                imageSrc="/images/headshots/casey-ankeny.jpg"
              />
              <CollaboratorItem
                name="Rick McGee"
                affiliation="Feinberg School of Medicine, Northwestern University"
                imageSrc="/images/headshots/rick-mcgee.jpeg"
              />
              <CollaboratorItem
                name="Ken Gentry"
                affiliation="McCormick Office of Undergraduate Engineering"
                imageSrc="/images/headshots/ken-gentry.jpg"
              />
            </ul>
          </div>

          {/* Past Members */}
          <div className="people-tier">
            <SectionLabel>Past Members</SectionLabel>
            <PastMember
              name="Emily Schafer — Searle Teaching-as-Research Scholar (PhD candidate), 2020–2024"
              imageSrc="/images/headshots/emily-schafer.png"
              description={
                <>
                  <p>Office hours and student–instructor relationships project.</p>
                  <p><Link href="/publications#schafer-oneill-2023-asee-wip">Improving Student–Instructor Relationships through Office Hours (ASEE 2023) 🏆</Link></p>
                  <SocialIcon type="linkedin" href="https://www.linkedin.com/in/emily-schafer-63298a106/" />
                </>
              }
            />
            <PastMember
              name="Aurora Greane — Undergraduate Researcher (BME Summer Award; URAP), 2021–2024"
              imageSrc="/images/headshots/aurora-greane.jpeg"
              description={
                <>
                  <p>NSF mentoring identity project. Now a <Link href="https://eng.unimelb.edu.au/tll/about/graduate-researchers/aurora-greane">PhD student at the University of Melbourne</Link>.</p>
                  <SocialIcon type="linkedin" href="https://www.linkedin.com/in/aurora-greane-1b53aa147/" />
                </>
              }
            />
            <PastMember
              name="Tyson Strong — Undergraduate Researcher (Civil Engineering; URAP), 2024–25"
              imageSrc="/images/headshots/tyson-strong.jpg"
              description={
                <>
                  <p>Office Hours project.</p>
                  <p><Link href="/publications#manion-denzler-strong-oneill-2025-office-hours">Post-Pandemic Motivations and Barriers for Office Hours (ASEE 2025) 🏆</Link></p>
                </>
              }
            />
            <PastMember
              name="Jordan Denzler — Undergraduate Researcher (SESP; URAP), 2024–25"
              imageSrc="/images/headshots/jordan-denzler.png"
              description={
                <>
                  <p>Office Hours project.</p>
                  <p><Link href="/publications#manion-denzler-strong-oneill-2025-office-hours">Post-Pandemic Motivations and Barriers for Office Hours (ASEE 2025) 🏆</Link></p>
                </>
              }
            />
          </div>

        </div>
      </section>
    </main>
  )
}
