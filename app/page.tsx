import Hero from '@/components/sections/Hero'
import ResearchCard from '@/components/sections/ResearchCard'
import FundingStrip from '@/components/sections/FundingStrip'
import PeoplePreviewCard from '@/components/sections/PeoplePreviewCard'
import SectionLabel from '@/components/primitives/SectionLabel'
import Button from '@/components/primitives/Button'

const EngineeringIdentityIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="10" fill="#EAE0F5"/>
    <circle cx="24" cy="18" r="8" fill="#7B4FA6"/>
    <path d="M10 42 Q10 30 24 30 Q38 30 38 42" fill="#7B4FA6"/>
    <polygon points="24,4 25.8,10 32,10 27,13.8 29,20 24,16.2 19,20 21,13.8 16,10 22.2,10"
             fill="#C07C1A"/>
  </svg>
)

const DoctoralWellbeingIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="10" fill="#E0EFE8"/>
    <path d="M16 22 Q16 15 22 17 Q24 18 24 20 Q24 18 26 17 Q32 15 32 22 Q32 29 24 35 Q16 29 16 22Z"
          fill="#2E7D6B"/>
    <polyline points="10,39 17,33 25,36 38,25"
              fill="none" stroke="#4E2A84" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="38" cy="25" r="3" fill="#4E2A84"/>
  </svg>
)

const MentorshipCultureIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="10" fill="#FBF3E0"/>
    <circle cx="16" cy="18" r="6" fill="#4E2A84"/>
    <path d="M8 38 Q8 29 16 29 Q24 29 24 38" fill="#4E2A84"/>
    <circle cx="32" cy="18" r="6" fill="#2E7D6B"/>
    <path d="M24 38 Q24 29 32 29 Q40 29 40 38" fill="#2E7D6B"/>
    <path d="M19 13 Q24 6 29 13"
          fill="none" stroke="#C07C1A" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="7" r="3.5" fill="#C07C1A"/>
  </svg>
)

const AssessmentPracticeIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="10" fill="#EAE0F5"/>
    <rect x="12" y="8" width="24" height="32" rx="5" fill="white" stroke="#C8BEE0" strokeWidth="1.5"/>
    <rect x="16" y="14" width="16" height="3" rx="1.5" fill="#E2DDD6"/>
    <rect x="16" y="20" width="16" height="3" rx="1.5" fill="#E2DDD6"/>
    <rect x="16" y="26" width="10" height="3" rx="1.5" fill="#E2DDD6"/>
    <polyline points="16,34 20,38 28,30"
              fill="none" stroke="#2E7D6B" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Home() {
  return (
    <main>
      <Hero />

      <hr className="divider" />

      {/* Research themes */}
      <section className="section section-alt">
        <div className="section-inner">
          <SectionLabel>What we study</SectionLabel>
          <h2 className="section-h">Research themes</h2>
          <p className="section-lede">
            Questions at the intersection of identity, culture, and practice — from
            individual development to the institutional conditions that shape it.
          </p>
          <div className="research-grid">
            <ResearchCard
              icon={<EngineeringIdentityIcon />}
              title="Engineering Identity"
              description="How do engineers and researchers come to see themselves as such? We study identity formation across career stages — from undergraduates to faculty mentors."
              href="/research#identity"
            />
            <ResearchCard
              icon={<DoctoralWellbeingIcon />}
              title="Doctoral Wellbeing"
              description="Qualifying exams are among the most consequential and stressful doctoral milestones. We study how wellbeing and identity interact across this critical transition."
              href="/research#wellbeing"
            />
            <ResearchCard
              icon={<MentorshipCultureIcon />}
              title="Mentorship & Culture"
              description="How do faculty identities shape graduate mentoring? We examine the professional self-perceptions mentors bring — and how those perceptions affect the students they guide."
              href="/research#mentorship"
            />
            <ResearchCard
              icon={<AssessmentPracticeIcon />}
              title="Assessment Practice"
              description="What do office hours, cheat sheets, and peer review reveal about learning? We study assessment practices that are equitable, transparent, and genuinely effective."
              href="/research#assessment"
            />
          </div>
        </div>
      </section>

      {/* NSF funding strip */}
      <FundingStrip
        awardTitle="Research Initiation: The Influences of Engineering and Science Identities among Faculty in the Mentoring of Graduate Students"
        awardNumber="2306239"
        amount="$199,982"
        years="2023–2026"
      />

      {/* Team preview */}
      <section className="section section-white">
        <div className="section-inner">
          <SectionLabel>The team</SectionLabel>
          <h2 className="section-h">Who we are</h2>
          <p className="section-lede">
            A small, collaborative group drawing on engineering, science education
            research, and twenty years of high school physics teaching.
          </p>
          <div className="people-grid">
            <PeoplePreviewCard
              name="David O'Neill"
              role="Professor of Instruction · Principal Investigator"
              imageSrc="/images/headshots/david-oneill.jpg"
              href="/people#dave"
            />
            <PeoplePreviewCard
              name="Johan Tabora"
              role="Postdoctoral Research Fellow"
              imageSrc="/images/headshots/johan-tabora.png"
              href="/people#johan"
            />
            <PeoplePreviewCard
              name="Kate Manion"
              role="Undergraduate Researcher"
              imageSrc="/images/headshots/kate-manion.png"
              href="/people#kate"
            />
            <PeoplePreviewCard
              name="Ethan Cisneros"
              role="PhD Candidate Collaborator"
              imageSrc="/images/headshots/ethan-cisneros.png"
              href="/people#ethan"
            />
          </div>
          <Button variant="ghost" href="/people">Meet the full team →</Button>
        </div>
      </section>
    </main>
  )
}
