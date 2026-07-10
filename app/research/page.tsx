import type { Metadata } from 'next'
import PageHeader from '@/components/sections/PageHeader'
import ResearchDetail from '@/components/sections/ResearchDetail'
import SectionLabel from '@/components/primitives/SectionLabel'
import { type PublicationItemProps } from '@/components/primitives/PublicationItem'

export const metadata: Metadata = {
  title: 'Research — ECCE',
}

const identityPubs: PublicationItemProps[] = [
  {
    authors: 'Cisneros, E. and <strong>O\'Neill, D.P.</strong>',
    title: 'Comparing Implicit and Explicit Measurements of Engineering and Research Science Identities in Engineering Doctoral Students.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
    link: '/publications#cisneros-oneill-2025-asee',
  },
]

const wellbeingPubs: PublicationItemProps[] = [
  {
    authors: 'Tabora, J., Manion, K., and <strong>O\'Neill, D.P.</strong>',
    title: 'Reliability of PERMA-V(N): A Qualitative Coding Framework for Capturing Well-being Dimensions in Engineering Doctoral Students.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
    link: '/publications#tabora-manion-oneill-2026-perma-v',
  },
  {
    authors: 'Tabora, J., Manion, K., and <strong>O\'Neill, D.P.</strong>',
    title: 'Similar on Paper, Different in Practice: Well-being and Identity Divergence During BME Doctoral Qualifying Examinations.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
    link: '/publications#tabora-manion-oneill-2026-wellbeing-identity',
  },
  {
    authors: 'Manion, K., Tabora, J., and <strong>O\'Neill, D.P.</strong>',
    title: 'Comparing Broad and Focused Interview Prompts for Biomedical Engineering Doctoral Students Discussing Well-being and Identity.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
    link: '/publications#manion-tabora-oneill-2026-interview-prompts',
  },
  {
    authors: 'Tabora, J., and <strong>O\'Neill, D.P.</strong>',
    title: 'Work in Progress: Exploring Qualifying Exam Experiences in Engineering Doctoral Students using Well-Being Constructs.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
    link: '/publications#tabora-oneill-2025-asee-wip',
  },
]

const assessmentPubs: PublicationItemProps[] = [
  {
    authors: '<strong>O\'Neill, D.P.</strong>',
    title: 'Testing Aids and Their Impacts in Engineering Education: An Early Look at a Scoping Review.',
    venue: '2024 IEEE Frontiers in Education Conference (FIE), Washington DC',
    year: 2024,
    link: '/publications#oneill-2024-fie',
  },
  {
    authors: 'Ankeny, C.J., <strong>O\'Neill, D.P.</strong>, Gentry, K., Eshun, P.',
    title: 'Effectiveness of Inclusive, Reflective Teaching Practices on Problem Solving Proficiency.',
    venue: '131st ASEE Annual Conference, Portland',
    year: 2024,
    link: '/publications#ankeny-oneill-gentry-eshun-2024-asee',
  },
  {
    authors: 'Ankeny, C.J., Gentry, K., <strong>O\'Neill, D.P.</strong>, Eshun, P.',
    title: 'Work-in-Progress: Can in-class peer reviews of written assignments improve problem solving and scientific writing in a standards-based, sophomore laboratory course?',
    venue: '130th ASEE Annual Conference, Baltimore',
    year: 2023,
    award: 'Best of Works-in-Progress Finalist',
    link: '/publications#ankeny-gentry-oneill-eshun-2023-asee-wip',
  },
  {
    authors: 'Ankeny, C.J., Adkins, A., <strong>O\'Neill, D.P.</strong>',
    title: 'Impact of Two Reflective Practices in an Engineering Laboratory Course using Standards-based Grading.',
    venue: '129th ASEE Annual Conference, Minneapolis',
    year: 2022,
    link: '/publications#ankeny-adkins-oneill-2022-asee',
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>',
    title: 'Redesign of a BME Lab Class to Maintain Hands-on Experimentation Despite Remote Learning Constraints.',
    venue: 'Biomedical Engineering Education, 1: 229–235',
    year: 2021,
    link: '/publications#oneill-2021-bme-education',
  },
  {
    authors: 'Adkins, A., Ankeny, C.J., <strong>O\'Neill, D.P.</strong>',
    title: 'Work-in-progress: Effectiveness of different reflection approaches for improving mastery in an engineering laboratory course.',
    venue: '128th ASEE Annual Conference, Online',
    year: 2021,
    link: '/publications#adkins-ankeny-oneill-2021-asee',
  },
  {
    authors: 'Ankeny, C.J., <strong>O\'Neill, D.P.</strong>, Beckmann, L.',
    title: 'Work-in-progress: Comparison of a standards-based assessment to a traditional, summative rubric in a biomedical engineering laboratory.',
    venue: '127th ASEE Annual Conference, Online',
    year: 2020,
    link: '/publications#ankeny-oneill-beckmann-2020-asee',
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>, Ankeny, C.J.',
    title: 'Work in progress: Aligning and assessing learning objectives for a biomedical engineering course sequence using standards-based grading within a learning management system.',
    venue: '126th ASEE Annual Conference, Tampa',
    year: 2019,
    award: 'Best of Works-in-Progress Finalist',
    link: '/publications#oneill-ankeny-2019-asee',
  },
]

const officeHoursPubs: PublicationItemProps[] = [
  {
    authors: 'Manion, K., Denzler, J., Strong, T.M., and <strong>O\'Neill, D.P.</strong>',
    title: 'Post-Pandemic Motivations and Barriers for Office Hours Attendance in Biomedical Engineering.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
    award: 'ASEE BED Best DEI Paper Award',
    link: '/publications#manion-denzler-strong-oneill-2025-office-hours',
  },
  {
    authors: 'Schafer, E.A. and <strong>O\'Neill, D.P.</strong>',
    title: 'Work-in-Progress: Improving Student–Instructor Relationships and Help-seeking through Office Hours.',
    venue: '130th ASEE Annual Conference, Baltimore',
    year: 2023,
    award: 'Best of Works-in-Progress Finalist',
    link: '/publications#schafer-oneill-2023-asee-wip',
  },
]

export default function ResearchPage() {
  return (
    <main>
      <PageHeader
        label="What we study"
        title="Research"
        description="Our projects sit at the intersection of identity, culture, and practice — from how individuals come to see themselves as engineers and researchers, to the institutional conditions that shape mentorship, assessment, and wellbeing."
      />

      <section className="section section-white" id="identity">
        <div className="section-inner">
          <ResearchDetail
            status="nsf-active"
            statusLabel="NSF Funded · Award #2306239 · $199,982 · 2023–2026"
            title="Engineering & Science Identity in Graduate Mentorship"
            description={
              <>
                <p>How do engineering faculty understand their own identities as engineers and scientists — and how do those self-perceptions shape the way they mentor graduate students?</p>
                <p>This project focuses on BME and MechE faculty at Northwestern, examining the relationship between faculty members&apos; professional identities and the mentoring relationships they build with their graduate students.</p>
              </>
            }
            publications={identityPubs}
          />
        </div>
      </section>

      <section className="section section-alt" id="wellbeing">
        <div className="section-inner">
          <ResearchDetail
            status="nsf-pending"
            statusLabel="Pending NSF Funding"
            title="Doctoral Wellbeing & Identity at the Qualifying Exam"
            description={
              <>
                <p>Qualifying examinations are among the most consequential and stressful milestones in doctoral education. This project uses longitudinal qualitative methods and the PERMA-V(N) wellbeing framework to understand how BME doctoral students experience qualifying exams.</p>
                <p>We are particularly interested in how wellbeing and engineering identity interact across this high-stakes transition, and what that interaction can tell us about supporting doctoral students more effectively.</p>
              </>
            }
            publications={wellbeingPubs}
          />
        </div>
      </section>

      <section className="section section-white" id="assessment">
        <div className="section-inner">
          <ResearchDetail
            status="internal"
            statusLabel="Internal Funding · URAP"
            title="Testing Aids in Engineering Assessment"
            description={
              <>
                <p>What do students put on authorized reference sheets, and what does that reveal about how they understand course material?</p>
                <p>This project develops robust methods for evaluating the quality and strategic use of testing aids in undergraduate engineering courses — treating cheat sheets and reference sheets as a window into how students organize and prioritize knowledge.</p>
              </>
            }
            publications={assessmentPubs}
          />
        </div>
      </section>

      <section className="section section-alt" id="mentorship">
        <div className="section-inner">
          <ResearchDetail
            status="internal"
            statusLabel="Internal Funding · URAP, Murphy Society"
            title="Office Hours: Barriers, Motivations & Inclusive Practice"
            description={
              <>
                <p>Office hours are an underutilized resource. This project investigates why students do and don&apos;t attend, and what instructional practices make office hours more equitable and effective.</p>
                <p>By understanding the barriers students face and the motivations that bring them through the door, we aim to identify practices that make office hours a genuinely useful part of the learning experience for all students.</p>
              </>
            }
            publications={officeHoursPubs}
          />
        </div>
      </section>

      <section className="section section-white" id="opportunities">
        <div className="section-inner">
          <SectionLabel>Get involved</SectionLabel>
          <h2 className="section-h">Opportunities</h2>
          <div className="research-grid">
            <div className="r-card">
              <h3>Postdoctoral Positions</h3>
              <p>No current openings.</p>
            </div>
            <div className="r-card">
              <h3>Students</h3>
              <p>We welcome engagement from current Northwestern undergraduate and graduate students across all active projects. We are flexible with time commitment and welcome students who bring their own research questions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
